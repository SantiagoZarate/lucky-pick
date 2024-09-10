import { Handler, Request, Response } from 'express';

export const healthcheck: Handler = (_: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: 'Server up an running!',
  });
};
