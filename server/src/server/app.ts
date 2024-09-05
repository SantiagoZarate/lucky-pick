import express from "express";
import { envs } from "../config/envs";
import { setBaseMiddlewares } from "../middlewares/setBaseMiddlewares";
import { healthcheck } from "./healtcheck";

const app = express();
setBaseMiddlewares(app);

app.use("/health", healthcheck);

export function start() {
  app.listen(envs.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${envs.PORT}`);
  });
}
