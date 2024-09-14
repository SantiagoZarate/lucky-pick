import { InferInsertModel } from 'drizzle-orm';
import { userSchema } from '../../drizzle/schemas/userSchema.drizzle';

// This is the source of truth, represents what's on the DB
export type User = Required<InferInsertModel<typeof userSchema>>;

export type UserRegister = Pick<User, 'email' | 'password' | 'username'>;
export type UserLogin = Pick<User, 'password' | 'username'>;
export type UserSelect = User['username'];
