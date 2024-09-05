import { RaffleFormSchema } from '@/lib/zod-validation/raffleSchema';

export type Raffle = Omit<RaffleFormSchema, 'amount_tickets'> & {
  tickets: {
    id: number;
    available: boolean;
    owner: string | undefined;
  }[];
};
