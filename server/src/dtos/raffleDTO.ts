import { z } from "zod";
import { Raffle } from "../types/raffle.type";
import { ticketSchemaDTO } from "./ticketDTO";

export const raffleSchemaDTO = z.object({
  title: z.string(),
  price_per_ticket: z.coerce.number(),
  id: z.string(),
  public_url: z.string(),
  prizes: z.string().nullable(),
}) satisfies z.ZodType<Raffle>;

export type RaffleDTO = z.infer<typeof raffleSchemaDTO>;

export const raffleTicketsSchemaDTO = raffleSchemaDTO.extend({
  tickets: z.array(
    ticketSchemaDTO.omit({
      raffle_id: true,
    })
  ),
});
