import { PropsWithChildren } from 'react';
import { Text } from '@/components/ui/text';

interface Props extends PropsWithChildren {
  active: boolean;
  stepNumber: number;
}

export function StepItem({ children, active, stepNumber }: Props) {
  return (
    <li
      className={`flex items-center gap-2 rounded-2xl border-dotted p-2 transition ${active ? 'bg-green-300' : 'bg-secondary'}`}
    >
      <span
        className={`flex size-4 items-center justify-center rounded-full text-[9px] ${active ? 'bg-green-500' : 'bg-black/20'}`}
      >
        <p className="mt-1">{stepNumber}</p>
      </span>
      <Text variant={'detail'}>{children}</Text>
    </li>
  );
}
