import { z } from 'zod';
import { Ticket } from '../types/ticket.type';

export const ticketSchemaDTO = z.object({
  raffle_id: z.coerce.string(),
  id: z.coerce.number(),
  purchased_by: z.string().nullable(),
  available: z.coerce.boolean().nullable(),
}) satisfies z.ZodType<Ticket>;
