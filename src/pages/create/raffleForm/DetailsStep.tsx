import { List, Text } from '@/components/ui';
import { RaffleFormSchema } from '@/lib/zod-validation/raffleSchema';
import { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

export function DetailsStep({ children }: PropsWithChildren) {
  const { getValues } = useFormContext<RaffleFormSchema>();

  const estimated = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(getValues('price_per_ticket') * getValues('amount_tickets'));

  return (
    <section className="grid grid-cols-2 gap-2">
      <article className="flex flex-col gap-6 rounded-xl bg-secondary p-4">
        <Text variant={'subtitle'}>Your raffle:</Text>
        <ul className="grid w-full grid-cols-12">
          {Array(Number(getValues('amount_tickets')))
            .fill(1)
            .map((_, index) => (
              <li
                className="group grid aspect-square place-content-center rounded-sm border hover:bg-input"
                key={index}
              >
                <p className="pointer-events-none text-xs opacity-0 transition group-hover:opacity-100">
                  {index + 1}
                </p>
              </li>
            ))}
        </ul>
      </article>
      <article className="flex flex-col gap-6 rounded-xl bg-secondary p-4">
        <header>
          <Text variant={'subtitle'}>Details:</Text>
        </header>
        <section className="grid grid-cols-2 gap-4">
          <section className="flex flex-col gap-1">
            <Text variant={'detail'}>Title</Text>
            <Text>{getValues('title')}</Text>
          </section>
          <section className="flex flex-col gap-1">
            <Text variant={'detail'}>Prizes</Text>
            <List>
              {getValues('prizes')?.map((prize, index) => (
                <Text key={index}>{prize}</Text>
              ))}
            </List>
          </section>
          <section className="col-span-2">
            <Text>Tickets info</Text>
            <div className="flex rounded-lg bg-input p-2">
              <div className="flex-1">
                <Text variant={'detail'}>Amount of tickets</Text>
                <Text>{getValues('amount_tickets')}</Text>
              </div>
              <div className="flex-1">
                <Text variant={'detail'}>Price per ticket</Text>
                <Text>${getValues('price_per_ticket')}.00</Text>
              </div>
            </div>
          </section>
          <Text className="col-span-2 text-end" variant={'detail'}>
            estimated profit:{' '}
            <span className="text-green-600">{estimated}</span>
          </Text>
        </section>
      </article>
      <article className="group relative col-span-2 flex flex-col gap-6 rounded-xl bg-secondary p-4">
        {children}
      </article>
    </section>
  );
}
