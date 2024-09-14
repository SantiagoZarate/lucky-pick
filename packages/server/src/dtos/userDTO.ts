import { User } from 'src/types/user.type';
import { z } from 'zod';

const userSchemaDTO = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
}) satisfies z.ZodType<User>;

export const userSchemaDTOPublic = userSchemaDTO.omit({
  password: true,
});
