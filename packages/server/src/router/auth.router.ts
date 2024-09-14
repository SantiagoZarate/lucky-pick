import { z } from 'zod';

import { TRPCError } from '@trpc/server';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { envs } from '../config/envs';
import { userSchemaDTOPublic } from '../dtos/userDTO';
import { publicProcedure, router } from '../lib/trpc';
import { loginSchema, registerSchema } from '../lib/zod-validations/auth';
import userRepository from '../repository/user.repository';

export const authRouter = router({
  register: publicProcedure
    .input(registerSchema)
    .output(userSchemaDTOPublic.pick({ id: true }))
    .mutation(async ({ input }) => {
      const password = await hash(input.password, envs.SALT_ROUNDS);
      return await userRepository.register({ ...input, password });
    }),
  login: publicProcedure
    .input(loginSchema)
    .output(userSchemaDTOPublic)
    .query(async ({ input, ctx }) => {
      const user = await userRepository.getByUsername(input.username);
      const samePassword = await compare(input.password, user.password);

      if (!samePassword) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid credentials',
        });
      }

      const token = jwt.sign({ id: user.id }, envs.JWT_SECRET);
      ctx.setCookies('usertoken', token);

      return userSchemaDTOPublic.parse(user);
    }),
  logout: publicProcedure
    .input(z.void())
    .output(z.void())
    .query(() => {}),
});
