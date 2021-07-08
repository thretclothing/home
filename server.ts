import 'zone.js/node';
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function app(): express.Express {

  const server = express();
  const distFolder = join(process.cwd(), 'dist/thret/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.use((req, res, next) => {
    console.log(`${req.method} request for: ${req.originalUrl}, by resolved IP Address: ${req.get('CF-Connecting-IP') || 'N/A'}`);
    next();
  });

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
    res.render(indexHtml, {req, providers: [{provide: APP_BASE_HREF, useValue: req.baseUrl}]});
  });

  return server;
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
  app().listen(port, () => console.log(`Node Express server listening on port ${port}`));
}

export * from './src/main.server';
