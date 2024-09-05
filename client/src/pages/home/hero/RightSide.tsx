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

  const updateNotifications = (action: Notification['action']) => {
    setNotifications((prevState) => {
      const newArray: Notification[] = [
        {
          action,
          name: getRandomName(),
        },
        ...prevState,
      ];

      return newArray.slice(0, 3);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const { id, state } = cells[Math.floor(Math.random() * cells.length)];
      updateNotifications(state === 'active' ? 'cancel' : 'buy');
      toggleCellState(id);
    }, 2000);

    return () => clearInterval(interval);
  }, [cells]);

  return (
    <article className="flex flex-1 flex-col gap-2">
      <CellsGrid>
        {cells.map(({ id, state }, index) => (
          <Cell
            className="cursor-pointer transition-all active:scale-75"
            onClick={() => toggleCellState(id)}
            variant={state}
            key={id}
            number={index + 1}
          />
        ))}
      </CellsGrid>
      <footer className="flex items-start justify-between">
        <NotificationsList notifications={notifications} />
        <CellStatusInfo />
      </footer>
      {cells.every((c) => c.state === 'active') && <ConfettiExplosion />}
    </article>
  );
}
