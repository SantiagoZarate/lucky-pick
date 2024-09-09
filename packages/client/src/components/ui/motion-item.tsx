import { HTMLMotionProps, Variants, motion } from 'framer-motion';

type Props = HTMLMotionProps<'div'>;

const itemVariants: Variants = {
  visible: {
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  hidden: { scale: 0, filter: 'blur(100px)' },
};

export function MotionItem(props: Props) {
  return <motion.div variants={itemVariants} {...props} />;
}
