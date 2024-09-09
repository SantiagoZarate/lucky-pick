import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { AppRouter } from '../../server/src/router';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:7000/trpc',
    }),
  ],
});
