import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { reveal } from './motion';
import { Eyebrow, Khatam, Star } from './primitives';
import { SectionToneContext, useSectionTone } from './tone';

// ---------------------------------------------------------------- Section

export type SectionTone = 'base' | 'alt' | 'accent';
export type SectionWidth = 'reading' | 'narrow' | 'default' | 'wide';

const toneStyles: Record<SectionTone, string> = {
  base: 'bg-surface text-ink-body',
  alt: 'bg-surface-alt text-ink-body',
  accent: 'bg-accent-deep text-on-dark-body',
};

const widthStyles: Record<SectionWidth, string> = {
  reading: 'max-w-2xl',
  narrow: 'max-w-3xl',
  default: 'max-w-5xl',
  wide: 'max-w-6xl',
};

// A chapter of the page. Alternate `base` and `alt`; use `accent` at most
// twice per page (the quote band and the hadiyah).
export function Section({
  id,
  tone = 'base',
  width = 'default',
  decorated = false,
  className = 'py-24 sm:py-32',
  label,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  width?: SectionWidth;
  decorated?: boolean;
  className?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <SectionToneContext.Provider value={tone === 'accent' ? 'dark' : 'light'}>
      <section
        id={id}
        aria-label={label}
        className={`relative overflow-hidden scroll-mt-4 lg:scroll-mt-20 ${toneStyles[tone]} ${className}`}
      >
        {decorated && <Khatam className="absolute right-[-8rem] top-16 w-[30rem] h-[30rem] text-on-dark/10" />}
        <div className={`relative mx-auto px-5 sm:px-8 ${widthStyles[width]}`}>{children}</div>
      </section>
    </SectionToneContext.Provider>
  );
}

// Star, "Chapter 0N", title and optional italic subtitle, centred.
export function SectionHeader({ num, title, sub }: { num?: string; title: ReactNode; sub?: ReactNode }) {
  const tone = useSectionTone();
  const dark = tone === 'dark';
  return (
    <motion.header {...reveal} className="text-center mb-12 sm:mb-16">
      <Star className={`w-4 h-4 mx-auto mb-5 ${dark ? 'text-on-dark-subtle' : 'text-accent-soft'}`} />
      {num && (
        <Eyebrow tone={tone} className="mb-4">
          Chapter {num}
        </Eyebrow>
      )}
      <h2 className={`font-display font-medium text-display-lg text-balance ${dark ? 'text-on-dark' : 'text-ink'}`}>{title}</h2>
      {sub && <p className={`mt-4 font-display italic text-lead ${dark ? 'text-on-dark-muted' : 'text-accent-deep'}`}>{sub}</p>}
    </motion.header>
  );
}

// ---------------------------------------------------------------- Quote band

// A full-width pause: one sentence, large italic, on the accent colour.
export function QuoteBand({ children }: { children: ReactNode }) {
  return (
    <motion.section {...reveal} className="relative bg-accent-deep py-20 sm:py-28 overflow-hidden" aria-label="Our principle">
      <Khatam className="absolute -right-20 -top-24 w-80 h-80 text-on-dark/15" />
      <Khatam className="absolute -left-24 -bottom-28 w-96 h-96 text-on-dark/10" />
      <blockquote className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center font-display italic text-[clamp(2.125rem,2.4vw+1.5rem,3.375rem)] leading-[1.2] text-on-dark text-balance">
        {children}
      </blockquote>
    </motion.section>
  );
}
