import raffleAPI from '@/api/raffle/raffleAPI';
import { LocalRaffleSection, OnlineRaffleSection } from '@/components/raffle';
import { Text } from '@/components/ui';
import { RaffleDTO } from '@/types/raffle.type';
import { RaffleList } from './RaffleList';

export function RafflesPage() {
  return (
    <section className="mx-auto flex w-full max-w-desktop flex-col gap-8">
      <header>
        <Text variant={'title'}>raffles page</Text>
      </header>
      <OnlineRaffles />
      <LocalRaffles />
    </section>
  );
}

export function LocalRaffles() {
  const raffles: RaffleDTO[] = JSON.parse(
    localStorage.getItem('lucky-pick-raffle')!
  );

  return (
    <LocalRaffleSection>
      {raffles.length ? (
        <RaffleList raffles={raffles} />
      ) : (
        <div>There are no raffles</div>
      )}
    </LocalRaffleSection>
  );
}

export function OnlineRaffles() {
  const { data, isError, isLoading } = raffleAPI.getAll();

  return (
    <OnlineRaffleSection>
      {isError && <div>There was an error</div>}
      {!isError && isLoading && <div>loading</div>}
      {!isError && !isLoading && data.length ? (
        <RaffleList raffles={data} />
      ) : (
        <div>There are no online raffles</div>
      )}
    </OnlineRaffleSection>
  );
}
