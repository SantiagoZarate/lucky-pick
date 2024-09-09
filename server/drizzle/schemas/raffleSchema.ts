import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { nanoid } from 'nanoid';
import { ticketSchema } from './ticketSchema';

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
});

export const raffleRelations = relations(raffleSchema, ({ many }) => ({
  tickets: many(ticketSchema),
}));
