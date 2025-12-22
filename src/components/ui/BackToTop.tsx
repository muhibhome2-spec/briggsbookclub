import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface BackToTopProps {
  threshold?: number;
  className?: string;
}

export default function BackToTop({ threshold = 400, className = '' }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 p-2.5 sm:p-3 bg-sage-600 text-cream-50 rounded-full shadow-lg hover:bg-sage-500 hover:shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 ${className}`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
