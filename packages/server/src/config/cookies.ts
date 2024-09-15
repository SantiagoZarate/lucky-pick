import { CookieOptions } from 'express';
import { envs } from './envs';

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: 365 * 24 * 60 * 60,
  expires: new Date(Date.now() + 900000),
  sameSite: 'lax',
  secure: envs.MODE === 'prod',
};
