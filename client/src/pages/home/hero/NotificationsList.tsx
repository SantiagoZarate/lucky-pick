import { AnimatePresence } from 'framer-motion';
import { NotificationItem } from './NotificationItem';
import { Notification } from './RightSide';
import { List } from '@/components/ui';

interface Props {
  notifications: Notification[];
}

export function NotificationsList({ notifications }: Props) {
  return (
    <section className="flex flex-col gap-1 [mask-image:linear-gradient(180deg,white_0%,transparent_100%)]">
      <List>
        <AnimatePresence initial={false} mode="popLayout">
          {notifications.map((n) => (
            <NotificationItem notification={n} key={n.id} />
          ))}
        </AnimatePresence>
      </List>
    </section>
  );
}
