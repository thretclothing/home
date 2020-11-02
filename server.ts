import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

export function app(): express.Express {

  const server = express();
  const distFolder = join(process.cwd(), 'dist/thret/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  /**
   * Catch all requests for assets to the static dist folder
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

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  app().listen(process.env.PORT || 8080);
}

export * from './src/main.server';
