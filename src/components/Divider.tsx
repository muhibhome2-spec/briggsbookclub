import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Divider() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref as any} className="flex items-center justify-center py-8 sm:py-16">
      <div className="flex items-center space-x-3">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-16 sm:w-24 h-px bg-sage-500/40"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-2 h-2 bg-sage-500/60 rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-1.5 h-1.5 bg-sage-500/60 rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-2 h-2 bg-sage-500/60 rounded-full"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="w-16 sm:w-24 h-px bg-sage-500/40"
        />
      </div>
    </div>
  );
}
