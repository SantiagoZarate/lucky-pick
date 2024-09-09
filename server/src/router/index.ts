// import { Router } from "express";
// import { specs, swaggerUi } from "../controllers/swagger.controller";
// import { healthcheck } from "../server/healtcheck";
// import { raffleRouter } from "./raffle.router";

// export const routes = Router();

// routes.use("/", swaggerUi.serve, swaggerUi.setup(specs));
// routes.use("/health", healthcheck);
// routes.use("/api/raffles", raffleRouter);

import { router } from "../lib/trpc";
import { raffleRouter } from "./raffle.router";

export const appRouter = router({
  user: raffleRouter,
});
