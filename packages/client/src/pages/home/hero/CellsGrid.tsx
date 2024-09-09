import { Variants } from '@/components/ui/cell';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export interface Cell {
  id: number;
  state: Variants['variant'];
}

const variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      default: { ease: 'easeInOut' },
    },
  },
  hidden: {
    opacity: 0,
  },
};

export function CellsGrid({ children }: PropsWithChildren) {
  return (
    <motion.ul
      className="grid grid-cols-12"
      variants={variants}
      animate="visible"
      initial="hidden"
    >
      {children}
    </motion.ul>
  );
}
