import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Rich, Saw } from '../../components/Rich';
import { useConceptPage } from '../../hooks/useConceptPage';
import { useStickyCta } from '../../hooks/useStickyCta';
import {
  CHECKOUT_URL,
  CHECKOUT_PLAN,
  IMAGES,
  hero,
  chain,
  whoFor,
  believe,
  reading,
  sitting,
  guide,
  company,
  hadiyah,
  faq,
} from '../../content/home';

// Concept B · The Sanctuary. Immersive and centred: Cormorant Garamond display
// over Inter, the mihrab arch and the circle as recurring shapes, an
// eight-point star taken from the lattice behind the Shaykh as the ornament.

const FONTS =
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap';

const EYEBROW = 'font-inter uppercase tracking-[0.24em] text-[12px] font-medium';

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
} as const;

function Star({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <polygon points="12,1 14.37,6.27 19.78,4.22 17.73,9.63 23,12 17.73,14.37 19.78,19.78 14.37,17.73 12,23 9.63,17.73 4.22,19.78 6.27,14.37 1,12 6.27,9.63 4.22,4.22 9.63,6.27" />
    </svg>
  );
}

// Large line-drawn khatam (two interlaced squares) for quiet background texture.
function Khatam({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="0.6">
      <rect x="20" y="20" width="60" height="60" />
      <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="18" />
      <circle cx="50" cy="50" r="42" />
    </svg>
  );
}

