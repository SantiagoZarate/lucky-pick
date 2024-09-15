import { TRPCError } from '@trpc/server';
import { procedure } from '../lib/trpc';

export const protectedProcedure = procedure.use(async function isAuthed(opts) {
  const { ctx } = opts;
  console.log(ctx);

  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'This route is protected' });
  }

  return opts.next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});
