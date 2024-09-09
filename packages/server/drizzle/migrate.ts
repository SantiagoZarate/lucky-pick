import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from '.';
import { envs } from '../src/config/envs';

if (envs.MIGRATE) {
  migrate(db, { migrationsFolder: './migrations' })
    .then((response) => console.log('Migration succesfully done', response))
    .catch((err) => console.log({ message: 'There was an error', err }));
}
