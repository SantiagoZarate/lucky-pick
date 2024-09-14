import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express, { Application } from 'express';
import { renderTrpcPanel } from 'trpc-panel';

import { envs } from '../config/envs';
import { createContext } from '../lib/context';
import { setBaseMiddlewares } from '../middlewares/setBaseMiddlewares';
import { appRouter } from '../router';
import { healthcheck } from './healtcheck';

const app: Application = express();

setBaseMiddlewares(app);

app.use(
  '/api/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use('/', (_, res) => {
  return res.send(renderTrpcPanel(appRouter, { url: 'http://localhost:7000/api/trpc' }));
});

app.get('/health', healthcheck);

app.listen(envs.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${envs.PORT}`);
});

export default app;
