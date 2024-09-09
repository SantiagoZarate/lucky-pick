import { Ticket } from './ticket.type';

export interface Raffle {
  id: string;
  title: string;
  price_per_ticket: number;
  public_url: string;
}

export type RaffleSelect = Raffle['id'];
export type RaffleDelete = Raffle['id'];
export type RaffleInsert = Pick<Raffle, 'price_per_ticket' | 'title'> & {
  tickets_amount: number;
  prizes?: string[] | undefined;
};

export type RaffleDTO = Raffle;

export type RaffleTicketsDTO = RaffleDTO & {
  tickets: Ticket[];
};
