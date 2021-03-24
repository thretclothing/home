import 'zone.js/dist/zone-node';
import * as express from 'express';
import * as lb from '@google-cloud/logging-bunyan';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

export interface Logger {
  info: (data: unknown) => void;
}

export interface RequestWithLogger extends express.Request {
  log: Logger;
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function app(): Promise<[express.Express, Logger | undefined]> {

  const isProductionEnv = process.env.NODE_ENV === 'production';
  const server = express();
  const distFolder = join(process.cwd(), 'dist/thret/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  let logger;

  if (isProductionEnv) {
    const middlewareResponse = await lb.express.middleware({logName: 'express_logs'});
    logger = middlewareResponse.logger;
    server.use(middlewareResponse.mw);
  }

  /**
   * Forward all requests for assets to the static dist folder
   */
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  /**
   * Catch all other requests and route to the Universal engine
   */
  server.get('*', (req, res) => {

    const cloudflareHeader = req.header('CF-Connecting-IP');

    if (isProductionEnv && cloudflareHeader) {
      (req as RequestWithLogger).log.info({request: {
        unwrappedIp: cloudflareHeader,
        resource: req.originalUrl,
        method: req.method
      }});
    }

    res.render(indexHtml, {req, providers: [{provide: APP_BASE_HREF, useValue: req.baseUrl}]});
  });

  return [server, logger];
}

/**
 * Webpack will replace 'require' with '__webpack_require__'
 * '__non_webpack_require__' is a proxy to Node 'require'
 * The below code is to ensure that the server is run only when not requiring the bundle.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {

  const port = process.env.PORT || 8080;

  app().then(([server, logger]) => {
    server.listen(port, () => {

      if (logger) {
        logger.info(`Node Express server listening on port ${port}`);
      } else {
        console.log(`Node Express server listening on port ${port}`);
      }
    });
  });
}

export * from './src/main.server';
