import { getRandomName } from '@/utils/getRandomName';
import { Notification } from '@/pages/home/hero/RightSide';

export const NOTIFICATIONS: Notification[] = [
  {
    name: getRandomName(),
    action: 'buy',
    id: 3,
  },
  {
    name: getRandomName(),
    action: 'cancel',
    id: 2,
  },
  {
    name: getRandomName(),
    action: 'buy',
    id: 1,
  },
];
