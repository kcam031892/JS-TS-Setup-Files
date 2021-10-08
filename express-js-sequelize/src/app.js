import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import { CONFIG } from './shared/config';
import helmet from 'helmet';
import xss from 'xss-clean';
import routes from 'routes';
import compression from 'compression';
import notFoundHandler from 'middlewares/NotFoundHandler';
import errorHandler from 'middlewares/ErrorHandler';
import { passportStrategy } from 'shared/config/passport';
const app = express();

if (CONFIG.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// Middlewares.
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(xss());
app.use(compression());
app.use(cors());

passportStrategy();

// Routes.
app.use(routes);

// Error and Notfound handler.
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
