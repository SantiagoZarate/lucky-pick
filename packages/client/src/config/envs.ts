import { z } from 'zod';

const envsSchema = z.object({
  RAFFLE_API_URL: z.string(),
  MODE: z.enum(['production', 'development']).default('development'),
  BACKEND: z.coerce.boolean().default(false),
});

export default envsSchema.parse({
  RAFFLE_API_URL: import.meta.env.VITE_RAFFLE_API_URL,
  MODE: import.meta.env.MODE,
  BACKEND: import.meta.env.VITE_BACKEND,
});
