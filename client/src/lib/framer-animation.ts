import { MotionProps } from 'framer-motion';

export const animation: MotionProps = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
    y: 0,
    color: 'hsl(120deg,100%, 0%)',
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.8, ease: 'easeInOut' },
    x: 200,
  },
  transition: { type: 'spring' },
};
