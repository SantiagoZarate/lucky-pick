import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
config();

export default defineConfig({
  out: './drizzle/migrations',
  dialect: 'sqlite',
  driver: 'turso',
  schema: './drizzle/schemas',
  verbose: true,
  dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_TOKEN!,
  },
});
