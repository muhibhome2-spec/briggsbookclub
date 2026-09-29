import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
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

// Concept A · The Manuscript. An editorial, book-like treatment: EB Garamond
// throughout, real small caps, hairline rules, margin chapter numerals.

const FONTS =
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap';

const SC = '[font-variant-caps:all-small-caps] tracking-[0.14em]';

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
} as const;

function Ornament({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-current opacity-40" />
      <span className="w-1.5 h-1.5 rotate-45 bg-current" />
      <span className="h-px w-10 bg-current opacity-40" />
    </span>
  );
}

function Button({ children, dark = false, className = '' }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <a
      href="#join"
      className={`group inline-flex items-center justify-center gap-3 min-h-[52px] px-8 text-[19px] rounded-[3px] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        dark
          ? 'bg-cream-50 text-sage-700 hover:bg-cream-200 focus-visible:ring-cream-50 focus-visible:ring-offset-sage-700'
          : 'bg-sage-700 text-cream-50 hover:bg-sage-600 focus-visible:ring-sage-600'
      } ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        &rarr;
      </span>
    </a>
  );
}

function Chapter({
  id,
  num,
  title,
  dark = false,
  className = '',
  children,
}: {
  id: string;
  num?: string;
  title: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 lg:py-32 border-t ${dark ? 'border-sage-600' : 'border-warm-200'} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <motion.header {...reveal} className="lg:col-span-4 mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-28">
            {num && (
              <>
                <p className={`${SC} text-[17px] ${dark ? 'text-cream-300' : 'text-sage-600'}`}>Chapter</p>
                <p
                  className={`text-[64px] lg:text-[112px] leading-none -ml-1 ${dark ? 'text-cream-300/70' : 'text-sage-600/80'}`}
                  aria-hidden="true"
                >
                  {num}
                </p>
              </>
            )}
            <h2
              className={`mt-3 text-[34px] lg:text-[42px] leading-[1.1] font-medium tracking-[-0.01em] text-balance ${
                dark ? 'text-cream-50' : 'text-warm-900'
              }`}
            >
              {num && <span className="sr-only">Chapter {num}: </span>}
              {title}
            </h2>
          </div>
        </motion.header>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export default function ConceptManuscript() {
  useConceptPage('Concept A · The Manuscript', FONTS);
  const [amount, setAmount] = useState('10');
  const showSticky = useStickyCta('top', 'join');

  return (
    <div className="font-garamond bg-cream-50 text-warm-800 text-[19px] sm:text-[20px] leading-[1.7] antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-warm-200" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-[22px] text-warm-900 tracking-[-0.01em]">
            Briggs&rsquo; Book Club
          </Link>
          <div className={`hidden lg:flex items-center gap-8 ${SC} text-[17px] text-warm-600`}>
            <a href="#chain" className="hover:text-sage-700 transition-colors">The Chain</a>
            <a href="#reading" className="hover:text-sage-700 transition-colors">The Texts</a>
            <a href="#guide" className="hover:text-sage-700 transition-colors">The Shaykh</a>
            <a href="#faq" className="hover:text-sage-700 transition-colors">Questions</a>
          </div>
          <a
            href="#join"
            className="inline-flex items-center min-h-[44px] px-5 rounded-[3px] border border-sage-700 text-sage-700 text-[17px] hover:bg-sage-700 hover:text-cream-50 transition-colors duration-300"
          >
            Take your seat
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <header id="top" className="lg:grid lg:grid-cols-12 lg:min-h-[calc(100svh-4rem)] border-b border-warm-200">
          <div className="relative lg:order-2 lg:col-span-6 p-3 sm:p-5 lg:p-6 lg:pl-0">
            <figure className="relative h-[34svh] min-h-[240px] lg:h-full overflow-hidden rounded-[2px]">
              <img
                src={IMAGES.manuscripts}
                alt="A scholar reading among centuries-old manuscripts"
                className="absolute inset-0 w-full h-full object-cover object-[60%_30%]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-warm-900/10 bg-gradient-to-t from-warm-900/50 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute left-4 bottom-3 italic text-[15px] text-cream-100/90 drop-shadow">
                Plate I. Manuscripts still read, still handed on.
              </figcaption>
            </figure>
          </div>

          <div className="lg:order-1 lg:col-span-6 flex items-center px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))] lg:pr-14 pt-10 pb-16 lg:py-20">
            <div className="max-w-[36rem]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`${SC} text-[18px] text-sage-600 mb-4`}
              >
                {hero.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-[56px] sm:text-[72px] lg:text-[88px] leading-[0.95] font-medium tracking-[-0.025em] text-warm-900"
              >
                Briggs&rsquo; Book&nbsp;Club
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 italic text-[26px] sm:text-[30px] leading-[1.25] text-sage-700 text-balance"
              >
                {hero.lead}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-5 text-warm-700 text-pretty"
              >
                {hero.body}
              </motion.p>
              <motion.aside
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-7 border-l-2 border-sage-500 pl-5"
              >
                <p className={`${SC} text-[16px] text-sage-700`}>{hero.newLabel}</p>
                <p className="text-[18px] leading-[1.6] text-warm-800">
                  <em>{hero.newBefore}</em> <Saw /> {hero.newAfter}
                </p>
              </motion.aside>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
              >
                <Button>{hero.cta}</Button>
                <p className="italic text-[17px] text-warm-500 text-center sm:text-left">{hero.reassurance}</p>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Motto band */}
        <div className="bg-cream-100 py-9 sm:py-12">
          <p className="flex items-center justify-center gap-4 sm:gap-8 italic text-[24px] sm:text-[34px] text-warm-900">
            <span>Read.</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-sage-500" aria-hidden="true" />
            <span>Reflect.</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-sage-500" aria-hidden="true" />
            <span>Remember.</span>
          </p>
        </div>

        {/* 01 The Chain */}
        <Chapter id="chain" num={chain.num} title={chain.title}>
          <motion.div {...reveal} className="max-w-[40rem] space-y-6 text-pretty">
            {chain.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:float-left first-letter:text-[4.6em] first-letter:leading-[0.78] first-letter:mr-3 first-letter:mt-[0.08em] first-letter:text-sage-700'
                    : i === 2
                    ? 'text-warm-900'
                    : ''
                }
              >
                <Rich text={p} />
              </p>
            ))}
          </motion.div>

          <motion.ol {...reveal} className="relative grid grid-cols-5 mt-14 max-w-[40rem]" aria-label="The chain of transmission">
            <span className="absolute top-[7px] left-[10%] right-[10%] h-px bg-warm-300" aria-hidden="true" />
            {chain.stations.map((s, i) => {
              const last = i === chain.stations.length - 1;
              return (
                <li key={s} className="relative flex flex-col items-center text-center">
                  <span
                    className={`w-[15px] h-[15px] rotate-45 border ${
                      last ? 'bg-sage-700 border-sage-700 ring-4 ring-sage-600/15' : 'bg-cream-50 border-sage-600'
                    }`}
                    aria-hidden="true"
                  />
                  <span className={`mt-3 ${SC} text-[15px] sm:text-[17px] ${last ? 'text-sage-700 font-semibold' : 'text-warm-600'}`}>
                    {s}
                  </span>
                </li>
              );
            })}
          </motion.ol>
        </Chapter>

        {/* 02 Who this circle is for */}
        <Chapter id="for" num={whoFor.num} title={whoFor.title} className="bg-cream-100">
          <motion.div {...reveal} className="max-w-[40rem]">
            <p className="italic text-[26px] text-warm-900 mb-4">{whoFor.intro}</p>
            <ul className="border-t border-warm-300">
              {whoFor.items.map((item) => (
                <li key={item} className="flex gap-5 py-4 border-b border-warm-300 text-[20px] sm:text-[21px] text-warm-800">
                  <span className="mt-[0.7em] w-1.5 h-1.5 rotate-45 bg-sage-600 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 italic text-warm-600 text-pretty">{whoFor.notFor}</p>
          </motion.div>
        </Chapter>

        {/* 03 What we believe */}
        <Chapter id="believe" num={believe.num} title={believe.title}>
          <motion.div {...reveal} className="grid sm:grid-cols-3 border-y border-warm-300 sm:divide-x divide-y sm:divide-y-0 divide-warm-300">
            {believe.pillars.map(({ word, line }) => (
              <div key={word} className="py-7 sm:px-6 first:sm:pl-0">
                <p className="text-[40px] leading-none text-warm-900">{word}</p>
                <p className="mt-3 italic text-[18px] leading-[1.5] text-warm-600">{line}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...reveal} className="grid grid-cols-2 gap-8 mt-12 max-w-[40rem]">
            <div>
              <p className={`${SC} text-[17px] text-warm-500 mb-3`}>This isn&rsquo;t</p>
              <ul className="space-y-2 text-warm-500">
                {believe.isnt.map((x) => (
                  <li key={x} className="line-through decoration-warm-400/70 decoration-1">{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`${SC} text-[17px] text-sage-700 mb-3`}>This is</p>
              <ul className="space-y-2 text-warm-900">
                {believe.is.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.figure {...reveal} className="mt-16 lg:mt-20 text-center text-sage-600">
            <Ornament />
            <blockquote className="my-7 italic text-[30px] sm:text-[38px] leading-[1.3] text-warm-900 text-balance max-w-[36rem] mx-auto">
              &ldquo;{believe.quote}&rdquo;
            </blockquote>
            <Ornament />
          </motion.figure>
        </Chapter>

        {/* 04 What we're reading */}
        <Chapter id="reading" num={reading.num} title={reading.title} className="bg-cream-100">
          <motion.p {...reveal} className="italic text-[26px] text-warm-900 mb-10">
            {reading.subtitle}
          </motion.p>

          <motion.article {...reveal} className="relative bg-cream-50 border border-warm-300 p-7 sm:p-10 lg:p-12">
            <span className="pointer-events-none absolute inset-2 border border-warm-200" aria-hidden="true" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`${SC} text-[15px] bg-sage-700 text-cream-50 px-3 py-0.5 rounded-[2px]`}>
                  {reading.beginning.status}
                </span>
                <span className={`${SC} text-[15px] text-sage-700`}>{hero.newLabel}</span>
              </div>
              <h3 className="text-[44px] sm:text-[56px] leading-[1] font-medium tracking-[-0.02em] text-warm-900">
                {reading.beginning.title}
              </h3>
              <p className="mt-3 italic text-[19px] text-warm-500">{reading.beginning.fullTitle}</p>
              <p className="mt-4 text-[22px] text-sage-700">
                <Rich text={reading.beginning.subtitle} />
              </p>
              <div className="my-8 h-px bg-warm-300" aria-hidden="true" />
              <div className="lg:columns-2 lg:gap-10 text-[18px] leading-[1.7] text-pretty">
                {reading.beginning.paragraphs.map((p, i) => (
                  <p key={i} className="mb-5">
                    <Rich text={p} />
                  </p>
                ))}
              </div>

              <div className="mt-6 bg-sage-700 text-cream-100 p-6 sm:p-8 rounded-[2px]">
                <p className={`${SC} text-[15px] text-cream-300`}>First time in English</p>
                <h4 className="mt-1 text-[28px] leading-tight text-cream-50">{reading.beginning.commentaryTitle}</h4>
                <div className="mt-4 space-y-4 text-[18px] leading-[1.7]">
                  {reading.beginning.commentary.map((p, i) => (
                    <p key={i}>
                      <Rich text={p} />
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article {...reveal} className="mt-8 border border-warm-300 p-7 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="sm:w-2/5">
              <span className={`${SC} text-[15px] border border-sage-600 text-sage-700 px-3 py-0.5 rounded-[2px]`}>
                {reading.continuing.status}
              </span>
              <h3 className="mt-5 text-[36px] leading-[1.05] text-warm-900">{reading.continuing.title}</h3>
            </div>
            <div className="sm:w-3/5">
              <p className="italic text-[20px] text-sage-700">{reading.continuing.subtitle}</p>
              <p className="mt-3 text-[18px] text-warm-700">{reading.continuing.body}</p>
            </div>
          </motion.article>
        </Chapter>

        {/* 05 How a sitting works */}
        <Chapter id="sitting" num={sitting.num} title={sitting.title}>
          <motion.p {...reveal} className="italic text-[28px] sm:text-[32px] leading-[1.3] text-warm-900 max-w-[36rem] text-balance">
            {sitting.lead}
          </motion.p>
          <motion.p {...reveal} className="mt-6 max-w-[40rem] text-pretty">
            <Rich text={sitting.body} />
          </motion.p>
          <motion.ol {...reveal} className="mt-12 grid sm:grid-cols-3 gap-8 sm:gap-10">
            {sitting.steps.map((s, i) => (
              <li key={s.label} className="border-t border-warm-900 pt-4">
                <p className="text-[34px] leading-none text-sage-600 italic">{['i', 'ii', 'iii'][i]}.</p>
                <p className={`mt-3 ${SC} text-[18px] text-warm-900`}>{s.label}</p>
                <p className="mt-1 text-[18px] leading-[1.6] text-warm-600">{s.text}</p>
              </li>
            ))}
          </motion.ol>
          <motion.p {...reveal} className="mt-12 pt-5 border-t border-warm-200 italic text-[18px] text-warm-600">
            {sitting.footnote}
          </motion.p>
        </Chapter>

        {/* 06 The guide */}
        <Chapter id="guide" num={guide.num} title={guide.title} className="bg-cream-100">
          <motion.div {...reveal} className="grid md:grid-cols-5 gap-8 md:gap-10">
            <figure className="md:col-span-2">
              <div className="p-2 bg-cream-50 border border-warm-300">
                <img
                  src={IMAGES.shaykh}
                  alt="Shaykh Mustafa Briggs teaching"
                  className="w-full aspect-[4/5] object-cover object-[45%_30%]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 italic text-[16px] text-warm-500">Plate II. Shaykh Mustafa at a sitting.</figcaption>
            </figure>
            <div className="md:col-span-3">
              <h3 className="text-[34px] leading-tight text-warm-900">{guide.name}</h3>
              <div className="mt-4 space-y-5 text-pretty">
                {guide.paragraphs.map((p, i) => (
                  <p key={i} className={i === 1 ? 'text-warm-900' : ''}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>
              <ul className={`mt-8 pt-5 border-t border-warm-300 flex flex-wrap gap-x-6 gap-y-2 ${SC} text-[16px] text-sage-700`}>
                {guide.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Chapter>

        {/* 07 The company you keep */}
        <Chapter id="company" num={company.num} title={company.title}>
          <motion.p {...reveal} className="italic text-[26px] sm:text-[28px] leading-[1.35] text-warm-900 max-w-[38rem] text-balance">
            <Rich text={company.lead} />
          </motion.p>
          <motion.dl {...reveal} className="mt-12 grid grid-cols-3 border-y border-warm-300 divide-x divide-warm-300">
            {company.stats.map((s) => (
              <div key={s.label} className="py-7 px-2 sm:px-6 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[28px] sm:text-[44px] leading-none text-warm-900">{s.value}</dd>
                <dd className={`mt-2 ${SC} text-[14px] sm:text-[16px] text-warm-500`}>{s.label}</dd>
              </div>
            ))}
          </motion.dl>
          <motion.p {...reveal} className="mt-10 max-w-[40rem]">
            {company.closing}
          </motion.p>
        </Chapter>

        {/* 08 The hadiyah */}
        <Chapter id="join" num={hadiyah.num} title={hadiyah.title} dark className="bg-sage-700 text-cream-100">
          <div className="grid gap-12">
            <motion.div {...reveal} className="max-w-[40rem] space-y-6 text-pretty">
              <p>
                <Rich text={hadiyah.intro} />
              </p>
              <figure className="py-4 text-center border-y border-cream-50/15">
                <p className="font-arabic text-[34px] sm:text-[42px] leading-[1.9] text-cream-50" dir="rtl" lang="ar">
                  {hadiyah.arabic}
                </p>
                <figcaption className="italic text-[20px] text-cream-200">&ldquo;{hadiyah.translation}&rdquo;</figcaption>
              </figure>
              <p className="text-cream-50">{hadiyah.body}</p>
            </motion.div>

            <motion.div {...reveal} className="grid md:grid-cols-2 gap-10 items-start">
              <form
                action={CHECKOUT_URL}
                method="get"
                className="relative bg-cream-50 text-warm-800 p-7 sm:p-8 rounded-[2px] shadow-[0_30px_60px_-20px_rgba(28,25,23,0.5)]"
              >
                <span className="pointer-events-none absolute inset-2 border border-warm-200" aria-hidden="true" />
                <div className="relative space-y-5">
                  <input type="hidden" name="plan" value={CHECKOUT_PLAN} />
                  <p className={`${SC} text-[17px] text-sage-700 text-center`}>{hadiyah.formLabel}</p>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label="Choose an amount">
                    {hadiyah.amounts.map(({ value, label, badge }) => {
                      const selected = amount === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setAmount(value)}
                          aria-pressed={selected}
                          className={`flex flex-col items-center justify-center min-h-[64px] rounded-[2px] border transition-colors duration-200 ${
                            selected
                              ? 'bg-sage-700 border-sage-700 text-cream-50'
                              : 'bg-cream-50 border-warm-300 text-warm-900 hover:border-sage-600'
                          }`}
                        >
                          <span className="text-[26px] leading-none">{label}</span>
                          {badge && (
                            <span className={`${SC} text-[13px] leading-none mt-1 ${selected ? 'text-cream-200' : 'text-sage-600'}`}>
                              {badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <label htmlFor="price-a" className="block text-center italic text-[16px] text-warm-500">
                    {hadiyah.customLabel}
                  </label>
                  <div className="relative border-b-2 border-warm-300 focus-within:border-sage-600 transition-colors">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[26px] text-warm-500" aria-hidden="true">
                      £
                    </span>
                    <input
                      id="price-a"
                      type="number"
                      name="price"
                      required
                      min="1.00"
                      step="0.01"
                      inputMode="decimal"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-transparent py-3 text-center text-[30px] text-warm-900 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full min-h-[56px] bg-sage-700 text-cream-50 text-[21px] rounded-[2px] hover:bg-sage-600 transition-colors duration-300 inline-flex items-center justify-center gap-3"
                  >
                    {hadiyah.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                  </button>
                  <p className="text-center text-[15px] text-warm-600">{hadiyah.small}</p>
                  <p className="text-center text-[14px] leading-snug text-warm-500">{hadiyah.secure}</p>
                </div>
              </form>

              <div>
                <p className={`${SC} text-[17px] text-cream-300 mb-4`}>{hadiyah.includesTitle}</p>
                <ul className="border-t border-cream-50/15">
                  {hadiyah.includes.map((x) => (
                    <li key={x} className="flex gap-4 py-4 border-b border-cream-50/15 text-[19px] text-cream-50">
                      <span className="mt-[0.65em] w-1.5 h-1.5 rotate-45 bg-cream-300 flex-shrink-0" aria-hidden="true" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Chapter>

        {/* FAQ */}
        <Chapter id="faq" title={faq.title}>
          <motion.div {...reveal} className="border-t border-warm-300">
            {faq.items.map(({ q, a }) => (
              <details key={q} className="group border-b border-warm-300">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[22px] text-warm-900 hover:text-sage-700 transition-colors">
                  {q}
                  <Plus className="w-5 h-5 text-sage-600 flex-shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="pb-6 pr-10 text-[19px] text-warm-700 text-pretty">{a}</p>
              </details>
            ))}
          </motion.div>
          <motion.div {...reveal} className="mt-14 text-center sm:text-left">
            <p className="italic text-[22px] text-warm-700 max-w-[34rem] text-balance">{faq.closing}</p>
            <Button className="mt-6">{hadiyah.cta}</Button>
          </motion.div>
        </Chapter>
      </main>

      <footer className="bg-cream-100 border-t border-warm-200 py-14 pb-28 lg:pb-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[26px] text-warm-900">Briggs&rsquo; Book Club</p>
            <p className="italic text-warm-600">{hero.motto}</p>
          </div>
          <nav aria-label="Footer" className={`flex gap-8 ${SC} text-[17px] text-warm-600`}>
            <Link to="/hadiyah" className="hover:text-sage-700 transition-colors">Hadiyah</Link>
            <Link to="/umrah" className="hover:text-sage-700 transition-colors">Umrah</Link>
            <span>&copy; {new Date().getFullYear()}</span>
          </nav>
        </div>
      </footer>

      {/* Mobile persistent call to action */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-cream-50/95 backdrop-blur-md border-t border-warm-300 px-4 py-3 flex items-center justify-between gap-4"
          >
            <p className="italic text-[16px] leading-tight text-warm-600">Pay what you can.<br />Cancel anytime.</p>
            <a href="#join" className="inline-flex items-center min-h-[48px] px-6 bg-sage-700 text-cream-50 text-[18px] rounded-[3px]">
              Take your seat &rarr;
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
