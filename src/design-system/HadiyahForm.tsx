import { useState } from 'react';
import { motion } from 'framer-motion';
import { reveal } from './motion';
import { Button } from './primitives';

export interface HadiyahFormProps {
  action: string;
  plan: string;
  title: string;
  amounts: { value: string; label: string; badge?: string }[];
  defaultAmount?: string;
  customLabel: string;
  cta: string;
  small: string;
  secure: string;
}

// The monthly gift form. Posts to Memberful checkout with `plan` and `price`.
export function HadiyahForm({
  action,
  plan,
  title,
  amounts,
  defaultAmount = '10',
  customLabel,
  cta,
  small,
  secure,
}: HadiyahFormProps) {
  const [amount, setAmount] = useState(defaultAmount);

  return (
    <motion.form
      {...reveal}
      action={action}
      method="get"
      aria-labelledby="hadiyah-form-title"
      className="max-w-md mx-auto rounded-card bg-surface text-ink-body p-6 sm:p-9 shadow-sheet space-y-5"
    >
      <input type="hidden" name="plan" value={plan} />
      <p id="hadiyah-form-title" className="text-center font-display font-medium text-display-sm text-ink">
        {title}
      </p>

      <div className="grid grid-cols-3 gap-2" role="group" aria-label="Choose a monthly amount">
        {amounts.map(({ value, label, badge }) => {
          const selected = amount === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(value)}
              aria-pressed={selected}
              className={`flex flex-col items-center justify-center min-h-[64px] rounded-tile border-2 text-[20px] font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-accent-deep border-accent-deep text-on-dark shadow-md'
                  : 'bg-surface-alt border-transparent text-ink hover:border-accent-soft/50'
              }`}
            >
              {label}
              {badge && (
                <span className={`text-[10px] uppercase tracking-[0.14em] font-semibold ${selected ? 'text-on-dark-muted' : 'text-accent'}`}>
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <label htmlFor="price" className="block text-center text-caption text-ink-subtle">
        {customLabel}
      </label>
      <div className="relative">
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[20px] text-ink-subtle" aria-hidden="true">
          £
        </span>
        <input
          id="price"
          type="number"
          name="price"
          required
          min="1.00"
          step="0.01"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-describedby="hadiyah-small"
          className="w-full py-4 pl-10 pr-4 text-center text-[22px] font-medium rounded-tile bg-surface-alt border-2 border-transparent text-ink focus:outline-none focus:border-accent-soft transition-colors"
        />
      </div>

      <Button type="submit" block className="min-h-[56px] text-[17px] font-semibold">
        {cta}
      </Button>
      <p id="hadiyah-small" className="text-center text-caption text-ink-muted">
        {small}
      </p>
      <p className="text-center text-[12px] leading-snug text-ink-subtle">{secure}</p>
    </motion.form>
  );
}
