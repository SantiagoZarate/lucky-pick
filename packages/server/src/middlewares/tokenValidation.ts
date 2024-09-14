/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from 'express';
import codes from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { envs } from 'src/config/envs';

export function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.usertoken;
  if (!token) {
    return res.status(codes.UNAUTHORIZED).json({
      message: 'Invalid token',
    });
  }

  jwt.verify(token, envs.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(codes.UNAUTHORIZED).json({
        message: 'Invalid token',
      });
    }
    req.body.user = decoded;
    next();
  });
}
