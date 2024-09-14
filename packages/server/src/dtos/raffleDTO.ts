import { z } from 'zod';
import { Raffle } from '../types/raffle.type';
import { ticketSchemaDTO } from './ticketDTO';

export const raffleSchemaDTO = z.object({
  title: z.string(),
  price_per_ticket: z.coerce.number(),
  id: z.string(),
  public_url: z.string(),
  prizes: z.preprocess((input) => {
    if (typeof input === 'string') {
      return input.split(',');
    }
    return [];
  }, z.array(z.string())),
  user_id: z.string(),
  created_at: z.string().nullable(),
}) satisfies z.ZodType<Omit<Raffle, 'prizes'>>;

export type RaffleDTO = z.infer<typeof raffleSchemaDTO>;

export const raffleTicketsSchemaDTO = raffleSchemaDTO.extend({
  tickets: z.array(
    ticketSchemaDTO.omit({
      raffle_id: true,
    })
  ),
});

export type RaffleTicketsDTO = z.infer<typeof raffleTicketsSchemaDTO>;
