import { z } from "zod";
import { config } from "dotenv";
config();

const envsSchema = z.object({
  PORT: z.coerce.number(),
  MODE: z.enum(["prod", "dev"]),
});

export const envs = envsSchema.parse({
  PORT: process.env.PORT ?? "5000",
  MODE: process.env.MODE ?? "dev",
});
