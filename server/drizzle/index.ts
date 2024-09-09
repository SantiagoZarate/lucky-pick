import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { envs } from '../src/config/envs';
import schema from './schemas';

const client = createClient({
  url: envs.TURSO_URL,
  authToken: envs.TURSO_TOKEN,
});

export const db = drizzle(client, {
  logger: true,
  schema,
});
