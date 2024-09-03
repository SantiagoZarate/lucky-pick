import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { ComponentProps } from 'react';

const textVariants = cva('first-letter:capitalize', {
  variants: {
    variant: {
      regular: 'text-sm',
      title: 'font-black text-4xl',
      subtitle: 'font-bold text-xl',
      detail: 'text-xs font-light',
    },
  },
  defaultVariants: {
    variant: 'regular',
  },
});

type Props = ComponentProps<'p'> &
  VariantProps<typeof textVariants> & { asChild?: boolean };

export const Text = React.forwardRef<HTMLParagraphElement, Props>(
  ({ variant, className, asChild = false, ...args }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={textVariants({ variant, className })}
        ref={ref}
        {...args}
      />
    );
  }
);

Text.displayName = 'Text';
