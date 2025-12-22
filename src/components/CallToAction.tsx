import { Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Link to="/hadiyah" aria-label="Get access now and pledge your hadiyah">
        <motion.div
          whileHover={{ scale: 1.03, y: -3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="group flex items-center justify-center gap-3 px-6 sm:px-10 py-3.5 sm:py-4 bg-sage-600 text-cream-50 rounded-lg text-base sm:text-lg font-medium hover:bg-sage-500 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
          role="button"
          tabIndex={0}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-5 h-5" aria-hidden="true" />
          </motion.div>
          <span className="font-semibold">Get access now | Pledge your hadiyah</span>
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}
