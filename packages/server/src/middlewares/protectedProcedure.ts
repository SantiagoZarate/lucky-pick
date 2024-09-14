import { TRPCError } from '@trpc/server';
import { publicProcedure } from '../lib/trpc';

export const protectedProcedure = publicProcedure.use(async function isAuthed(opts) {
  const { ctx } = opts;

  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'This route is protected' });
  }

  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});
