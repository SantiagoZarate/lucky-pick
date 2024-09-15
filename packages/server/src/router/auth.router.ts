import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { envs, JWT_TOKEN_KEY } from '../config';
import { userSchemaDTOPublic } from '../dtos/userDTO';
import { publicProcedure, router } from '../lib/trpc';
import { loginSchema, registerSchema } from '../lib/zod-validations/auth';
import userService from '../services/auth.service';

export const authRouter = router({
  register: publicProcedure
    .input(registerSchema)
    .output(userSchemaDTOPublic.pick({ id: true }))
    .mutation(async ({ input }) => {
      return await userService.register(input);
    }),
  login: publicProcedure
    .input(loginSchema)
    .output(userSchemaDTOPublic)
    .mutation(async ({ input, ctx }) => {
      const user = await userService.login(input);
      const token = jwt.sign({ id: user.id }, envs.JWT_SECRET, { expiresIn: '1h' });
      ctx.setCookies(JWT_TOKEN_KEY, token);
      return userSchemaDTOPublic.parse(user);
    }),
  logout: publicProcedure
    .input(z.void())
    .output(z.void())
    .mutation(async ({ ctx }) => {
      ctx.removeCookies(JWT_TOKEN_KEY);
    }),
});
