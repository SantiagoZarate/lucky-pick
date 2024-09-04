import { Text } from '@/components/ui';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  steps: JSX.Element;
}

export function CreateRaffleLayout({ children, steps }: Props) {
  return (
    <section className="mx-auto max-w-desktop">
      <header>
        <Text variant={'title'}>Create a new raffle</Text>
      </header>
      <section className="grid grid-cols-5 gap-8">
        <article className="col-span-4">{children}</article>
        {steps}
      </section>
    </section>
  );
}
