import { RaffleDTO } from '@/types/raffle.type';
import { RaffleItem } from './RaffleItem';

interface Props {
  raffles: RaffleDTO[];
}

export function RaffleList({ raffles }: Props) {
  return (
    <ul className="grid grid-cols-3">
      {raffles?.map((raffle) => <RaffleItem key={raffle.id} raffle={raffle} />)}
    </ul>
  );
}
