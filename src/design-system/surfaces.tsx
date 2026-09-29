import { ReactNode } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Star } from './primitives';

// ---------------------------------------------------------------- Arch

// The mihrab arch. Used for portraits and for the three pillar tiles.
export function ArchFrame({
  src,
  alt,
  position = '50% 30%',
  offset = 'surface',
  raised = false,
  className = '',
}: {
  src: string;
  alt: string;
  position?: string;
  offset?: 'surface' | 'alt';
  raised?: boolean;
  className?: string;
}) {
  return (
    <figure className={`max-w-[18rem] sm:max-w-sm w-full mx-auto ${className}`}>
      <div
        className={`rounded-arch overflow-hidden ring-1 ring-offset-8 ${
          offset === 'alt' ? 'ring-line-strong ring-offset-surface-alt' : 'ring-accent-soft/40 ring-offset-surface'
        } ${raised ? 'shadow-lift' : ''}`}
      >
        <img src={src} alt={alt} className="w-full aspect-[3/4] object-cover" style={{ objectPosition: position }} loading="lazy" />
      </div>
    </figure>
  );
}

export function ArchCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-arch bg-surface-alt border border-line px-6 pt-16 pb-9 text-center">
      <Star className="w-4 h-4 mx-auto text-accent-soft" />
      {children}
    </div>
  );
}

// ---------------------------------------------------------------- Cards

// `ink`: the feature card (dark, optional photographic texture).
// `alt`: the secondary card on a light section.
// `raised`: a light inset, usually inside an ink card.
export function Card({
  tone = 'alt',
  texture,
  className = '',
  children,
}: {
  tone?: 'ink' | 'alt' | 'raised';
  texture?: string;
  className?: string;
  children: ReactNode;
}) {
  const styles = {
    ink: 'rounded-card bg-ink text-on-dark-body',
    alt: 'rounded-card bg-surface-alt border border-line',
    raised: 'rounded-panel bg-surface text-ink-body',
  }[tone];
  return (
    <div className={`relative overflow-hidden ${styles} ${className}`}>
      {texture && (
        <img src={texture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.12]" loading="lazy" />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

// ---------------------------------------------------------------- Lists

export function CheckList({ items, tone = 'light' }: { items: ReactNode[]; tone?: 'light' | 'dark' }) {
  if (tone === 'dark') {
    return (
      <ul className="grid sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start rounded-tile bg-on-dark/[0.06] border border-on-dark/10 p-4 text-body-sm text-on-dark">
            <Check className="w-4 h-4 mt-1 text-on-dark-subtle flex-shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 items-start bg-surface rounded-tile px-5 py-4 border border-line">
          <span className="mt-0.5 flex-shrink-0 grid place-items-center w-7 h-7 rounded-full bg-accent/10 text-accent-deep">
            <Check className="w-4 h-4" aria-hidden="true" />
          </span>
          <span className="text-body leading-[1.6] text-ink-body">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------- Circles

// The halaqa. Numbered steps joined by a hairline.
export function StepRow({ steps }: { steps: { label: string; text: string }[] }) {
  return (
    <ol className="relative grid sm:grid-cols-3 gap-10">
      <span className="hidden sm:block absolute top-10 left-[17%] right-[17%] h-px bg-line-strong" aria-hidden="true" />
      {steps.map((s, i) => (
        <li key={s.label} className="relative text-center">
          <span className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-surface border border-accent-soft/40 font-display text-[34px] text-accent-deep shadow-[0_0_0_8px_#faf8f4]">
            {i + 1}
          </span>
          <p className="mt-5 font-display font-medium text-display-sm text-ink">{s.label}</p>
          <p className="mt-1 text-body-sm text-ink-muted max-w-[16rem] mx-auto">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function StatCircles({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-3 gap-3 sm:gap-10 max-w-2xl mx-auto">
      {stats.map((s) => (
        <div key={s.label} className="aspect-square rounded-full bg-surface border border-line grid place-content-center px-2 text-center">
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display font-medium text-[clamp(1.5rem,2.4vw+0.9rem,2.5rem)] leading-none text-ink">{s.value}</dd>
          <dd className="mt-1.5 text-[12px] sm:text-caption leading-tight text-ink-subtle">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

// The isnad: stations joined by a line that deepens toward the reader.
export function ChainLine({ stations, label }: { stations: string[]; label: string }) {
  return (
    <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${stations.length}, minmax(0, 1fr))` }} aria-label={label}>
      <span
        className="absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-line-strong via-accent-soft to-accent"
        aria-hidden="true"
      />
      {stations.map((s, i) => {
        const last = i === stations.length - 1;
        return (
          <li key={s} className="relative flex flex-col items-center text-center">
            <span
              className={`grid place-items-center w-10 h-10 rounded-full border ${
                last
                  ? 'bg-accent-deep border-accent-deep text-on-dark shadow-[0_0_0_8px_rgba(93,111,99,0.15)]'
                  : 'bg-surface border-line-strong text-accent'
              }`}
              aria-hidden="true"
            >
              {last ? <Star className="w-3.5 h-3.5" /> : <span className="w-1.5 h-1.5 rounded-full bg-current" />}
            </span>
            <span className={`mt-3 text-[12px] sm:text-caption ${last ? 'text-accent-deep font-semibold' : 'text-ink-subtle'}`}>{s}</span>
          </li>
        );
      })}
    </ol>
  );
}

// ---------------------------------------------------------------- Accordion

export function Accordion({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="space-y-3">
      {items.map(({ q, a }) => (
        <details key={q} className="group rounded-tile bg-surface-alt border border-line open:bg-white transition-colors">
          <summary className="flex items-center justify-between gap-4 px-6 py-5 min-h-[56px] cursor-pointer list-none [&::-webkit-details-marker]:hidden font-medium text-body text-ink rounded-tile focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {q}
            <span className="grid place-items-center w-8 h-8 rounded-full bg-surface border border-line flex-shrink-0">
              <ChevronDown className="w-4 h-4 text-accent transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
            </span>
          </summary>
          <div className="px-6 pb-6 text-body-sm sm:text-body text-ink-muted text-pretty">{a}</div>
        </details>
      ))}
    </div>
  );
}
