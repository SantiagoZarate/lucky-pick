/*eslint-disable @typescript-eslint/no-explicit-any */

import { TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import jwt from 'jsonwebtoken';
import { cookieOptions, envs } from '../config';

export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  const verifyToken = () => {
    const token = req.cookies?.['lucky-pick-usertoken'];

    if (!token) {
      return null;
    }

    jwt.verify(token, envs.JWT_SECRET, (err: any) => {
      if (err) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid token',
        });
      }
    });

    return jwt.decode(token) as { id: string };
  };

  const user = verifyToken();

  const setCookies = (name: string, value: unknown) => {
    res.cookie(name, value, cookieOptions);
  };

  return {
    setCookies,
    user,
    removeCookies(name: string) {
      res.clearCookie(name);
    },
  };
};
