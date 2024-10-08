import { z } from 'zod';
import { config } from 'dotenv';
config();

const envsSchema = z.object({
  PORT: z.coerce.number(),
  MODE: z.enum(['prod', 'dev']),
  TURSO_URL: z.string().url(),
  TURSO_TOKEN: z.string(),
  MIGRATE: z.coerce.boolean().default(false),
  JWT_SECRET: z.string(),
  SALT_ROUNDS: z.coerce.number(),
  CORS_ORIGIN: z.string(),
});

export const envs = envsSchema.parse({
  PORT: process.env.PORT ?? 5000,
  MODE: process.env.MODE ?? 'dev',
  TURSO_TOKEN: process.env.TURSO_TOKEN,
  TURSO_URL: process.env.TURSO_URL,
  MIGRATE: process.env.MIGRATE,
  JWT_SECRET: process.env.SECRET,
  SALT_ROUNDS: process.env.SALT_ROUNDS ?? 1,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
});
