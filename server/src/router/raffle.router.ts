import { Router } from "express";
import controller from "../controllers/raffle.controller";

export const raffleRouter = Router();

raffleRouter.get("/", controller.getAll);
raffleRouter.get("/:id", controller.getOne);
raffleRouter.post("/", controller.create);
