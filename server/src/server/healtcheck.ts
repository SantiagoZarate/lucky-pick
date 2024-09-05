import { Request, Response, Handler } from "express";

export const healthcheck: Handler = (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: "Server up an running!",
  });
};
