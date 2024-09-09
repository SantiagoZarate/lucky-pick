import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";

import { createContext } from "./context";

export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().meta<OpenApiMeta>().create();

export const middleware = t.middleware;
export const router = t.router;

/**
 * Public procedures
 **/
export const publicProcedure = t.procedure;
