import { router } from '../lib/trpc';
import { raffleRouter } from './raffle.router';
import { authRouter } from './auth.router';

export const appRouter = router({
  raffle: raffleRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
