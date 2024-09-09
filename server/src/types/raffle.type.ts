import { InferInsertModel } from 'drizzle-orm';
import { raffleSchema } from '../../drizzle/schemas/raffleSchema';

export type Raffle = Required<InferInsertModel<typeof raffleSchema>>;

export type RaffleSelect = Raffle['id'];
export type RaffleDelete = Raffle['id'];
export type RaffleInsert = Pick<Raffle, 'price_per_ticket' | 'title'> & {
  prizes: string[];
  tickets_amount: number;
};
