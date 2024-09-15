import { RouterOutputs, RouterInputs } from '@/lib/trpc';

export type User = RouterOutputs['auth']['login'];

export type LoginPayload = RouterInputs['auth']['login'];
