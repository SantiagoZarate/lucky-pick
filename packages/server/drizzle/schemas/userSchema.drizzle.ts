import { relations } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { nanoid } from 'nanoid';
import { raffleSchema } from './raffleSchema.drizzle';

export const userSchema = sqliteTable('user', {
  id: text('id')
    .notNull()
    .primaryKey()
    .$default(() => nanoid()),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
});

export const userRelations = relations(userSchema, ({ many }) => ({
  raffles: many(raffleSchema),
}));
