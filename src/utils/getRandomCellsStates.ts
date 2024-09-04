import { Cell } from '@/pages/home/hero/CellsGrid';

export function getRandomCellsStates(n: number): Cell[] {
  const states: Cell[] = [];

  Array(n)
    .fill(1)
    .map((_, index) => {
      states.push({
        id: index + 1,
        state: Math.floor(Math.random() * 3) < 2 ? 'regular' : 'active',
      });
    });

  return states;
}
