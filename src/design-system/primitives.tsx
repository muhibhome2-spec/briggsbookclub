import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonClasses, ButtonSize, ButtonVariant, eyebrowClasses } from './styles';

// ---------------------------------------------------------------- Ornament

// Eight-point star, taken from the lattice behind the Shaykh. The one
// ornament of the system: section markers, list bullets, eyebrows.
export function Star({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <polygon points="12,1 14.37,6.27 19.78,4.22 17.73,9.63 23,12 17.73,14.37 19.78,19.78 14.37,17.73 12,23 9.63,17.73 4.22,19.78 6.27,14.37 1,12 6.27,9.63 4.22,4.22 9.63,6.27" />
    </svg>
  );
}

// Line-drawn khatam (two interlaced squares in two circles). Background
// texture for dark sections only, at 10 to 15% opacity.
export function Khatam({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <rect x="20" y="20" width="60" height="60" />
      <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="18" />
      <circle cx="50" cy="50" r="42" />
    </svg>
  );
}

// ---------------------------------------------------------------- Eyebrow

export type Tone = 'light' | 'dark';

export function Eyebrow({
  children,
  tone = 'light',
  muted = false,
  stars = false,
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  muted?: boolean;
  stars?: boolean;
  className?: string;
}) {
  const color = tone === 'dark' ? (muted ? 'text-on-dark-subtle' : 'text-on-dark-muted') : muted ? 'text-ink-subtle' : 'text-accent';
  return (
    <p className={`${eyebrowClasses} ${color} ${stars ? 'flex items-center justify-center gap-3' : ''} ${className}`}>
      {stars && <Star className="w-3 h-3 opacity-80" />}
      {children}
      {stars && <Star className="w-3 h-3 opacity-80" />}
    </p>
  );
}

// ---------------------------------------------------------------- Buttons

type ButtonOwnProps = { variant?: ButtonVariant; size?: ButtonSize; block?: boolean };

// Every call to action is a pill. "Take your seat" is the only CTA phrase.
export function ButtonLink({
  variant,
  size,
  block,
  className = '',
  children,
  ...rest
}: ButtonOwnProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${buttonClasses(variant, size, block)} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant,
  size,
  block,
  className = '',
  children,
  ...rest
}: ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${buttonClasses(variant, size, block)} ${className}`} {...rest}>
      {children}
    </button>
  );
}

// ---------------------------------------------------------------- Badge & Chip

// Badge: short uppercase status ("Beginning", "Continuing", "First time in English").
export function Badge({
  children,
  variant = 'solid',
  icon = false,
}: {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'soft';
  icon?: boolean;
}) {
  const styles = {
    solid: 'bg-surface text-accent-deep',
    outline: 'border border-accent text-accent-deep',
    soft: 'bg-accent/10 text-accent-deep',
  }[variant];
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-body text-[12px] font-semibold uppercase tracking-[0.16em] ${styles}`}>
      {icon && <Star className="w-3 h-3" />}
      {children}
    </span>
  );
}

// Chip: sentence-case tag in a row ("A circle of sincerity", credentials).
export function Chip({ children, variant = 'neutral' }: { children: ReactNode; variant?: 'neutral' | 'outline' | 'soft' }) {
  const styles = {
    neutral: 'bg-surface-alt border border-line text-ink-body',
    outline: 'border border-line-strong text-ink-subtle',
    soft: 'bg-accent/10 border border-accent-soft/30 text-accent-deep font-medium',
  }[variant];
  return <span className={`inline-block px-4 py-2 rounded-full font-body text-body-sm ${styles}`}>{children}</span>;
}
