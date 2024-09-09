import { Link } from 'react-router-dom';
import { RaffleDTO } from '@/types/raffle.type';
import { Text } from '@/components/ui';

interface Props {
  raffle: RaffleDTO;
}

export function RaffleItem({ raffle }: Props) {
  let availableTickets = 0;
  raffle.tickets?.forEach((t) => t.available && availableTickets++);
  return (
    <li className="">
      <Link
        to={'./local'}
        className="flex items-center justify-between rounded-lg border border-border p-4 transition hover:-translate-y-1 hover:shadow-lg"
      >
        <Text>{raffle.title}</Text>
        <Text>
          {raffle.tickets.length - availableTickets} / {raffle.tickets.length}
        </Text>
      </Link>
    </li>
  );
}
