import { InferInsertModel } from 'drizzle-orm';
import { raffleSchema } from '../../drizzle/schemas/raffleSchema';

// This is the source of truth, represents what's on the DB
export type Raffle = Required<InferInsertModel<typeof raffleSchema>>;

// & {
//   prizes: string[];
// };

export type RaffleSelect = Raffle['id'];
export type RaffleDelete = Raffle['id'];
export type RaffleInsert = Pick<Raffle, 'price_per_ticket' | 'title'> & {
  prizes: string[];
  tickets_amount: number;
};
