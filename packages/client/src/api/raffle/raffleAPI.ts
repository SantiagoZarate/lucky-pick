import { RouterOutputs, trpc } from '@/lib/trpc';
import { UseTRPCQueryResult } from '@trpc/react-query/shared';

type RaffleOutput = RouterOutputs['raffle'];

export default {
  getAll: (): UseTRPCQueryResult<
    RaffleOutput['getRaffles'],
    { message: string }
  > =>
    trpc.raffle.getRaffles.useQuery(undefined, { refetchOnWindowFocus: false }),
};
