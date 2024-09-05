import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config();

export default defineConfig({
  out: "./drizzle/",
  dialect: "sqlite",
  driver: "turso",
  schema: "./drizzle/schemas",
  verbose: true,
  dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_TOKEN!,
  },
});
