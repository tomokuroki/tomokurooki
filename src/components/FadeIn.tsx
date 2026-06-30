import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode, className?: string, delay?: number, key?: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
