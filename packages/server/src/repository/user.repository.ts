import { eq } from 'drizzle-orm';
import { userSchema } from '../../drizzle/schemas/userSchema.drizzle';
import { UserRegister, UserSelect } from '../types/user.type';
import { db } from '../../drizzle';

async function register(newUser: UserRegister) {
  const data = await db.insert(userSchema).values(newUser).returning({ id: userSchema.id });

  if (!data.length) {
    throw new Error('Error creating a new user');
  }

  return data[0];
}

async function getByUsername(username: UserSelect) {
  const data = await db.query.userSchema.findFirst({
    where: () => eq(userSchema.username, username),
  });

  return data;
}

export default {
  getByUsername,
  register,
};
