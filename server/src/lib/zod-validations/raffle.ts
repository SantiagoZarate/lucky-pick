import { z } from "zod";

export const raffleFormSchema = z.object({
  title: z.string(),
  prizes: z.array(z.string()).optional(),
  tickets_amount: z.coerce.number().min(2).max(200),
  price_per_ticket: z.coerce.number().min(1),
});

export type RaffleSchema = Required<z.infer<typeof raffleFormSchema>>;
