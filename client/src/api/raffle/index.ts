import { RaffleFormSchema } from '@/lib/zod-validation/raffleSchema';

export interface RaffleAPI {
  getAll: () => Promise<unknown>;
  getOne: (id: string) => Promise<unknown>;
  create: (data: RaffleFormSchema) => Promise<unknown>;
}
