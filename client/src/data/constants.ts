import { getRandomName } from '@/utils/getRandomName';
import { Notification } from '@/pages/home/hero/RightSide';

export const NOTIFICATIONS: Notification[] = [
  {
    name: getRandomName(),
    action: 'buy',
  },
  {
    name: getRandomName(),
    action: 'cancel',
  },
  {
    name: getRandomName(),
    action: 'buy',
  },
];
