import { z } from 'zod';

const baseRegisterSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  confirmPassword: z.string(),
});

export const registerSchema = baseRegisterSchema.refine(
  (fields) => fields.confirmPassword === fields.password,
  {
    message: 'Password confirmation does not match',
    path: ['confirmPassword'],
  }
);

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = baseRegisterSchema.omit({
  email: true,
  confirmPassword: true,
});

export type LoginSchema = z.infer<typeof loginSchema>;
