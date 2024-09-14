/*eslint-disable @typescript-eslint/no-explicit-any */

import { TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import jwt from 'jsonwebtoken';
import { envs } from '../config/envs';

export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  const verifyToken = () => {
    const token = req.cookies?.['usertoken'];

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
    res.cookie(name, value, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000000),
      sameSite: 'none',
      secure: envs.MODE === 'prod',
    });
  };

  return { setCookies, user };
};
