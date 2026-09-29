// Class recipes shared by several components.

export type ButtonVariant = 'primary' | 'light' | 'outline' | 'outline-light';
export type ButtonSize = 'sm' | 'lg';

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-[0.01em] ' +
  'transition-all duration-300 ease-calm hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-deep text-on-dark hover:bg-accent shadow-cta focus-visible:ring-accent focus-visible:ring-offset-surface',
  light:
    'bg-surface text-accent-deep hover:bg-white shadow-cta-light focus-visible:ring-surface focus-visible:ring-offset-ink',
  outline:
    'border border-accent-deep text-accent-deep hover:bg-accent-deep hover:text-on-dark focus-visible:ring-accent focus-visible:ring-offset-surface',
  'outline-light':
    'border border-on-dark/40 text-on-dark bg-ink/20 backdrop-blur-sm hover:bg-surface hover:text-accent-deep focus-visible:ring-surface focus-visible:ring-offset-ink',
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'min-h-[44px] px-5 text-[14px]',
  lg: 'min-h-[54px] px-9 text-[16px]',
};

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'lg', block = false) {
  return `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${block ? 'w-full' : ''}`;
}

export const eyebrowClasses = 'font-body uppercase text-eyebrow font-medium';