function Pill({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <a
      href="#join"
      className={`inline-flex items-center justify-center gap-2 min-h-[54px] px-9 rounded-full font-inter font-medium text-[16px] tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        light
          ? 'bg-cream-50 text-sage-700 hover:bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] focus-visible:ring-cream-50 focus-visible:ring-offset-warm-900'
          : 'bg-sage-700 text-cream-50 hover:bg-sage-600 shadow-[0_12px_30px_-12px_rgba(74,88,80,0.8)] focus-visible:ring-sage-600'
      } ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHead({ num, title, dark = false, sub }: { num?: string; title: string; dark?: boolean; sub?: ReactNode }) {
  return (
    <motion.header {...reveal} className="text-center mb-12 sm:mb-16">
      <Star className={`w-4 h-4 mx-auto mb-5 ${dark ? 'text-cream-300' : 'text-sage-500'}`} />
      {num && <p className={`${EYEBROW} ${dark ? 'text-cream-300' : 'text-sage-600'} mb-4`}>Chapter {num}</p>}
      <h2
        className={`font-cormorant font-medium text-[40px] sm:text-[56px] leading-[1.05] tracking-[-0.01em] text-balance ${
          dark ? 'text-cream-50' : 'text-warm-900'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 font-cormorant italic text-[24px] sm:text-[28px] ${dark ? 'text-cream-200' : 'text-sage-700'}`}>{sub}</p>
      )}
    </motion.header>
  );
}

export default function ConceptSanctuary() {
  useConceptPage('Concept B · The Sanctuary', FONTS);
  const [amount, setAmount] = useState('10');
  const showSticky = useStickyCta('top', 'join');

  return (
    <div className="font-inter [font-variant-numeric:lining-nums] bg-cream-50 text-warm-700 text-[17px] leading-[1.75] antialiased">
      {/* Navigation: transparent over the hero */}
      <nav className="absolute top-0 inset-x-0 z-40" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="font-cormorant text-[24px] font-medium text-cream-50">
            Briggs&rsquo; Book Club
          </Link>
          <a
            href="#join"
            className="inline-flex items-center min-h-[44px] px-5 rounded-full border border-cream-50/40 text-cream-50 text-[14px] font-medium backdrop-blur-sm bg-warm-900/20 hover:bg-cream-50 hover:text-sage-700 transition-colors duration-300"
          >
            Take your seat
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <header id="top" className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            src={IMAGES.manuscripts}
            alt="A scholar reading among centuries-old manuscripts"
            className="absolute inset-0 w-full h-full object-cover object-[58%_30%]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-900/55 via-warm-900/60 to-warm-900/95" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(28,25,23,0.55)_75%)]"
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl mx-auto px-5 sm:px-8 pt-28 pb-14 sm:py-32 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`${EYEBROW} text-cream-200 flex items-center justify-center gap-3`}
            >
              <Star className="w-3 h-3 text-cream-300" />
              {hero.eyebrow}
              <Star className="w-3 h-3 text-cream-300" />
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-cormorant font-medium text-[48px] sm:text-[76px] lg:text-[92px] leading-[1] tracking-[-0.015em] text-cream-50 text-balance"
            >
              {hero.lead}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-7 max-w-2xl mx-auto text-[17px] sm:text-[19px] leading-[1.7] text-cream-100/90 text-pretty"
            >
              {hero.body}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="mt-9 flex flex-col items-center gap-3"
            >
              <Pill light className="w-full sm:w-auto">{hero.cta}</Pill>
              <p className="text-[14px] text-cream-200/90">{hero.reassurance}</p>
            </motion.div>
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="mt-10 sm:mt-12 max-w-xl mx-auto rounded-2xl border border-cream-50/20 bg-warm-900/40 backdrop-blur-md px-5 py-4 text-left flex gap-4 items-start"
            >
              <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-cream-50/10 border border-cream-50/25 grid place-items-center">
                <Star className="w-3.5 h-3.5 text-cream-200" />
              </span>
              <p className="text-[15px] leading-[1.6] text-cream-100">
                <span className={`${EYEBROW} text-[11px] text-cream-300 block mb-1`}>{hero.newLabel}</span>
                <em className="font-cormorant text-[19px] not-italic font-semibold text-cream-50">{hero.newBefore}</em>{' '}
                <Saw className="text-[18px]" /> {hero.newAfter}
              </p>
            </motion.aside>
          </div>
        </header>

        {/* Brand and motto */}
        <div className="py-14 sm:py-20 text-center border-b border-warm-200/70">
          <p className="font-cormorant text-[34px] sm:text-[44px] font-medium text-warm-900">Briggs&rsquo; Book Club</p>
          <p className="mt-3 flex items-center justify-center gap-4 sm:gap-6 font-cormorant italic text-[22px] sm:text-[28px] text-sage-700">
            Read.
            <Star className="w-2.5 h-2.5 text-sage-500" />
            Reflect.
            <Star className="w-2.5 h-2.5 text-sage-500" />
            Remember.
          </p>
        </div>

        {/* 01 The Chain */}
        <section id="chain" className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <SectionHead num={chain.num} title={chain.title} />
            <motion.div {...reveal} className="space-y-6 text-center text-[18px] sm:text-[19px] text-pretty">
              <p className="font-cormorant text-[24px] sm:text-[28px] leading-[1.45] text-warm-900">
                <Rich text={chain.paragraphs[0]} />
              </p>
              <p>{chain.paragraphs[1]}</p>
              <p className="text-warm-900 font-medium">{chain.paragraphs[2]}</p>
            </motion.div>

            <motion.ol {...reveal} className="relative grid grid-cols-5 mt-16" aria-label="The chain of transmission">
              <span className="absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-warm-300 via-sage-500 to-sage-600" aria-hidden="true" />
              {chain.stations.map((s, i) => {
                const last = i === chain.stations.length - 1;
                return (
                  <li key={s} className="relative flex flex-col items-center text-center">
                    <span
                      className={`grid place-items-center w-10 h-10 rounded-full border ${
                        last
                          ? 'bg-sage-700 border-sage-700 text-cream-50 shadow-[0_0_0_8px_rgba(93,111,99,0.15)]'
                          : 'bg-cream-50 border-warm-300 text-sage-600'
                      }`}
                      aria-hidden="true"
                    >
                      {last ? <Star className="w-3.5 h-3.5" /> : <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                    </span>
                    <span className={`mt-3 text-[12px] sm:text-[13px] ${last ? 'text-sage-700 font-semibold' : 'text-warm-500'}`}>
                      {s}
                    </span>
                  </li>
                );
              })}
            </motion.ol>
          </div>
        </section>

        {/* 02 Who this circle is for */}
        <section id="for" className="py-24 sm:py-32 bg-cream-100">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHead num={whoFor.num} title={whoFor.title} />
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.figure {...reveal} className="md:col-span-5 max-w-sm w-full mx-auto">
                <div className="rounded-t-full rounded-b-3xl overflow-hidden ring-1 ring-warm-300 ring-offset-8 ring-offset-cream-100">
                  <img
                    src={IMAGES.manuscripts}
                    alt=""
                    className="w-full aspect-[3/4] object-cover object-[48%_35%]"
                    loading="lazy"
                  />
                </div>
              </motion.figure>
              <motion.div {...reveal} className="md:col-span-7">
                <p className="font-cormorant italic text-[28px] text-warm-900 mb-5">{whoFor.intro}</p>
                <ul className="space-y-3">
                  {whoFor.items.map((item) => (
                    <li key={item} className="flex gap-4 items-start bg-cream-50 rounded-2xl px-5 py-4 border border-warm-200/80">
                      <span className="mt-0.5 flex-shrink-0 grid place-items-center w-7 h-7 rounded-full bg-sage-600/10 text-sage-700">
                        <Check className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <span className="text-[17px] leading-[1.6] text-warm-800">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-cormorant italic text-[21px] leading-[1.5] text-warm-600 text-pretty">{whoFor.notFor}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 03 What we believe */}
        <section id="believe" className="pt-24 sm:pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <SectionHead num={believe.num} title={believe.title} />
            <motion.div {...reveal} className="grid sm:grid-cols-3 gap-5">
              {believe.pillars.map(({ word, line }) => (
                <div
                  key={word}
                  className="rounded-t-full rounded-b-3xl bg-cream-100 border border-warm-200 px-6 pt-16 pb-9 text-center"
                >
                  <Star className="w-4 h-4 mx-auto text-sage-500" />
                  <p className="mt-5 font-cormorant font-medium text-[44px] leading-none text-warm-900">{word}</p>
                  <p className="mt-3 text-[16px] leading-[1.6] text-warm-600">{line}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...reveal} className="mt-14 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-center">
              <div>
                <p className={`${EYEBROW} text-warm-400 mb-4`}>This isn&rsquo;t</p>
                <ul className="flex flex-wrap justify-center gap-2">
                  {believe.isnt.map((x) => (
                    <li key={x} className="px-4 py-2 rounded-full border border-warm-300 text-[15px] text-warm-500">{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`${EYEBROW} text-sage-600 mb-4`}>This is</p>
                <ul className="flex flex-wrap justify-center gap-2">
                  {believe.is.map((x) => (
                    <li key={x} className="px-4 py-2 rounded-full bg-sage-600/10 border border-sage-500/30 text-[15px] font-medium text-sage-700">{x}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section {...reveal} className="relative bg-sage-700 py-20 sm:py-28 overflow-hidden" aria-label="Our principle">
          <Khatam className="absolute -right-20 -top-24 w-80 h-80 text-cream-50/15" />
          <Khatam className="absolute -left-24 -bottom-28 w-96 h-96 text-cream-50/10" />
          <blockquote className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center font-cormorant italic text-[34px] sm:text-[54px] leading-[1.2] text-cream-50 text-balance">
            &ldquo;{believe.quote}&rdquo;
          </blockquote>
        </motion.section>

        {/* 04 What we're reading */}
        <section id="reading" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHead num={reading.num} title={reading.title} sub={reading.subtitle} />

            <motion.article {...reveal} className="relative rounded-[32px] bg-warm-900 text-cream-100 overflow-hidden">
              <img
                src={IMAGES.manuscripts}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
                loading="lazy"
              />
              <div className="relative p-7 sm:p-12 lg:p-16">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cream-50 text-sage-700 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    {reading.beginning.status}
                  </span>
                  <span className={`${EYEBROW} text-[11px] text-cream-300`}>{hero.newLabel}</span>
                </div>
                <h3 className="mt-6 font-cormorant font-medium text-[48px] sm:text-[72px] leading-[0.95] text-cream-50">
                  {reading.beginning.title}
                </h3>
                <p className="mt-3 font-cormorant italic text-[20px] sm:text-[22px] text-cream-300">{reading.beginning.fullTitle}</p>
                <p className="mt-2 text-[17px] text-cream-100">
                  <Rich text={reading.beginning.subtitle} />
                </p>

                <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14">
                  <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-cream-100/90 text-pretty">
                    {reading.beginning.paragraphs.map((p, i) => (
                      <p key={i}>
                        <Rich text={p} />
                      </p>
                    ))}
                  </div>
                  <aside className="self-start rounded-3xl bg-cream-50 text-warm-700 p-7 sm:p-9">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-600/10 text-sage-700 text-[12px] font-semibold uppercase tracking-[0.14em]">
                      <Star className="w-3 h-3" /> First time in English
                    </span>
                    <h4 className="mt-4 font-cormorant font-medium text-[32px] leading-[1.1] text-warm-900">
                      {reading.beginning.commentaryTitle}
                    </h4>
                    <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-pretty">
                      {reading.beginning.commentary.map((p, i) => (
                        <p key={i} className={i === 1 ? 'text-warm-900 font-medium' : ''}>
                          <Rich text={p} />
                        </p>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </motion.article>

            <motion.article {...reveal} className="mt-6 rounded-[32px] bg-cream-100 border border-warm-200 p-7 sm:p-12 grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <span className="px-3 py-1 rounded-full border border-sage-600 text-sage-700 text-[12px] font-semibold uppercase tracking-[0.16em]">
                  {reading.continuing.status}
                </span>
                <h3 className="mt-5 font-cormorant font-medium text-[40px] sm:text-[48px] leading-none text-warm-900">
                  {reading.continuing.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="font-cormorant italic text-[22px] text-sage-700">{reading.continuing.subtitle}</p>
                <p className="mt-2 text-warm-600">{reading.continuing.body}</p>
              </div>
            </motion.article>
          </div>
        </section>

        {/* 05 How a sitting works */}
        <section id="sitting" className="py-24 sm:py-32 bg-cream-100">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <SectionHead num={sitting.num} title={sitting.title} />
            <motion.p {...reveal} className="text-center font-cormorant italic text-[28px] sm:text-[36px] leading-[1.25] text-warm-900 max-w-2xl mx-auto text-balance">
              {sitting.lead}
            </motion.p>
            <motion.p {...reveal} className="mt-6 text-center max-w-2xl mx-auto text-[18px] text-pretty">
              <Rich text={sitting.body} />
            </motion.p>
            <motion.ol {...reveal} className="relative mt-16 grid sm:grid-cols-3 gap-10">
              <span className="hidden sm:block absolute top-10 left-[17%] right-[17%] h-px bg-warm-300" aria-hidden="true" />
              {sitting.steps.map((s, i) => (
                <li key={s.label} className="relative text-center">
                  <span className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-cream-50 border border-sage-500/40 font-cormorant text-[34px] text-sage-700 shadow-[0_0_0_8px_#faf8f4]">
                    {i + 1}
                  </span>
                  <p className="mt-5 font-cormorant font-medium text-[28px] text-warm-900">{s.label}</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-warm-600 max-w-[16rem] mx-auto">{s.text}</p>
                </li>
              ))}
            </motion.ol>
            <motion.p {...reveal} className="mt-14 flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream-50 border border-warm-200 text-[15px] text-warm-700">
                <PlayCircle className="w-4 h-4 text-sage-600" aria-hidden="true" />
                {sitting.footnote}
              </span>
            </motion.p>
          </div>
        </section>

        {/* 06 The guide */}
        <section id="guide" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHead num={guide.num} title={guide.title} />
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.figure {...reveal} className="md:col-span-5 max-w-sm w-full mx-auto">
                <div className="rounded-t-full rounded-b-3xl overflow-hidden ring-1 ring-sage-500/40 ring-offset-8 ring-offset-cream-50 shadow-[0_40px_80px_-40px_rgba(28,25,23,0.45)]">
                  <img
                    src={IMAGES.shaykh}
                    alt="Shaykh Mustafa Briggs teaching"
                    className="w-full aspect-[3/4] object-cover object-[42%_30%]"
                    loading="lazy"
                  />
                </div>
              </motion.figure>
              <motion.div {...reveal} className="md:col-span-7">
                <p className={`${EYEBROW} text-sage-600`}>Your teacher</p>
                <h3 className="mt-3 font-cormorant font-medium text-[44px] sm:text-[52px] leading-[1.02] text-warm-900">{guide.name}</h3>
                <div className="mt-6 space-y-5 text-[17px] sm:text-[18px] text-pretty">
                  {guide.paragraphs.map((p, i) => (
                    <p key={i} className={i === 1 ? 'text-warm-900 font-medium' : ''}>
                      <Rich text={p} />
                    </p>
                  ))}
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {guide.credentials.map((c) => (
                    <li key={c} className="px-4 py-2 rounded-full bg-cream-100 border border-warm-200 text-[14px] text-warm-700">{c}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 07 The company you keep */}
        <section id="company" className="py-24 sm:py-32 bg-cream-100">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <SectionHead num={company.num} title={company.title} />
            <motion.p {...reveal} className="font-cormorant italic text-[26px] sm:text-[32px] leading-[1.35] text-warm-900 text-balance">
              <Rich text={company.lead} />
            </motion.p>
            <motion.dl {...reveal} className="mt-14 grid grid-cols-3 gap-3 sm:gap-10 max-w-2xl mx-auto">
              {company.stats.map((s) => (
                <div key={s.label} className="aspect-square rounded-full bg-cream-50 border border-warm-200 grid place-content-center px-2">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-cormorant font-medium text-[24px] sm:text-[40px] leading-none text-warm-900">{s.value}</dd>
                  <dd className="mt-1.5 text-[11px] sm:text-[13px] leading-tight text-warm-500">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
            <motion.p {...reveal} className="mt-12 text-[18px] text-warm-700">
              {company.closing}
            </motion.p>
          </div>
        </section>

        {/* 08 The hadiyah */}
        <section id="join" className="relative py-24 sm:py-32 bg-sage-700 text-cream-100 overflow-hidden scroll-mt-4">
          <Khatam className="absolute right-[-8rem] top-16 w-[30rem] h-[30rem] text-cream-50/10" />
          <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
            <SectionHead num={hadiyah.num} title={hadiyah.title} dark />
            <motion.div {...reveal} className="text-center space-y-8 text-[18px] text-pretty">
              <p>
                <Rich text={hadiyah.intro} />
              </p>
              <figure>
                <p className="font-arabic text-[40px] sm:text-[54px] leading-[1.8] text-cream-50" dir="rtl" lang="ar">
                  {hadiyah.arabic}
                </p>
                <figcaption className="font-cormorant italic text-[24px] text-cream-200">&ldquo;{hadiyah.translation}&rdquo;</figcaption>
              </figure>
              <p className="text-cream-50">{hadiyah.body}</p>
            </motion.div>

            <motion.form
              {...reveal}
              action={CHECKOUT_URL}
              method="get"
              className="mt-12 max-w-md mx-auto rounded-[32px] bg-cream-50 text-warm-800 p-6 sm:p-9 shadow-[0_40px_80px_-30px_rgba(28,25,23,0.6)] space-y-5"
            >
              <input type="hidden" name="plan" value={CHECKOUT_PLAN} />
              <p className="text-center font-cormorant font-medium text-[26px] text-warm-900">{hadiyah.formLabel}</p>
              <div className="grid grid-cols-3 gap-2" role="group" aria-label="Choose an amount">
                {hadiyah.amounts.map(({ value, label, badge }) => {
                  const selected = amount === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAmount(value)}
                      aria-pressed={selected}
                      className={`relative flex flex-col items-center justify-center min-h-[64px] rounded-2xl border-2 text-[20px] font-semibold transition-all duration-200 ${
                        selected
                          ? 'bg-sage-700 border-sage-700 text-cream-50 shadow-md'
                          : 'bg-cream-100 border-transparent text-warm-800 hover:border-sage-500/50'
                      }`}
                    >
                      {label}
                      {badge && (
                        <span className={`text-[10px] uppercase tracking-[0.14em] font-semibold ${selected ? 'text-cream-200' : 'text-sage-600'}`}>
                          {badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <label htmlFor="price-b" className="block text-center text-[13px] text-warm-500">
                {hadiyah.customLabel}
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[20px] text-warm-400" aria-hidden="true">£</span>
                <input
                  id="price-b"
                  type="number"
                  name="price"
                  required
                  min="1.00"
                  step="0.01"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full py-4 pl-10 pr-4 text-center text-[22px] font-medium rounded-2xl bg-cream-100 border-2 border-transparent text-warm-900 focus:outline-none focus:border-sage-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[56px] rounded-full bg-sage-700 text-cream-50 text-[17px] font-semibold hover:bg-sage-600 transition-colors duration-300 shadow-[0_12px_30px_-12px_rgba(74,88,80,0.8)]"
              >
                {hadiyah.cta}
              </button>
              <p className="text-center text-[13px] text-warm-600">{hadiyah.small}</p>
              <p className="text-center text-[12px] leading-snug text-warm-400">{hadiyah.secure}</p>
            </motion.form>

            <motion.div {...reveal} className="mt-12 max-w-xl mx-auto">
              <p className={`${EYEBROW} text-cream-300 text-center mb-5`}>{hadiyah.includesTitle}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {hadiyah.includes.map((x) => (
                  <li key={x} className="flex gap-3 items-start rounded-2xl bg-cream-50/[0.06] border border-cream-50/10 p-4 text-[15px] leading-[1.55] text-cream-50">
                    <Check className="w-4 h-4 mt-1 text-cream-300 flex-shrink-0" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 sm:py-32">
          <div className="max-w-2xl mx-auto px-5 sm:px-8">
            <SectionHead title={faq.title} />
            <motion.div {...reveal} className="space-y-3">
              {faq.items.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl bg-cream-100 border border-warm-200 open:bg-white transition-colors">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-medium text-[17px] text-warm-900">
                    {q}
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-cream-50 border border-warm-200 flex-shrink-0">
                      <ChevronDown className="w-4 h-4 text-sage-600 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-[16px] text-warm-600 text-pretty">{a}</p>
                </details>
              ))}
            </motion.div>
            <motion.div {...reveal} className="mt-16 text-center">
              <Star className="w-4 h-4 mx-auto text-sage-500" />
              <p className="mt-5 font-cormorant italic text-[26px] leading-[1.35] text-warm-900 text-balance">{faq.closing}</p>
              <Pill className="mt-8">{hadiyah.cta}</Pill>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-cream-100 border-t border-warm-200 pt-14 pb-28 lg:pb-14 text-center">
        <Star className="w-4 h-4 mx-auto text-sage-500" />
        <p className="mt-4 font-cormorant font-medium text-[28px] text-warm-900">Briggs&rsquo; Book Club</p>
        <p className="font-cormorant italic text-[19px] text-warm-600">{hero.motto}</p>
        <nav aria-label="Footer" className="mt-6 flex justify-center gap-8 text-[14px] text-warm-600">
          <Link to="/hadiyah" className="hover:text-sage-700 transition-colors">Hadiyah</Link>
          <Link to="/umrah" className="hover:text-sage-700 transition-colors">Umrah</Link>
        </nav>
        <p className="mt-6 text-[12px] text-warm-500">&copy; {new Date().getFullYear()} Briggs&rsquo; Book Club</p>
      </footer>

      {/* Mobile persistent call to action */}
      <AnimatePresence>
        {showSticky && (
          <motion.a
            href="#join"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed bottom-4 inset-x-4 z-50 flex items-center justify-between gap-3 min-h-[60px] pl-6 pr-2 rounded-full bg-sage-700 text-cream-50 shadow-[0_20px_40px_-12px_rgba(28,25,23,0.6)]"
          >
            <span className="text-[14px] text-cream-200">Pay what you can</span>
            <span className="inline-flex items-center min-h-[46px] px-6 rounded-full bg-cream-50 text-sage-700 text-[15px] font-semibold">
              Take your seat
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
