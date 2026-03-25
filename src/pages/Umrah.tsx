import { useState, useEffect, useRef, useCallback } from 'react';

/* ══════════════════════════════════════════════════════════
   Reveal hook — triggers once when element enters viewport
   ══════════════════════════════════════════════════════════ */
function useReveal(delay = 0, threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -80px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.98)',
    transition: `opacity 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return { ref, style };
}

/* Simple wrapper component */
function Reveal({ children, className = '', delay = 0, threshold = 0.15, style: extraStyle }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  style?: React.CSSProperties;
}) {
  const { ref, style } = useReveal(delay, threshold);
  return <div ref={ref} className={className} style={{ ...style, ...extraStyle }}>{children}</div>;
}

/* ══════════════════════════════════════════════════════════
   Main Component
   ══════════════════════════════════════════════════════════ */
export default function Umrah() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const plans = [
    { name: '5 Months', price: '$800', period: 'per month × 5', featured: false },
    { name: '4 Months', price: '$1,000', period: 'per month × 4', featured: true, badge: 'Most Popular' },
    { name: '2 Months', price: '$2,000', period: 'per month × 2', featured: false },
    { name: 'Pay in Full', price: '$4,500', period: 'one payment', featured: false },
  ];

  const journeyItems = [
    { num: '01', icon: 'book', title: 'Seerah Immersion', desc: 'Morning sessions exploring the life of the Prophet ﷺ, Qur\'anic reflections, and insights from classical scholarship.' },
    { num: '02', icon: 'globe', title: 'Sacred Geography', desc: 'Guided visits to places of profound significance — where revelation descended and history was shaped.' },
    { num: '03', icon: 'users', title: 'Spiritual Brotherhood', desc: 'An intimate gathering of seekers. Forge bonds of faith alongside fellow travelers in a supportive, close-knit circle.' },
    { num: '04', icon: 'star', title: 'Uncompromised Comfort', desc: 'Every detail handled — from 5-star lodging steps from the Haram to seamless logistics throughout your stay.' },
  ];

  const faqs = [
    { q: 'What is included in the package?', a: 'Your package includes 5-star accommodation in Makkah and Madinah, daily classes with Shaykh Mustafa Briggs, guided historical site visits, ground transportation, and group coordination. Flights are arranged separately.' },
    { q: 'How do I secure my spot?', a: 'Send the word "UMRAH" via WhatsApp to begin the registration process. A $500 non-refundable deposit will secure your place in the group.' },
    { q: 'Are flights included?', a: 'Flights are not included in the package price. The team will provide guidance on booking flights once your spot is confirmed.' },
    { q: 'What is the group size?', a: 'The group is kept intentionally intimate to ensure a meaningful, personal experience. Spaces are limited and allocated on a first-come basis.' },
    { q: 'Do I need prior Islamic knowledge?', a: 'Not at all. The program is designed to meet you where you are. Whether beginning your journey or deepening existing knowledge, every session is accessible and enriching.' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

        html { scroll-behavior: smooth; }

        :root {
          --cream: #FDFBF7;
          --cream-light: #FFFFFF;
          --cream-dark: #F2EDE3;
          --sage: #5c6330;
          --sage-light: #747a45;
          --sage-dark: #464b24;
          --gold: #bba76a;
          --gold-light: #cbb880;
          --gold-dark: #a08f55;
          --crimson: #8d1c1e;
          --crimson-light: #a52a2c;
          --dark: #3a3530;
          --dark-deep: #2e2a25;
          --text-primary: #4a4540;
          --text-secondary: #6e665c;
          --text-tertiary: #958d82;
          --border: rgba(60,55,48,0.08);
          --u-serif: 'Cormorant Garamond', Georgia, serif;
          --u-sans: 'Jost', sans-serif;
          --u-arabic: 'Amiri', 'Traditional Arabic', serif;
        }

        .u-page {
          font-family: var(--u-sans); background: var(--cream); color: var(--text-primary);
          -webkit-font-smoothing: antialiased; overflow-x: hidden;
          text-rendering: optimizeLegibility;
          -webkit-text-size-adjust: 100%;
        }

        /* ── Accessibility: Skip Link ── */
        .u-skip-link {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          background: var(--gold); color: var(--dark); padding: 0.75rem 1.5rem;
          font-size: 0.85rem; font-weight: 600; z-index: 200;
          text-decoration: none; border-radius: 0 0 4px 4px;
          transition: top 0.2s;
        }
        .u-skip-link:focus { top: 0; }

        /* ── Focus States ── */
        .u-hero-cta:focus-visible,
        .u-cta-button:focus-visible,
        .u-btt:focus-visible {
          outline: 2px solid var(--gold); outline-offset: 3px;
        }
        .u-nav-links a:focus-visible {
          outline: 2px solid var(--gold); outline-offset: 4px;
        }
        .u-faq-q:focus-visible {
          outline: 2px solid var(--gold); outline-offset: 2px;
        }

        /* ── Mobile hamburger ── */
        .u-nav-hamburger {
          display: none; background: none; border: none; cursor: pointer;
          color: var(--cream); padding: 0.5rem; transition: color 0.5s;
        }
        .u-nav.scrolled .u-nav-hamburger { color: var(--dark); }
        @media (max-width: 768px) {
          .u-nav-hamburger { display: flex; align-items: center; justify-content: center; }
        }
        .u-mobile-menu {
          display: none; position: fixed; inset: 0; z-index: 99;
          background: rgba(58,53,48,0.96); backdrop-filter: blur(20px);
          flex-direction: column; align-items: center; justify-content: center; gap: 2rem;
        }
        .u-mobile-menu.open { display: flex; }
        .u-mobile-menu a {
          font-family: var(--u-serif); font-size: 1.8rem; font-weight: 400;
          color: var(--cream); text-decoration: none;
          transition: color 0.3s;
        }
        .u-mobile-menu a:hover { color: var(--gold); }
        .u-mobile-close {
          position: absolute; top: 1.25rem; right: 1.25rem;
          background: none; border: none; color: var(--cream); cursor: pointer;
          padding: 0.5rem;
        }

        .u-pattern-overlay {
          position: absolute; inset: 0; opacity: 0.025; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L50 10L40 20L30 10Z M0 40L10 30L20 40L10 50Z M40 40L50 30L60 40L50 50Z M80 40L70 30L60 40L70 50Z M40 80L50 70L40 60L30 70Z M20 20L30 30L20 40L10 30Z M60 20L70 30L60 40L50 30Z M20 60L30 50L20 40L10 50Z M60 60L50 50L60 40L70 50Z' fill='%232C2418' fill-rule='evenodd'/%3E%3C/svg%3E");
          background-size: 80px 80px;
        }

        .u-grain {
          position: absolute; inset: 0; opacity: 0.15; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        /* ── Nav ── */
        .u-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1.25rem 2rem; display: flex; justify-content: space-between; align-items: center;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .u-nav.scrolled {
          background: rgba(253, 251, 247, 0.92); backdrop-filter: blur(20px);
          padding: 0.75rem 2rem; box-shadow: 0 1px 0 rgba(44, 36, 24, 0.08);
        }
        .u-nav-logo {
          font-family: var(--u-serif); font-size: 1.1rem; font-weight: 500;
          letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none;
          color: var(--cream); transition: color 0.5s;
        }
        .u-nav.scrolled .u-nav-logo { color: var(--dark); }
        .u-nav-links { display: flex; gap: 2.5rem; list-style: none; margin: 0; padding: 0; }
        .u-nav-links a {
          font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 400;
        }
        .u-nav.scrolled .u-nav-links a { color: var(--text-secondary); }
        .u-nav-links a:hover { color: var(--gold); }
        @media (max-width: 768px) { .u-nav-links { display: none; } }

        /* ── Hero ── */
        .u-hero {
          position: relative; height: 100vh; min-height: 700px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
          background: var(--dark);
        }
        .u-hero-img {
          position: absolute; inset: 0;
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Al-Masjid_al-Nabawi_-_panoramio_%282%29.jpg/1920px-Al-Masjid_al-Nabawi_-_panoramio_%282%29.jpg');
          background-size: cover; background-position: center 40%;
          transform: scale(1.05);
          animation: uHeroZoom 20s ease-in-out infinite alternate;
          filter: brightness(0.65) saturate(0.85);
        }
        @keyframes uHeroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.12); }
        }
        .u-hero-vignette {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at center, transparent 30%, rgba(58,53,48,0.6) 100%),
            linear-gradient(180deg, rgba(58,53,48,0.5) 0%, transparent 30%, transparent 70%, rgba(58,53,48,0.7) 100%);
          z-index: 1;
        }
        .u-hero-bg {
          position: absolute; inset: 0; z-index: 2;
          background:
            radial-gradient(ellipse at 30% 50%, rgba(92,99,48,0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 30%, rgba(187,167,106,0.08) 0%, transparent 50%),
            linear-gradient(180deg, rgba(58,53,48,0.6) 0%, rgba(74,69,64,0.45) 40%, rgba(74,69,64,0.65) 100%);
        }
        .u-hero-content {
          position: relative; z-index: 10; text-align: center; padding: 0 2rem; max-width: 900px;
        }
        .u-hero-eyebrow {
          font-family: var(--u-sans); font-size: 0.75rem; letter-spacing: 0.35em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 2rem;
          opacity: 0; animation: uFadeUp 1.2s 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .u-hero-title {
          font-family: var(--u-serif); font-size: clamp(2.5rem, 7vw, 5.5rem);
          font-weight: 300; color: var(--cream); line-height: 1.15; margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
          text-rendering: optimizeLegibility;
          opacity: 0; animation: uFadeUp 1.4s 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .u-hero-title em { font-style: italic; color: var(--gold-light); font-weight: 400; }
        .u-hero-title-leading {
          display: block; font-size: 0.35em; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(245,240,232,0.6); margin-bottom: 0.4em;
        }
        .u-hero-subtitle {
          font-family: var(--u-sans); font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(245,240,232,0.7); font-weight: 300; line-height: 1.7;
          max-width: 600px; margin: 0 auto 3rem;
          opacity: 0; animation: uFadeUp 1.4s 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .u-hero-cta {
          display: inline-flex; align-items: center; gap: 0.75rem;
          padding: 1rem 2.5rem; background: transparent;
          border: 1px solid var(--gold); color: var(--gold);
          font-family: var(--u-sans); font-size: 0.8rem; letter-spacing: 0.2em;
          text-transform: uppercase; text-decoration: none; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          opacity: 0; animation: uFadeUp 1.2s 1.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .u-hero-cta:hover {
          background: var(--gold); color: var(--dark);
          transform: translateY(-2px); box-shadow: 0 8px 30px rgba(187,167,106,0.25);
        }
        .u-hero-cta svg { transition: transform 0.3s; }
        .u-hero-cta:hover svg { transform: translateX(4px); }
        .u-hero-scroll {
          position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
          color: rgba(245,240,232,0.4); font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
          opacity: 0; animation: uFadeIn 1s 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .u-scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: uScrollPulse 2.5s ease-in-out infinite;
        }

        @keyframes uFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes uFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes uScrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }

        /* ── Sections ── */
        .u-section { padding: 5rem 2rem; position: relative; }
        .u-section-inner { max-width: 1100px; margin: 0 auto; }
        .u-section-header { text-align: center; margin-bottom: 4rem; }
        .u-section-eyebrow {
          font-family: var(--u-sans); font-size: 0.7rem; letter-spacing: 0.35em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; font-weight: 500;
        }
        .u-section-title {
          font-family: var(--u-serif); font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300; color: var(--dark); line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .u-section-title em { font-style: italic; font-weight: 400; color: var(--crimson); }

        /* ── Experience Cards ── */
        .u-exp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .u-exp-grid { grid-template-columns: 1fr; } }
        .u-exp-card {
          position: relative; background: var(--cream-light); border: 1px solid rgba(74,69,64,0.06);
          padding: 2.5rem 2rem; text-align: center;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
        }
        .u-exp-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
          opacity: 0; transition: opacity 0.5s;
        }
        .u-exp-card:hover::before { opacity: 1; }
        .u-exp-card:hover { transform: translateY(-4px) !important; box-shadow: 0 20px 60px rgba(74,69,64,0.08); }
        .u-exp-icon { width: 48px; height: 48px; margin: 0 auto 1.5rem; color: var(--sage); opacity: 0.8; }
        .u-exp-card h3 { font-family: var(--u-serif); font-size: 1.4rem; font-weight: 500; color: var(--dark); margin-bottom: 0.75rem; letter-spacing: -0.01em; }
        .u-exp-card p { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; font-weight: 300; }

        /* ── Quote Band ── */
        .u-quote-band {
          background: var(--dark); padding: 6rem 2rem; text-align: center;
          position: relative; overflow: hidden;
        }
        .u-quote-mark { font-family: var(--u-serif); font-size: 6rem; color: var(--gold); opacity: 0.2; line-height: 1; margin-bottom: -1rem; }
        .u-quote-text {
          font-family: var(--u-serif); font-size: clamp(1.3rem, 3vw, 2rem);
          font-weight: 300; font-style: italic; color: var(--cream);
          max-width: 700px; margin: 0 auto; line-height: 1.6;
          letter-spacing: -0.005em;
        }
        .u-quote-attr { margin-top: 2rem; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); font-weight: 400; }

        /* ── Journey ── */
        .u-journey-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .u-journey-grid { grid-template-columns: 1fr; } }
        .u-journey-card {
          background: var(--cream-light); border: 1px solid rgba(74,69,64,0.06);
          padding: 2.5rem; position: relative; overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .u-journey-card:hover { transform: translateY(-3px) !important; box-shadow: 0 16px 48px rgba(74,69,64,0.07); }
        .u-journey-num {
          font-family: var(--u-serif); font-size: 3.5rem; font-weight: 300;
          color: var(--gold); opacity: 0.2; position: absolute; top: 1rem; right: 1.5rem; line-height: 1;
        }
        .u-journey-card h4 { font-family: var(--u-serif); font-size: 1.35rem; font-weight: 500; color: var(--dark); margin-bottom: 0.75rem; letter-spacing: -0.01em; }
        .u-journey-card p { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; font-weight: 300; }
        .u-journey-icon { width: 28px; height: 28px; color: var(--sage); margin-bottom: 1rem; display: block; }

        /* ── Testimonial ── */
        .u-testimonial {
          background: var(--cream-light); border: 1px solid rgba(74,69,64,0.06);
          padding: 3rem; text-align: center; max-width: 600px; margin: 0 auto;
        }
        .u-testimonial-text {
          font-family: var(--u-serif); font-size: 1.15rem; font-style: italic;
          color: var(--text-primary); line-height: 1.7; margin-bottom: 1.5rem; font-weight: 400;
        }
        .u-testimonial-name { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-tertiary); font-weight: 500; }
        .u-testimonial-trip { font-size: 0.7rem; color: var(--text-tertiary); margin-top: 0.25rem; }

        /* ── Scholar ── */
        .u-scholar { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: center; }
        @media (max-width: 768px) { .u-scholar { grid-template-columns: 1fr; gap: 2rem; } }
        .u-scholar-image {
          aspect-ratio: 3/4; background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%);
          position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;
        }
        .u-scholar-placeholder { font-family: var(--u-serif); font-size: 4rem; font-weight: 300; color: rgba(245,240,232,0.2); font-style: italic; }
        .u-scholar-info h3 { font-family: var(--u-serif); font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 300; color: var(--dark); margin-bottom: 0.5rem; letter-spacing: -0.01em; }
        .u-scholar-role { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); font-weight: 500; margin-bottom: 1.5rem; }
        .u-scholar-info p { font-size: 1rem; color: var(--text-tertiary); line-height: 1.8; font-weight: 300; margin-bottom: 1rem; }

        /* Guest lecturer — same grid, lighter treatment */
        .u-guest-divider {
          max-width: 1100px; margin: 0 auto; padding: 0 0;
          display: flex; align-items: center; gap: 1.5rem;
        }
        .u-guest-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(74,69,64,0.1), transparent);
        }
        .u-guest-divider-label {
          font-family: var(--u-sans); font-size: 0.65rem; letter-spacing: 0.25em;
          text-transform: uppercase; color: var(--text-tertiary); font-weight: 500;
          white-space: nowrap;
        }
        .u-guest { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: center; }
        @media (max-width: 768px) { .u-guest { grid-template-columns: 1fr; gap: 2rem; } }
        .u-guest-image {
          aspect-ratio: 3/4; background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%);
          position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;
        }
        .u-guest-placeholder { font-family: var(--u-serif); font-size: 3.5rem; font-weight: 300; color: rgba(245,240,232,0.2); font-style: italic; }
        .u-guest-info h3 { font-family: var(--u-serif); font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 300; color: var(--dark); margin-bottom: 0.5rem; letter-spacing: -0.01em; }
        .u-guest-role { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--crimson); font-weight: 500; margin-bottom: 1.25rem; }
        .u-guest-info p { font-size: 0.95rem; color: var(--text-tertiary); line-height: 1.8; font-weight: 300; margin-bottom: 0.75rem; }

        /* ── Pricing ── */
        .u-pricing-section { background: var(--cream-light); position: relative; overflow: hidden; }
        .u-price-amount {
          font-family: var(--u-serif); font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 300; color: var(--dark); line-height: 1; margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .u-price-amount span { font-size: 0.5em; vertical-align: super; color: var(--text-tertiary); }
        .u-price-note { font-size: 1rem; color: var(--text-tertiary); font-weight: 300; }
        .u-price-deposit {
          display: inline-block; margin-top: 1.5rem; padding: 0.6rem 2rem;
          background: var(--sage); color: var(--cream);
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500;
        }
        .u-plans-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 3rem; }
        @media (max-width: 900px) { .u-plans-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .u-plans-grid { grid-template-columns: 1fr; } }
        .u-plan {
          background: var(--cream); border: 1px solid rgba(74,69,64,0.08);
          padding: 2rem 1.5rem; text-align: center;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); position: relative;
        }
        .u-plan.featured {
          background: var(--dark); color: var(--cream);
          border-color: var(--gold);
          box-shadow: 0 20px 60px rgba(74,69,64,0.15);
        }
        .u-plan:not(.featured):hover { border-color: var(--gold); transform: translateY(-2px) !important; }
        .u-plan-badge {
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
          background: var(--gold); color: var(--dark); padding: 0.25rem 1rem;
          font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600; white-space: nowrap;
        }
        .u-plan-name { font-family: var(--u-serif); font-size: 1.15rem; font-weight: 500; margin-bottom: 1rem; }
        .u-plan-price { font-family: var(--u-serif); font-size: 2.2rem; font-weight: 300; }
        .u-plan.featured .u-plan-price { color: var(--gold-light); }
        .u-plan-period { font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem; font-weight: 300; }
        .u-plan.featured .u-plan-period { color: rgba(245,240,232,0.6); }

        /* ── Details Strip ── */
        .u-details-strip {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border: 1px solid rgba(74,69,64,0.08); background: var(--cream);
        }
        @media (max-width: 768px) { .u-details-strip { grid-template-columns: repeat(2, 1fr); } }
        .u-detail-item {
          padding: 1.5rem; text-align: center; border-right: 1px solid rgba(74,69,64,0.06);
          font-size: 0.85rem; color: var(--text-secondary); font-weight: 300; line-height: 1.5;
        }
        .u-detail-item:last-child { border-right: none; }
        .u-detail-item strong {
          display: block; font-weight: 500; color: var(--dark); margin-bottom: 0.25rem;
          font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* ── FAQ ── */
        .u-faq-list { max-width: 700px; margin: 0 auto; }
        .u-faq-item { border-bottom: 1px solid rgba(74,69,64,0.08); }
        .u-faq-q {
          width: 100%; background: none; border: none; padding: 1.5rem 0;
          display: flex; justify-content: space-between; align-items: center; cursor: pointer;
          font-family: var(--u-serif); font-size: 1.15rem; font-weight: 500; color: var(--dark); text-align: left;
        }
        .u-faq-q:hover { color: var(--sage); }
        .u-faq-icon {
          width: 20px; height: 20px; min-width: 20px; color: var(--gold);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0; margin-left: 1rem;
        }
        .u-faq-item.open .u-faq-icon { transform: rotate(45deg); }
        .u-faq-a {
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.22, 1, 0.36, 1), padding 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          padding: 0;
        }
        .u-faq-item.open .u-faq-a { max-height: 250px; padding: 0 0 1.5rem; }
        .u-faq-a p { font-size: 0.95rem; color: var(--text-tertiary); line-height: 1.7; font-weight: 300; }

        /* ── CTA ── */
        .u-cta {
          background: var(--dark); position: relative; overflow: hidden;
          padding: 7rem 2rem; text-align: center;
        }
        .u-cta-content { position: relative; z-index: 10; max-width: 650px; margin: 0 auto; }
        .u-cta-bismillah { font-family: var(--u-arabic); font-size: 2.2rem; color: var(--gold); opacity: 0.5; margin-bottom: 2rem; }
        .u-cta-title {
          font-family: var(--u-serif); font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300; color: var(--cream); line-height: 1.3; margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        .u-cta-title em { font-style: italic; color: var(--gold-light); }
        .u-cta-desc { font-size: 1rem; color: rgba(245,240,232,0.6); font-weight: 300; line-height: 1.7; margin-bottom: 3rem; }
        .u-cta-action { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
        .u-cta-keyword {
          display: inline-block; border: 2px solid var(--gold); padding: 1rem 3rem;
          font-family: var(--u-serif); font-size: 1.8rem; font-weight: 500; color: var(--gold); letter-spacing: 0.15em;
        }
        .u-cta-instruction { font-size: 0.8rem; color: rgba(245,240,232,0.5); letter-spacing: 0.1em; text-transform: uppercase; }
        .u-cta-button {
          display: inline-flex; align-items: center; gap: 0.75rem; margin-top: 1rem;
          padding: 1.1rem 3rem; background: var(--gold); color: var(--dark);
          font-family: var(--u-sans); font-size: 0.8rem; letter-spacing: 0.2em;
          text-transform: uppercase; text-decoration: none; font-weight: 600;
          cursor: pointer; border: none;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .u-cta-button:hover {
          background: var(--gold-light); transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(187,167,106,0.3);
        }
        .u-cta-spots {
          margin-top: 2rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          font-size: 0.75rem; color: rgba(245,240,232,0.4); letter-spacing: 0.1em; text-transform: uppercase;
        }
        .u-cta-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sage); animation: uPulse 2s infinite; }
        @keyframes uPulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }

        /* ── Text of Study (Featured) ── */
        .u-study {
          background: var(--dark); position: relative; overflow: hidden;
          padding: 6rem 2rem 5rem;
        }
        @media (max-width: 768px) { .u-study { padding: 4rem 1.25rem 3.5rem; } }
        .u-study-inner {
          max-width: 1100px; margin: 0 auto; position: relative; z-index: 2;
        }

        /* Hero area: book + title side by side */
        .u-study-hero {
          display: grid; grid-template-columns: auto 1fr; gap: 3.5rem;
          align-items: center; margin-bottom: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(187,167,106,0.12);
        }
        @media (max-width: 900px) {
          .u-study-hero {
            grid-template-columns: 1fr; gap: 2rem;
            text-align: center; justify-items: center;
          }
        }

        .u-study-title-block { color: var(--cream); }
        .u-study-arabic {
          font-family: var(--u-arabic); font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700; color: var(--gold); line-height: 1.7;
          margin-bottom: 0.75rem; direction: rtl; text-align: right;
        }
        @media (max-width: 900px) { .u-study-arabic { text-align: center; } }
        .u-study-transliteration {
          font-family: var(--u-serif); font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-style: italic; color: var(--gold-light); opacity: 0.8;
          margin-bottom: 0.25rem; line-height: 1.4; letter-spacing: -0.01em;
        }
        @media (max-width: 900px) { .u-study-transliteration { text-align: center; } }
        .u-study-english {
          font-family: var(--u-serif); font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          font-weight: 400; color: rgba(245,240,232,0.5);
          margin-bottom: 1.75rem; font-style: italic;
        }
        @media (max-width: 900px) { .u-study-english { text-align: center; } }
        .u-study-intro {
          font-size: 0.95rem; color: rgba(245,240,232,0.65); line-height: 1.8;
          font-weight: 300; max-width: 540px;
        }
        @media (max-width: 900px) { .u-study-intro { max-width: 100%; } }

        /* Cards grid */
        .u-study-cards {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 900px) { .u-study-cards { grid-template-columns: 1fr; } }
        .u-study-card {
          background: rgba(245,240,232,0.04);
          border: 1px solid rgba(187,167,106,0.1);
          padding: 2rem 1.75rem;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .u-study-card:hover {
          background: rgba(245,240,232,0.06);
          border-color: rgba(187,167,106,0.2);
          transform: translateY(-3px) !important;
        }
        .u-study-card-icon {
          width: 32px; height: 32px; color: var(--gold); opacity: 0.7;
          margin-bottom: 1rem;
        }
        .u-study-card h4 {
          font-family: var(--u-serif); font-size: 1.15rem; font-weight: 500;
          color: var(--cream); margin-bottom: 0.75rem; letter-spacing: -0.01em;
        }
        .u-study-card p {
          font-size: 0.88rem; color: rgba(245,240,232,0.6); line-height: 1.7;
          font-weight: 300;
        }
        .u-study-card ul {
          list-style: none; padding: 0; margin: 0;
        }
        .u-study-card ul li {
          font-size: 0.88rem; color: rgba(245,240,232,0.6); font-weight: 300;
          padding: 0.4rem 0 0.4rem 1.25rem; position: relative; line-height: 1.5;
        }
        .u-study-card ul li::before {
          content: ''; position: absolute; left: 0; top: 0.7rem;
          width: 5px; height: 5px; border: 1px solid var(--gold); transform: rotate(45deg);
        }

        /* Living Seerah banner */
        .u-study-banner {
          background: linear-gradient(135deg, rgba(187,167,106,0.1) 0%, rgba(92,99,48,0.08) 100%);
          border: 1px solid rgba(187,167,106,0.15);
          padding: 2.5rem 3rem;
          display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .u-study-banner { grid-template-columns: 1fr; padding: 2rem 1.5rem; gap: 1.5rem; }
        }
        .u-study-banner h4 {
          font-family: var(--u-serif); font-size: clamp(1.3rem, 2vw, 1.6rem); font-weight: 400;
          color: var(--gold-light); line-height: 1.4; letter-spacing: -0.01em;
          font-style: italic;
        }
        .u-study-banner p {
          font-size: 0.9rem; color: rgba(245,240,232,0.6); line-height: 1.8;
          font-weight: 300;
        }

        /* Book mockup — real cover image */
        .u-study-book-col {
          display: flex; align-items: center; justify-content: center;
        }
        @media (max-width: 900px) {
          .u-study-book-col { max-width: 280px; margin: 0 auto; }
        }
        .u-study-book-wrapper {
          position: relative; width: 100%; max-width: 340px; perspective: 1200px;
        }
        @media (min-width: 901px) {
          .u-study-book-wrapper { max-width: 380px; }
        }
        .u-study-book {
          position: relative;
          transform: rotateY(-2deg);
          transform-origin: left center;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .u-study-book:hover { transform: rotateY(0deg); }
        .u-study-book img {
          display: block; width: 100%; height: auto;
          border-radius: 2px;
          box-shadow:
            4px 4px 16px rgba(0,0,0,0.15),
            12px 12px 40px rgba(0,0,0,0.1);
        }
        .u-study-book::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 14px; z-index: 2;
          background: linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0.04) 50%, transparent);
          pointer-events: none; border-radius: 2px 0 0 2px;
        }
        .u-study-book::after {
          content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 20px; z-index: 2;
          background: linear-gradient(to left, rgba(255,255,255,0.06), transparent);
          pointer-events: none;
        }
        .u-study-book-pages {
          position: absolute; right: -3px; top: 3px; bottom: 3px; width: 6px; z-index: -1;
          background: linear-gradient(to right,
            #e0dbd2, #ebe7df 25%, #e0dbd2 50%, #ebe7df 75%, #e0dbd2
          );
          box-shadow: 3px 1px 8px rgba(0,0,0,0.1);
          border-radius: 0 1px 1px 0;
        }
        @media (max-width: 768px) {
          .u-study-book-wrapper { max-width: 280px; }
          .u-study-book { transform: rotateY(0deg); }
          .u-study-book-pages { right: -2px; width: 5px; top: 2px; bottom: 2px; }
        }

        /* ── Global mobile refinements ── */
        @media (max-width: 768px) {
          .u-nav { padding: 1rem 1.25rem; }
          .u-nav.scrolled { padding: 0.6rem 1.25rem; }
          .u-nav-logo { font-size: 0.95rem; letter-spacing: 0.1em; }

          .u-hero { min-height: 100svh; }
          .u-hero-content { padding: 0 1.25rem; }
          .u-hero-title { font-size: clamp(2rem, 8vw, 3.5rem); line-height: 1.15; margin-bottom: 1.25rem; }
          .u-hero-title-leading { font-size: 0.38em; margin-bottom: 0.3em; }
          .u-hero-eyebrow { font-size: 0.65rem; letter-spacing: 0.25em; margin-bottom: 1.5rem; }
          .u-hero-subtitle { font-size: 0.95rem; margin-bottom: 2rem; line-height: 1.6; }
          .u-hero-cta { padding: 0.85rem 2rem; font-size: 0.7rem; letter-spacing: 0.15em; }
          .u-hero-scroll { bottom: 1.5rem; }

          .u-section { padding: 3.5rem 1.25rem; }
          .u-section-header { margin-bottom: 2.5rem; }
          .u-section-title { font-size: clamp(1.6rem, 5vw, 2.2rem); }

          .u-exp-card { padding: 2rem 1.5rem; }
          .u-exp-icon { width: 40px; height: 40px; margin-bottom: 1rem; }
          .u-exp-card h3 { font-size: 1.2rem; }

          .u-quote-band { padding: 3.5rem 1.5rem; }
          .u-quote-mark { font-size: 3.5rem; margin-bottom: -0.75rem; }
          .u-quote-text { font-size: 1.1rem; line-height: 1.7; }

          .u-journey-card { padding: 2rem 1.5rem; }
          .u-journey-num { font-size: 2.5rem; }
          .u-journey-card h4 { font-size: 1.2rem; }

          .u-testimonial { padding: 2rem 1.5rem; }
          .u-testimonial-text { font-size: 1.05rem; }

          .u-scholar { gap: 2rem; }
          .u-scholar-image { aspect-ratio: 4/3; }
          .u-scholar-info h3 { font-size: 1.6rem; }

          .u-plans-grid { gap: 0.75rem; grid-template-columns: 1fr 1fr; }
          .u-plan { padding: 1.5rem 1rem; }
          .u-plan-name { font-size: 1rem; }
          .u-plan-price { font-size: 1.8rem; }
          .u-plan.featured { transform: none; }
          .u-plan-badge { font-size: 0.55rem; padding: 0.2rem 0.75rem; }

          .u-details-strip { grid-template-columns: 1fr 1fr; }
          .u-detail-item { padding: 1rem 0.75rem; font-size: 0.8rem; }
          .u-detail-item:nth-child(2) { border-right: none; }

          .u-faq-q { font-size: 1rem; padding: 1.25rem 0; }

          .u-cta { padding: 4.5rem 1.5rem; }
          .u-cta-title { font-size: clamp(1.6rem, 5vw, 2.2rem); }
          .u-cta-keyword { font-size: 1.3rem; padding: 0.75rem 1.75rem; }
          .u-cta-button { padding: 0.9rem 2rem; font-size: 0.7rem; letter-spacing: 0.15em; }
          .u-cta-bismillah { font-size: 1.8rem; }

          .u-study { padding: 3.5rem 1.25rem; }

          .u-footer { padding: 2rem 1.25rem; }
        }

        @media (max-width: 400px) {
          .u-hero-title { font-size: 1.8rem; }
          .u-hero-title-leading { font-size: 0.4em; }
          .u-plans-grid { grid-template-columns: 1fr; }
          .u-details-strip { grid-template-columns: 1fr; }
          .u-detail-item { border-right: none; border-bottom: 1px solid rgba(74,69,64,0.06); }
          .u-detail-item:last-child { border-bottom: none; }
          .u-cta-keyword { font-size: 1.1rem; padding: 0.6rem 1.5rem; }
        }

        /* ── Footer ── */
        .u-footer {
          padding: 3rem 2rem; text-align: center; background: #3a3530;
          color: rgba(245,240,232,0.3); font-size: 0.75rem; letter-spacing: 0.1em;
        }

        /* ── Back to Top ── */
        .u-btt {
          position: fixed; bottom: 2rem; right: 2rem; width: 44px; height: 44px;
          background: var(--dark); color: var(--gold); border: 1px solid var(--gold);
          display: flex; align-items: center; justify-content: center; cursor: pointer;
          opacity: 0; pointer-events: none; transition: all 0.4s; z-index: 90;
        }
        .u-btt.visible { opacity: 1; pointer-events: auto; }
        .u-btt:hover { background: var(--gold); color: var(--dark); }
      `}</style>

      <div className="u-page" style={{ minHeight: '100vh' }}>

        {/* Skip Link */}
        <a href="#experience" className="u-skip-link">Skip to content</a>

        {/* ═══ Nav ═══ */}
        <nav className={`u-nav ${navScrolled ? 'scrolled' : ''}`}>
          <a href="#" className="u-nav-logo">Mustafa Briggs</a>
          <ul className="u-nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#text">Text</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#scholar">Scholar</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <button className="u-nav-hamburger" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`u-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <button className="u-mobile-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          {['Experience', 'Text', 'Journey', 'Scholar', 'Pricing', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>{item}</a>
          ))}
        </div>

        {/* ═══ Hero ═══ */}
        <section className="u-hero">
          <div className="u-hero-img" />
          <div className="u-hero-vignette" />
          <div className="u-hero-bg" />
          <div className="u-grain" style={{ zIndex: 3 }} />
          <div className="u-pattern-overlay" style={{ zIndex: 4 }} />
          <div className="u-hero-content">
            <p className="u-hero-eyebrow">Thanksgiving 2026 · Makkah &amp; Madinah</p>
            <h1 className="u-hero-title">
              <span className="u-hero-title-leading">Umrah with</span>
              <em>Shaykh Mustafa Briggs</em>
            </h1>
            <p className="u-hero-subtitle">A seerah-based journey of knowledge, spirituality, and transformation — walking where the Prophet ﷺ walked.</p>
            <a href="#pricing" className="u-hero-cta">
              Secure Your Place
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="u-hero-scroll">
            <span>Discover</span>
            <div className="u-scroll-line" />
          </div>
        </section>

        {/* ═══ Experience ═══ */}
        <section className="u-section" id="experience">
          <div className="u-section-inner">
            <Reveal className="u-section-header">
              <p className="u-section-eyebrow">The Experience</p>
              <h2 className="u-section-title">What <em>Awaits</em> You</h2>
            </Reveal>
            <div className="u-exp-grid">
              <Reveal className="u-exp-card" delay={0}>
                <svg className="u-exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <h3>5-Star Sanctuary</h3>
                <p>Premium accommodations within walking distance of the Haram, your home for reflection and rest.</p>
              </Reveal>
              <Reveal className="u-exp-card" delay={150}>
                <svg className="u-exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                <h3>Daily Circles of Knowledge</h3>
                <p>Intimate learning sessions with Shaykh Mustafa Briggs and distinguished guest scholars each day.</p>
              </Reveal>
              <Reveal className="u-exp-card" delay={300}>
                <svg className="u-exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                <h3>Guided Expeditions</h3>
                <p>Journey to key historical sites where pivotal moments of Islamic history unfolded.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ Quote Band ═══ */}
        <div className="u-quote-band">
          <div className="u-pattern-overlay" />
          <div className="u-grain" style={{ opacity: 0.25 }} />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Reveal delay={0}>
              <div className="u-quote-mark">"</div>
            </Reveal>
            <Reveal delay={200}>
              <p className="u-quote-text">
                This is more than an Umrah. It is a return — to knowledge, to the footsteps of the beloved ﷺ, and to the truest version of yourself.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="u-quote-attr">— Shaykh Mustafa Briggs</p>
            </Reveal>
          </div>
        </div>

        {/* ═══ Text of Study (Featured) ═══ */}
        <section className="u-study" id="text">
          <div className="u-pattern-overlay" />
          <div className="u-grain" style={{ opacity: 0.2 }} />
          <div className="u-study-inner">
            <Reveal className="u-section-header" style={{ marginBottom: '3rem' }}>
              <p className="u-section-eyebrow" style={{ color: 'var(--gold)' }}>Text of Study</p>
              <h2 className="u-section-title" style={{ color: 'var(--cream)' }}>The <em>Poem</em> We Will Study</h2>
            </Reveal>

            {/* Hero: Book + Title */}
            <Reveal>
              <div className="u-study-hero">
                <div className="u-study-book-col">
                  <div className="u-study-book-wrapper">
                    <div className="u-study-book">
                      <img
                        src="https://images.arabicbookshop.net/318-057_4_3.jpg"
                        alt="Al-Arjūzah al-Mi'iyyah — A Hundred-Line Poem on the Life of the Noblest of Creation"
                        loading="lazy"
                      />
                      <div className="u-study-book-pages" />
                    </div>
                  </div>
                </div>
                <div className="u-study-title-block">
                  <p className="u-study-arabic">الأرجوزة الميئية في ذكر حال أشرف البرية</p>
                  <p className="u-study-transliteration">Al-Arjūzah al-Mi'iyyah fī Dhikr Ḥāl Ashraf al-Bariyyah</p>
                  <p className="u-study-english">A Hundred-Line Poem on the Life of the Noblest of Creation</p>
                  <p className="u-study-intro">
                    Composed in approximately one hundred lines of rajaz poetry, this classical work traces the key moments of the Prophet's ﷺ blessed life — from lineage and birth to revelation, Hijrah, the Madinan period, and his passing — while highlighting his noble character and virtues.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Three cards */}
            <div className="u-study-cards">
              <Reveal className="u-study-card" delay={0}>
                <svg className="u-study-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                <h4>The Author</h4>
                <p>Imām Ibn Abī al-ʿIzz al-Ḥanafī (d. 792 AH), a distinguished jurist of Damascus best known for his commentary on al-ʿAqīdah al-Ṭaḥāwiyyah. This work reflects the classical tradition of distilling the Seerah into a structured, memorable form.</p>
              </Reveal>

              <Reveal className="u-study-card" delay={150}>
                <svg className="u-study-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <h4>Daily Method</h4>
                <p>This poem serves as the foundation of our daily sessions. Each lesson includes:</p>
                <ul>
                  <li>Recitation of selected lines</li>
                  <li>Translation &amp; concise commentary</li>
                  <li>Key historical context &amp; reflections</li>
                </ul>
              </Reveal>

              <Reveal className="u-study-card" delay={300}>
                <svg className="u-study-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <h4>Enriched Learning</h4>
                <p>We further enrich the text through relevant Qur'anic verses, Prophetic hadith, and insights from the classical scholars, while drawing on the Shamā'il to deepen our understanding of the character and presence of the Prophet ﷺ.</p>
              </Reveal>
            </div>

            {/* Living Seerah banner */}
            <Reveal>
              <div className="u-study-banner">
                <h4>Studied in Madinah, this text moves beyond theory — the Seerah is experienced, not just learned.</h4>
                <p>As we visit key sites and walk the very spaces where these events unfolded, this becomes an opportunity to combine knowledge, place, and presence, and to connect to the life of the Prophet ﷺ with clarity, depth, and love.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ Journey ═══ */}
        <section className="u-section" id="journey">
          <div className="u-section-inner">
            <Reveal className="u-section-header">
              <p className="u-section-eyebrow">The Journey</p>
              <h2 className="u-section-title">More Than <em>Umrah</em></h2>
            </Reveal>
            <div className="u-journey-grid">
              {journeyItems.map((item, i) => (
                <Reveal key={i} className="u-journey-card" delay={i * 150}>
                  <span className="u-journey-num">{item.num}</span>
                  <JourneyIcon type={item.icon} />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Testimonial ═══ */}
        <section className="u-section">
          <div className="u-section-inner">
            <Reveal className="u-testimonial">
              <p className="u-testimonial-text">"Traveling with Shaykh Mustafa transformed the way I understand the places I visited. Every site became a lesson, every prayer became deeper. It wasn't tourism — it was transformation."</p>
              <p className="u-testimonial-name">Past Traveler</p>
              <p className="u-testimonial-trip">Previous Umrah Journey</p>
            </Reveal>
          </div>
        </section>

        {/* ═══ Scholars ═══ */}
        <section className="u-section" id="scholar" style={{ background: 'var(--cream-light)' }}>
          <div className="u-section-inner">
            <Reveal className="u-section-header">
              <p className="u-section-eyebrow">Your Guides</p>
              <h2 className="u-section-title">Led by <em>Scholars</em> of Tradition</h2>
            </Reveal>

            {/* Primary: Shaykh Mustafa Briggs */}
            <div className="u-scholar">
              <Reveal delay={0}>
                <div className="u-scholar-image">
                  <span className="u-scholar-placeholder">م</span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="u-scholar-info">
                  <h3>Shaykh Mustafa Briggs</h3>
                  <p className="u-scholar-role">Scholar · Author · Lead Guide</p>
                  <p>Shaykh Mustafa Briggs is a scholar of Islamic history and the author of <em>Beyond Bilal: Black History in the Muslim World</em>. He has dedicated years to studying the Seerah and the rich tapestry of Islamic civilization across continents.</p>
                  <p>His approach weaves together deep historical knowledge with living spiritual practice — transforming the places you visit from landmarks into profound encounters with the legacy of the Prophet ﷺ and the scholars who followed.</p>
                </div>
              </Reveal>
            </div>

            {/* Divider */}
            <Reveal style={{ padding: '3rem 0' }}>
              <div className="u-guest-divider">
                <div className="u-guest-divider-line" />
                <span className="u-guest-divider-label">Guest Lecturer</span>
                <div className="u-guest-divider-line" />
              </div>
            </Reveal>

            {/* Guest: Shaykh Zakariya Abdul Aziz */}
            <div className="u-guest">
              <Reveal delay={0}>
                <div className="u-guest-image">
                  <span className="u-guest-placeholder">ز</span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="u-guest-info">
                  <h3>Shaykh Zakariya Abdul Aziz</h3>
                  <p className="u-guest-role">Guest Lecturer</p>
                  <p>Shaykh Zakariya Abdul Aziz joins us as a guest lecturer, bringing his own depth of scholarship and spiritual insight to enrich the journey. His sessions will complement the core programme, offering additional perspectives on the Seerah and the living tradition of Islamic knowledge.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ Pricing ═══ */}
        <section className="u-section u-pricing-section" id="pricing">
          <div className="u-section-inner">
            <Reveal className="u-section-header">
              <p className="u-section-eyebrow">Investment</p>
              <h2 className="u-section-title">An Investment in <em>Knowledge</em></h2>
            </Reveal>

            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="u-price-amount"><span>$</span>4,500</p>
                <p className="u-price-note">Complete package per person</p>
                <div className="u-price-deposit">$500 deposit secures your place</div>
              </div>
            </Reveal>

            <Reveal>
              <p style={{ textAlign: 'center', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--text-tertiary)', marginBottom: '2rem', fontWeight: 500 }}>
                Flexible Payment Plans
              </p>
            </Reveal>

            <div className="u-plans-grid">
              {plans.map((plan, i) => (
                <Reveal key={i} className={`u-plan ${plan.featured ? 'featured' : ''}`} delay={i * 120}>
                  {plan.badge && <div className="u-plan-badge">{plan.badge}</div>}
                  <p className="u-plan-name" style={plan.featured ? { color: 'var(--cream)' } : undefined}>{plan.name}</p>
                  <p className="u-plan-price">{plan.price}</p>
                  <p className="u-plan-period">{plan.period}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="u-details-strip">
              <div className="u-detail-item"><strong>Payment Window</strong>April – October 2026</div>
              <div className="u-detail-item"><strong>Completion</strong>All payments before travel</div>
              <div className="u-detail-item"><strong>Deposit</strong>Non-refundable</div>
              <div className="u-detail-item"><strong>Availability</strong>Limited spaces</div>
            </Reveal>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="u-section" id="faq">
          <div className="u-section-inner">
            <Reveal className="u-section-header">
              <p className="u-section-eyebrow">Questions</p>
              <h2 className="u-section-title">Frequently <em>Asked</em></h2>
            </Reveal>
            <Reveal className="u-faq-list">
              {faqs.map((item, i) => (
                <div key={i} className={`u-faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="u-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {item.q}
                    <svg className="u-faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </button>
                  <div className="u-faq-a"><p>{item.a}</p></div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="u-cta">
          <div className="u-pattern-overlay" />
          <div className="u-grain" style={{ opacity: 0.25 }} />
          <div className="u-cta-content">
            <Reveal>
              <p className="u-cta-bismillah">بسم الله</p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="u-cta-title">Begin Your <em>Journey</em></h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="u-cta-desc">This Thanksgiving, step away from the ordinary and into a journey that will reshape how you see the world, your faith, and yourself.</p>
            </Reveal>
            <Reveal delay={450}>
              <div className="u-cta-action">
                <p className="u-cta-instruction">Send via WhatsApp to begin</p>
                <div className="u-cta-keyword">UMRAH</div>
                <button className="u-cta-button">
                  Open WhatsApp
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
                <div className="u-cta-spots">
                  <span className="u-cta-dot" />
                  Limited spaces remaining
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ Footer ═══ */}
        <footer className="u-footer">
          <p style={{ marginBottom: '0.5rem' }}>Umrah with Mustafa Briggs · Thanksgiving 2026</p>
          <p>&copy; 2026 All rights reserved</p>
        </footer>

        {/* ═══ Back to Top ═══ */}
        <button
          className={`u-btt ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
        </button>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   Journey icon helper
   ══════════════════════════════════════════════════════════ */
function JourneyIcon({ type }: { type: string }) {
  const props = {
    className: 'u-journey-icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'book': return <svg {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
    case 'globe': return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>;
    case 'users': return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case 'star': return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
    default: return null;
  }
}