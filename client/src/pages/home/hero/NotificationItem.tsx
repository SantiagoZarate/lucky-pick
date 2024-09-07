import React from 'react';

import { MinusMicroIcon } from '@/components/icons/MinusMicroIcon';
import { PlusMicroIcon } from '@/components/icons/PlusMicroIcon';
import { Text } from '@/components/ui';
import { animation } from '@/lib/framer-animation';
import { motion } from 'framer-motion';
import { Notification } from './RightSide';

interface Props {
  notification: Notification;
}

const itemVariants = {
  buy: {
    color: 'hsl(120deg,100%, 50%)',
    opacity: 0,
    scale: 0.9,
  },
  cancel: {
    color: 'hsl(0deg,100%, 50%)',
    opacity: 0,
    scale: 0.9,
  },
};

const itemAnimation = { ...animation, variants: itemVariants };

export const NotificationItem = React.forwardRef<HTMLLIElement, Props>(
  ({ notification: { action, name } }, ref) => {
    itemAnimation.initial = action;

    return (
      <motion.li ref={ref} {...itemAnimation} layout className="flex gap-1">
        {action === 'buy' ? <PlusMicroIcon /> : <MinusMicroIcon />}
        <Text variant={'detail'}>
          {name}
          {action === 'buy' ? ' just bought a ticket' : ' cancelled a purchase'}
        </Text>
      </motion.li>
    );
  }
);
