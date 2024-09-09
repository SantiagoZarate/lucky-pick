import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { raffleSchema } from './raffleSchema';
import { relations } from 'drizzle-orm';

export const ticketSchema = sqliteTable('ticket', {
  id: integer('id').primaryKey(),
  purchased_by: text('purchased_by'),
  available: integer('available', { mode: 'boolean' }).default(true),
  raffle_id: text('raffle_id')
    .notNull()
    .references(() => raffleSchema.id),
});

export const ticketRelations = relations(ticketSchema, ({ one }) => ({
  raffle: one(raffleSchema, {
    references: [raffleSchema.id],
    fields: [ticketSchema.raffle_id],
  }),
}));
