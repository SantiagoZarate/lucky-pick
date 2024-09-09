import { PropsWithChildren } from 'react';
import { HeadedSection } from '../ui/section';
import { Text } from '../ui';

export function LocalRaffleSection({ children }: PropsWithChildren) {
  return (
    <HeadedSection
      body={children}
      header="Locally saved raffles"
      description={
        <ul className="flex flex-col gap-1">
          <Text variant={'detail'}>Keep track of the raffle status</Text>
        </ul>
      }
    ></HeadedSection>
  );
}

export function OnlineRaffleSection({ children }: PropsWithChildren) {
  return (
    <HeadedSection
      body={children}
      header="Online saved raffles"
      description={
        <ul className="flex flex-col gap-1">
          <Text variant={'detail'}>
            Allow the people to pay directly from the web
          </Text>
          <Text variant={'detail'}>Acces to your raffles from any device</Text>
          <Text variant={'detail'}>Keep track of the raffle status</Text>
        </ul>
      }
    ></HeadedSection>
  );
}
