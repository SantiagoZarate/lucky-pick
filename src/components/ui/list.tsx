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

type Props = ComponentProps<'ul'> & VariantProps<typeof listVariants>;

export function List({ className, size, ...props }: Props) {
  return <ul className={listVariants({ size, className })} {...props} />;
}
