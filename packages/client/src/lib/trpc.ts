import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

import type { AppRouter } from '../../../server/src/router';
export * from '../../../server/src/lib/zod-validations';
import envs from '@/config/envs';

export const trpc = createTRPCReact<AppRouter>();

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: envs.RAFFLE_API_URL,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
          headers: {
            'Sponsored-By': 'Nike, Just Do It',
          },
        });
      },
    }),
  ],
});
