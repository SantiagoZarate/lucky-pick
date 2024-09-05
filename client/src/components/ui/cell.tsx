import { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const cellStyles = cva(
  'group grid aspect-square place-content-center rounded-sm border transition-colors duration-300',
  {
    variants: {
      variant: {
        regular: 'bg-background hover:bg-input',
        active: 'bg-green-200 text-green-600',
      },
    },
    defaultVariants: {
      variant: 'regular',
    },
  }
);

export type Variants = VariantProps<typeof cellStyles>;

interface Props extends ComponentProps<'li'>, Variants {
  number: number;
}

export function Cell({ number, variant, className, ...props }: Props) {
  return (
    <li className={cellStyles({ variant, className })} {...props}>
      <p className="pointer-events-none text-xs opacity-0 transition group-hover:opacity-100">
        {number}
      </p>
    </li>
  );
}
