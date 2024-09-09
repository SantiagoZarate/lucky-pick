import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

import type { AppRouter } from '../../../server/src/router';

export const trpc = createTRPCReact<AppRouter>();

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:7000/api/trpc',
    }),
  ],
});
