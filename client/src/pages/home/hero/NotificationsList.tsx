import { MinusMicroIcon } from '@/components/icons/MinusMicroIcon';
import { PlusMicroIcon } from '@/components/icons/PlusMicroIcon';
import { Text } from '@/components/ui';
import { Notification } from './RightSide';

interface Props {
  notifications: Notification[];
}

export function NotificationsList({ notifications }: Props) {
  return (
    <section className="flex flex-col gap-1 [mask-image:linear-gradient(180deg,white_0%,transparent_100%)]">
      {notifications.map((n, index) => (
        <div className="flex gap-1">
          {n.action === 'buy' ? <PlusMicroIcon /> : <MinusMicroIcon />}
          <Text key={n.name + index} variant={'detail'}>
            {n.name}
            {n.action === 'buy'
              ? ' just bought a ticket'
              : ' cancelled a purchase'}
          </Text>
        </div>
      ))}
    </section>
  );
}
