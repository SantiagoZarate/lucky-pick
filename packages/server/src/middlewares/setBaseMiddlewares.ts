import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import { corsOptions, envs } from '../config';

export function setBaseMiddlewares(app: Application) {
  // Allow posts requests
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Parse cookies
  app.use(cookieParser());

  // Allow CORS
  app.use(cors(corsOptions));

  envs.MODE === 'dev' && app.use(morgan('dev'));
}
