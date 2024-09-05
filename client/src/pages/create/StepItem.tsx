import { ComponentProps } from 'react';
import { Text } from '@/components/ui/text';
import { cva, VariantProps } from 'class-variance-authority';

const stepItemStyles = cva(
  'flex items-center gap-2 rounded-2xl p-2 transition',
  {
    variants: {
      variant: {
        regular: 'bg-secondary',
        active: 'bg-green-300',
        inactive: 'border border-dashed',
      },
    },
  }
);

export type Variants = VariantProps<typeof stepItemStyles>;

interface Props extends ComponentProps<'li'>, Variants {
  stepNumber: number;
}

export function StepItem({
  children,
  variant,
  className,
  stepNumber,
  ...props
}: Props) {
  return (
    <li className={stepItemStyles({ variant, className })} {...props}>
      <span
        className={`flex size-4 items-center justify-center rounded-full bg-black/20 text-[9px]`}
      >
        <p className="mt-1">{stepNumber}</p>
      </span>
      <Text variant={'detail'}>{children}</Text>
    </li>
  );
}
