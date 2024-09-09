import { ReactNode } from 'react';
import { Text } from './text';

interface Props {
  header: string;
  description: JSX.Element;
  body: ReactNode;
}

export function HeadedSection({ header, body, description }: Props) {
  return (
    <article className="flex flex-col gap-2">
      <header className="flex flex-col gap-2 border-b">
        <Text variant={'subtitle'}>{header}</Text>
        {description}
      </header>
      {body}
    </article>
  );
}
