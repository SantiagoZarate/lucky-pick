import envs from '@/config/envs';
import prod from './raffleAPI';
import dev from './raffleAPi.dev';

export const raffleAPI = envs.BACKEND ? prod : dev;
