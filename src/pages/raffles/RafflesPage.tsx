import { Button, Text } from '@/components/ui';
import { Raffle } from '@/types/raffle.type';
import { Link } from 'react-router-dom';

export function RafflesPage() {
  const raffle: Raffle = JSON.parse(localStorage.getItem('lucky-pick-raffle')!);

  let availableTickets = 0;
  raffle.tickets.forEach((t) => t.available && availableTickets++);

  return (
    <section className="mx-auto flex w-full max-w-desktop flex-col gap-8">
      <header>
        <Text variant={'title'}>raffles page</Text>
      </header>
      <ul className="grid grid-cols-3">
        <li className="">
          <Link
            to={'./local'}
            className="flex items-center justify-between rounded-lg border border-border p-4 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Text>{raffle.title}</Text>
            <Text>
              {raffle.tickets.length - availableTickets} /{' '}
              {raffle.tickets.length}
            </Text>
          </Link>
        </li>
      </ul>
      <Button onClick={() => localStorage.removeItem('lucky-pick-raffle')}>
        Delete raffle
      </Button>
    </section>
  );
}
