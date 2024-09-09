import { generateOpenApiDocument } from 'trpc-openapi';
import { appRouter } from '@router';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Lucky Pick API',
  description: 'OpenAPI compliant REST API built using tRPC with Express',
  version: '1.0.0',
  baseUrl: 'http://localhost:7000/api',
  tags: ['auth', 'raffles', 'tickets'],
});
