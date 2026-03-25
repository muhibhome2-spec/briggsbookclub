import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './ui/Container';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-md shadow-sm border-b border-warm-200/30"
      role="navigation"
      aria-label="Main navigation"
    >
      <Container size="xl" className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-base sm:text-lg md:text-xl font-serif font-normal text-warm-900 hover:text-sage-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 rounded-sm"
              aria-label="Go to home page"
            >
              Briggs' Book Club
            </motion.button>
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('introduction')}
              className="text-sm tracking-wide text-warm-700 hover:text-sage-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-sm px-1 py-0.5"
              aria-label="Navigate to Introduction section"
            >
              Introduction
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('vision')}
              className="text-sm tracking-wide text-warm-700 hover:text-sage-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-sm px-1 py-0.5"
              aria-label="Navigate to Vision section"
            >
              Vision
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('hadiyah')}
              className="text-sm tracking-wide text-warm-700 hover:text-sage-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-sm px-1 py-0.5"
              aria-label="Navigate to Hadiyah Model section"
            >
              Hadiyah Model
            </motion.button>
            <Link to="/tafsir-yusuf">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm tracking-wide text-warm-700 hover:text-sage-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-sm px-1 py-0.5"
                aria-label="Navigate to Tafsir of Surah Yusuf"
              >
                Tafsir Yusuf
              </motion.button>
            </Link>
            <Link to="/umrah">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm tracking-wide text-warm-700 hover:text-sage-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-sm px-1 py-0.5"
                aria-label="Navigate to Umrah 2026"
              >
                Umrah 2026
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('join')}
              className="px-6 py-2.5 bg-sage-600 text-cream-50 rounded-md text-sm font-medium hover:bg-sage-500 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
              aria-label="Navigate to Join section"
            >
              Join the Circle
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('join')}
            className="lg:hidden px-4 py-2 bg-sage-600 text-cream-50 rounded-md text-sm font-medium hover:bg-sage-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
            aria-label="Navigate to Join section"
          >
            Join
          </motion.button>
      </Container>
    </motion.nav>
  );
}
