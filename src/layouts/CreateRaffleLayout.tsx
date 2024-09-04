import { Text } from '@/components/ui';

interface Props {
  children: React.ReactNode[];
}

export function CreateRaffleLayout({ children }: Props) {
  console.log(children);

  return (
    <section className="mx-auto flex max-w-desktop flex-col gap-8">
      <header>
        <Text variant={'title'}>Create a new raffle</Text>
      </header>
      <section className="grid grid-cols-5 gap-8">
        <article className="col-span-4">{children[0]}</article>
        {/* Steps */}
        {children[1]}
        {/* Confetti */}
        {children[2]}
      </section>
    </section>
  );
}
