import { router } from '@lib/trpc';
import { raffleRouter } from './raffle.router';

export const appRouter = router({
  user: raffleRouter,
});
