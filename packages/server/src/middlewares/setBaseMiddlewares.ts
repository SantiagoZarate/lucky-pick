import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { corsOptions } from '../config/cors';
import { envs } from '../config/envs';

export function setBaseMiddlewares(app: Application) {
  // Allow posts requests
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Allow CORS
  app.use(cors(corsOptions));

  // Parse cookies
  app.use(cookieParser());

  envs.MODE === 'dev' && app.use(morgan('dev'));
}
