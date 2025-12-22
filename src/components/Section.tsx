import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <motion.section
      id={id}
      ref={ref as any}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-10 sm:py-20 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-warm-900 mb-6 sm:mb-12 tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="text-warm-800 text-base sm:text-lg leading-relaxed"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
