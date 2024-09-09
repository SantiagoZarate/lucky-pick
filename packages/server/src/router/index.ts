import { router } from '@lib/trpc';
import { raffleRouter } from './raffle.router';

export const appRouter = router({
  raffle: raffleRouter,
});

export type AppRouter = typeof appRouter;
