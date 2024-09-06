import { Router } from "express";
import controller from "../controllers/raffle.controller";

const raffleRouter = Router();

raffleRouter.get("/", controller.getAll);
raffleRouter.get("/:id", controller.getOne);
raffleRouter.post("/", controller.create);

export { raffleRouter };
