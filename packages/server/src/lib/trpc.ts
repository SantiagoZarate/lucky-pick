import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { TRPCPanelMeta } from 'trpc-panel';

import { createContext } from './context';

export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC
  .context<Context>()
  .meta<TRPCPanelMeta>()
  .create({
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          code: error.code,
        },
      };
    },
  });

export const middleware = t.middleware;
export const router = t.router;
export const procedure = t.procedure;

/**
 * Public procedures
 **/
export const publicProcedure = t.procedure;

/**
 * Public procedures
 **/
export { protectedProcedure } from '../middlewares/protectedProcedure';
