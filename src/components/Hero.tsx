import { motion } from 'framer-motion';
import Container from './ui/Container';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({ title = "Briggs' Book Club", subtitle = "Read. Reflect. Remember.", description }: HeroProps) {
  return (
    <header className="relative overflow-hidden" role="banner">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[400px] max-h-[800px]"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src="/WhatsApp Image 2025-11-03 at 3.08.19 PM.jpeg"
          alt="Scholar reading ancient manuscripts in a library - West African Islamic learning tradition"
          className="w-full h-full object-cover"
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" aria-hidden="true"></div>
      </motion.div>

      <Container size="lg" className="relative -mt-32 sm:-mt-40 lg:-mt-48 pb-12 sm:pb-20 text-center z-10">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white drop-shadow-2xl mb-4 sm:mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream-50 drop-shadow-lg font-serif font-light tracking-wide italic"
        >
          {subtitle}
        </motion.p>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-cream-100 drop-shadow-lg mt-4 sm:mt-6 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-12 flex justify-center"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cream-200 to-transparent"></div>
        </motion.div>
      </Container>
    </header>
  );
}
