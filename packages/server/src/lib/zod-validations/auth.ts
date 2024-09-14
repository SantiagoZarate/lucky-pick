import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = registerSchema.omit({
  email: true,
});

export type LoginSchema = z.infer<typeof loginSchema>;
