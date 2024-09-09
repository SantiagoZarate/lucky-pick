import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const listVariants = cva('flex flex-col', {
  variants: {
    size: {
      regular: 'gap-2',
    },
  },
  defaultVariants: {
    size: 'regular',
  },
});

type Props = ComponentProps<'ul'> &
  VariantProps<typeof listVariants> & { asChild?: boolean };

export function List({ className, size, asChild = false, ...props }: Props) {
  const Comp = asChild ? Slot : 'ul';
  return <Comp className={listVariants({ size, className })} {...props} />;
}
