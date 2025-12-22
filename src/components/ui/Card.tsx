import { ReactNode, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  interactive?: boolean;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-cream-100 border border-transparent',
  elevated: 'bg-white shadow-md border border-warm-200/50',
  outlined: 'bg-transparent border-2 border-warm-300',
  filled: 'bg-sage-600/10 border border-sage-500/20',
};

export default function Card({
  children,
  variant = 'default',
  interactive = false,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-lg transition-all duration-200';
  const interactiveStyles = interactive
    ? 'cursor-pointer hover:shadow-lg'
    : '';

  if (interactive) {
    return (
      <motion.div
        className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
