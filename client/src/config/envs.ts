import { z } from 'zod';

const envsSchema = z.object({
  RAFFLE_API_URL: z.string(),
});

export default envsSchema.parse({
  RAFFLE_API_URL: import.meta.env.VITE_RAFFLE_API_URL,
});
