import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import schema from "./schemas";
import { envs } from "../src/config/envs";

const client = createClient({
  url: envs.TURSO_URL,
  authToken: envs.TURSO_TOKEN,
});

export const db = drizzle(client, {
  logger: true,
  schema,
});
