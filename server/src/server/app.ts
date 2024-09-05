import express from "express";
import { envs } from "../config/envs";
import { setBaseMiddlewares } from "../middlewares/setBaseMiddlewares";

const app = express();
setBaseMiddlewares(app);

export function start() {
  app.listen(envs.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${envs.PORT}`);
  });
}
