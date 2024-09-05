import { Variants } from '@/components/ui/cell';
import { PropsWithChildren } from 'react';

export interface Cell {
  id: number;
  state: Variants['variant'];
}

export function CellsGrid({ children }: PropsWithChildren) {
  return <ul className="grid grid-cols-12">{children}</ul>;
}
