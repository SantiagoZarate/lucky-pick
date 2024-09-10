import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createOpenApiHttpHandler } from 'trpc-openapi';

import { envs } from '@config/envs';
import { openApiDocument } from '@lib/openapi';
import { setBaseMiddlewares } from '@middlewares/setBaseMiddlewares';
import { appRouter } from '@router';
import { healthcheck } from './healtcheck';

const app = express();
setBaseMiddlewares(app);

app.use(
  '/api/trpc',
  createExpressMiddleware({
    router: appRouter,
  })
);

app.use(
  '/api',
  createOpenApiHttpHandler({
    router: appRouter,
  })
);

// Serve Swagger UI with our OpenAPI schema
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(openApiDocument));
app.get('/health', healthcheck);

export function start() {
  app.listen(envs.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${envs.PORT}`);
  });
}

export default app;
