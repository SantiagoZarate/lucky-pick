import { Cell, Variants } from '@/components/ui/cell';
import { getRandomCellsStates } from '@/utils/getRandomCellsStates';
import { useState } from 'react';

export interface Cell {
  id: number;
  state: Variants['variant'];
}

export function CellsGrid() {
  const [cells, setCells] = useState<Cell[]>(getRandomCellsStates(90));

  const toggleCellState = (index: number) => {
    setCells((prevState) => {
      return prevState.map((cell) => {
        if (cell.id === index + 1) {
          return {
            id: cell.id,
            state: cell.state === 'active' ? 'regular' : 'active',
          };
        }
        return cell;
      });
    });
  };

  return (
    <ul className="table-cells grid grid-cols-12">
      {cells.map((state, index) => (
        <Cell
          className="transition-all active:scale-75"
          onClick={() => toggleCellState(index)}
          variant={state.state}
          key={state.id}
          number={index + 1}
        />
      ))}
    </ul>
  );
}
