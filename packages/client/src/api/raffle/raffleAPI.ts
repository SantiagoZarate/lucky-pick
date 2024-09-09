import { RouterInputs, RouterOutputs, trpc } from '@/lib/trpc';
import { UseTRPCQueryResult } from '@trpc/react-query/shared';

type RaffleOutput = RouterOutputs['raffle']['getRaffles'];
type RaffleInput = RouterInputs['raffle']['createRaffle'];

export default {
  getAll: (): UseTRPCQueryResult<RaffleOutput, { message: string }> =>
    trpc.raffle.getRaffles.useQuery(undefined, { refetchOnWindowFocus: false }),
  create: (data: RaffleInput) => {
    console.log('CREANDO RAFFLE');
    console.log({ data });

    trpc.raffle.createRaffle.useMutation();
  },
};
