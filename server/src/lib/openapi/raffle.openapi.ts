import { OpenApiMeta } from "trpc-openapi";

export const getAll: OpenApiMeta = {
  openapi: { method: "GET", path: "/raffles", description: "get all raffles" },
};

export const getOne: OpenApiMeta = {
  openapi: {
    method: "GET",
    path: "/raffles/:id",
    description: "get raffle by id",
  },
};

export const create: OpenApiMeta = {
  openapi: {
    method: "POST",
    path: "/raffles",
    description: "create a new raffle",
  },
};
