import React from 'react';

import { MinusMicroIcon } from '@/components/icons/MinusMicroIcon';
import { PlusMicroIcon } from '@/components/icons/PlusMicroIcon';
import { animation } from '@/lib/framer-animation';
import { Text } from '@/components/ui';
import { motion } from 'framer-motion';
import { Notification } from './RightSide';

interface Props {
  notification: Notification;
}

export const NotificationItem = React.forwardRef<HTMLLIElement, Props>(
  ({ notification: { action, name } }, ref) => (
    <motion.li ref={ref} {...animation} layout className="flex gap-1">
      {action === 'buy' ? <PlusMicroIcon /> : <MinusMicroIcon />}
      <Text variant={'detail'}>
        {name}
        {action === 'buy' ? ' just bought a ticket' : ' cancelled a purchase'}
      </Text>
    </motion.li>
  )
);
