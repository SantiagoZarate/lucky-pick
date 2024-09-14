import bcrypt from 'bcrypt';
import { envs } from '../config/envs';
import userRepository from '../repository/user.repository';
import { AuthError } from '../shared/error';
import { UserLogin, UserRegister } from '../types/user.type';

async function register(newUser: UserRegister) {
  const user = await userRepository.getByUsername(newUser.username);

  if (user) {
    throw new AuthError('Usersame already exists');
  }

  const password = await bcrypt.hash(newUser.password, envs.SALT_ROUNDS);
  return await userRepository.register({ ...newUser, password });
}

async function login({ password, username }: UserLogin) {
  const user = await userRepository.getByUsername(username);

  if (!user) {
    throw new AuthError('Invalid credentials, user doesnt exist');
  }

  const samePassword = await bcrypt.compare(password, user.password);

  if (!samePassword) {
    throw new AuthError('Incorrect password');
  }

  return user;
}

export default {
  register,
  login,
};
