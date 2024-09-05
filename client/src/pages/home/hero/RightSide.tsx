import { Cell } from '@/components/ui/cell';
import { NOTIFICATIONS } from '@/data/constants';
import { getRandomCellsStates } from '@/utils/getRandomCellsStates';
import { getRandomName } from '@/utils/getRandomName';
import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { CellStatusInfo } from './CellStatusInfo';
import { CellsGrid, type Cell as CellType } from './CellsGrid';
import { NotificationsList } from './NotificationsList';

export type Notification = {
  name: string;
  action: 'buy' | 'cancel';
  id: number;
};

export function RightSide() {
  const [cells, setCells] = useState<CellType[]>(
    getRandomCellsStates(Math.floor(12 + Math.random() * 80))
  );
  const [notifications, setNotifications] =
    useState<Notification[]>(NOTIFICATIONS);

  const toggleCellState = (id: number) => {
    setCells((prevCells) =>
      prevCells.map((cell) =>
        cell.id === id
          ? { ...cell, state: cell.state === 'active' ? 'regular' : 'active' }
          : cell
      )
    );
  };

  const addNotification = (action: Notification['action']) => {
    setNotifications((prevState) => {
      return [
        {
          action,
          name: getRandomName(),
          id: prevState.length + 1,
        },
        ...prevState,
      ];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const { id, state } = cells[Math.floor(Math.random() * cells.length)];
      addNotification(state === 'active' ? 'cancel' : 'buy');
      toggleCellState(id);
    }, 2000);

    return () => clearInterval(interval);
  }, [cells]);

  return (
    <article className="flex flex-1 flex-col gap-4">
      <CellsGrid>
        {cells.map(({ id, state }) => (
          <Cell
            className="cursor-pointer transition-all active:scale-75"
            onClick={() => toggleCellState(id)}
            variant={state}
            key={id}
            number={id}
          />
        ))}
      </CellsGrid>
      <footer className="relative flex items-start justify-between">
        <NotificationsList notifications={notifications.slice(0, 3)} />
        <CellStatusInfo />
      </footer>
      {cells.every((c) => c.state === 'active') && <ConfettiExplosion />}
    </article>
  );
}
