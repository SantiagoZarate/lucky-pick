import { relations, sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { nanoid } from 'nanoid';
import { ticketSchema } from './ticketSchema.drizzle';
import { userSchema } from './userSchema.drizzle';

export const raffleSchema = sqliteTable('raffle', {
  id: text('id')
    .notNull()
    .primaryKey()
    .$default(() => nanoid()),
  public_url: text('public_url')
    .notNull()
    .unique()
    .$default(() => nanoid()),
  title: text('title').notNull(),
  price_per_ticket: integer('price_per_ticket').notNull(),
  prizes: text('prizes'),
  user_id: text('user_id')
    .notNull()
    .references(() => userSchema.id),
  created_at: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`),
});

export const raffleRelations = relations(raffleSchema, ({ many, one }) => ({
  tickets: many(ticketSchema),
  user: one(userSchema, {
    references: [userSchema.id],
    fields: [raffleSchema.user_id],
  }),
}));
