// Motion tokens. Movement is slow and settles gently; MotionConfig in main.tsx
// turns it off for visitors who ask for reduced motion.

export const EASE = [0.22, 1, 0.36, 1] as const;

// Scroll-triggered entrance for content blocks.
export const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: EASE },
} as const;

// On-load entrance for hero elements, staggered by `delay` (seconds).
export function enter(delay = 0, y = 16) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  } as const;
}
