import { Cell, Variants } from '@/components/ui/cell';
import { getRandomCellsStates } from '@/utils/getRandomCellsStates';
import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export interface Cell {
  id: number;
  state: Variants['variant'];
}

export function CellsGrid() {
  const [cells, setCells] = useState<Cell[]>(
    getRandomCellsStates(Math.floor(12 + Math.random() * 80))
  );

  const toggleCellState = (id: number) => {
    setCells((prevCells) =>
      prevCells.map((cell) =>
        cell.id === id
          ? { ...cell, state: cell.state === 'active' ? 'regular' : 'active' }
          : cell
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * cells.length);
      toggleCellState(cells[randomIndex].id);
    }, 1000);

    return () => clearInterval(interval);
  }, [cells]);

  return (
    <>
      <ul className="table-cells grid grid-cols-12">
        {cells.map((state, index) => (
          <Cell
            className="cursor-pointer transition-all active:scale-75"
            onClick={() => toggleCellState(state.id)}
            variant={state.state}
            key={state.id}
            number={index + 1}
          />
        ))}
      </ul>
      {cells.every((c) => c.state === 'active') && <ConfettiExplosion />}
    </>
  );
}
