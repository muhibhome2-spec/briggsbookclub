import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrolledPast } from '../hooks/useScrolledPast';
import { useStickyCta } from '../hooks/useStickyCta';
import { EASE } from './motion';
import { ButtonLink, Star } from './primitives';

export interface NavLink {
  href: string;
  label: string;
}

// Site navigation. Transparent over the hero; on desktop it stays fixed and
// turns to paper once the hero has scrolled away. On mobile it scrolls away
// with the hero and StickyJoin takes over.
export function SiteNav({
  heroId,
  links,
  cta,
  ctaHref = '#join',
}: {
  heroId: string;
  links: NavLink[];
  cta: string;
  ctaHref?: string;
}) {
  const solid = useScrolledPast(heroId, 80);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-surface focus:text-ink focus:shadow-float"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className={`absolute lg:fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
          solid ? 'bg-surface/90 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
        }`}
      >
        <div className={`max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6 transition-[height] duration-500 ${solid ? 'h-16' : 'h-20'}`}>
          <Link
            to="/"
            className={`font-display text-[24px] font-medium whitespace-nowrap transition-colors duration-500 ${solid ? 'text-ink' : 'text-on-dark'}`}
          >
            Briggs&rsquo; Book Club
          </Link>
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[14px] transition-colors duration-300 ${
                    solid ? 'text-ink-muted hover:text-accent-deep' : 'text-on-dark-muted hover:text-on-dark'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={ctaHref} size="sm" variant={solid ? 'primary' : 'outline-light'}>
            {cta}
          </ButtonLink>
        </div>
      </nav>
    </>
  );
}

// Floating pill on phones: appears after the hero, hides at the form.
export function StickyJoin({ heroId, joinId, note, cta }: { heroId: string; joinId: string; note: string; cta: string }) {
  const show = useStickyCta(heroId, joinId);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`#${joinId}`}
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="lg:hidden fixed bottom-4 inset-x-4 z-50 flex items-center justify-between gap-3 min-h-[60px] pl-6 pr-2 rounded-full bg-accent-deep text-on-dark shadow-float focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <span className="text-[14px] text-on-dark-muted">{note}</span>
          <span className="inline-flex items-center min-h-[46px] px-6 rounded-full bg-surface text-accent-deep text-[15px] font-semibold">
            {cta}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export function SiteFooter({ motto, links }: { motto: string; links: { to: string; label: string }[] }) {
  return (
    <footer className="bg-surface-alt border-t border-line pt-14 pb-28 lg:pb-14 text-center">
      <Star className="w-4 h-4 mx-auto text-accent-soft" />
      <p className="mt-4 font-display font-medium text-[28px] text-ink">Briggs&rsquo; Book Club</p>
      <p className="font-display italic text-[19px] text-ink-muted">{motto}</p>
      <nav aria-label="Footer" className="mt-6 flex justify-center gap-8 text-[14px]">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="text-ink-muted hover:text-accent-deep transition-colors py-2">
            {l.label}
          </Link>
        ))}
      </nav>
      <p className="mt-4 text-[12px] text-ink-subtle">&copy; {new Date().getFullYear()} Briggs&rsquo; Book Club</p>
    </footer>
  );
}
