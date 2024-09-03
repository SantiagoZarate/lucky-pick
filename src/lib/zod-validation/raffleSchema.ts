import { z } from 'zod';

export const raffleFormSchema = z.object({
  title: z.string().optional(),
  prizes: z.array(z.string()).optional(),
  amount_tickets: z.coerce.number().optional(),
  price_per_ticket: z.coerce.number().optional(),
});

export type RaffleFormSchema = z.infer<typeof raffleFormSchema>;

export const defaultValues: RaffleFormSchema = {
  price_per_ticket: undefined,
  prizes: [],
  amount_tickets: undefined,
  title: '',
};
