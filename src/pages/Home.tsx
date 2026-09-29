import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { Rich, Saw } from '../components/Rich';
import {
  Accordion,
  ArchCard,
  ArchFrame,
  Badge,
  ButtonLink,
  Card,
  ChainLine,
  CheckList,
  Chip,
  Eyebrow,
  HadiyahForm,
  QuoteBand,
  Section,
  SectionHeader,
  SiteFooter,
  SiteNav,
  Star,
  StatCircles,
  StepRow,
  StickyJoin,
  enter,
  reveal,
} from '../design-system';
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
} from '../content/home';

const NAV_LINKS = [
  { href: '#chain', label: 'The Chain' },
  { href: '#reading', label: 'The Texts' },
  { href: '#guide', label: 'Your Teacher' },
  { href: '#faq', label: 'Questions' },
];

export default function Home() {
  return (
    <div className="font-body [font-variant-numeric:lining-nums] bg-surface text-ink-body text-body antialiased">
      <SiteNav heroId="top" links={NAV_LINKS} cta={hero.cta} />

      <main id="main">
        {/* Hero */}
        <header id="top" className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden bg-ink">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            src={IMAGES.manuscripts}
            alt="A scholar reading among centuries-old manuscripts"
            width={1280}
            height={853}
            className="absolute inset-0 w-full h-full object-cover object-[58%_30%]"
            {...{ fetchpriority: 'high' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/60 to-ink/95" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(28,25,23,0.55)_75%)]"
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl mx-auto px-5 sm:px-8 pt-28 pb-14 sm:py-32 text-center">
            <motion.div {...enter(0.2, 0)}>
              <Eyebrow tone="dark" stars>
                {hero.eyebrow}
              </Eyebrow>
            </motion.div>
            <motion.h1
              {...enter(0.3, 24)}
              className="mt-6 font-display font-medium text-display-2xl text-on-dark text-balance"
            >
              {hero.lead}
            </motion.h1>
            <motion.p
              {...enter(0.5)}
              className="mt-7 max-w-2xl mx-auto text-body-lg text-on-dark-body/90 text-pretty"
            >
              {hero.body}
            </motion.p>
            <motion.div {...enter(0.65)} className="mt-9 flex flex-col items-center gap-3">
              <ButtonLink href="#join" variant="light" className="w-full sm:w-auto">
                {hero.cta}
              </ButtonLink>
              <p className="text-[14px] text-on-dark-muted">{hero.reassurance}</p>
            </motion.div>
            <motion.aside
              {...enter(0.85)}
              aria-label={hero.newLabel}
              className="mt-10 sm:mt-12 max-w-xl mx-auto rounded-tile border border-on-dark/20 bg-ink/40 backdrop-blur-md px-5 py-4 text-left flex gap-4 items-start"
            >
              <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-on-dark/10 border border-on-dark/25 grid place-items-center">
                <Star className="w-3.5 h-3.5 text-on-dark-muted" />
              </span>
              <p className="text-body-sm text-on-dark-body">
                <span className="block mb-1 font-body uppercase text-[11px] tracking-[0.24em] font-medium text-on-dark-subtle">
                  {hero.newLabel}
                </span>
                <span className="font-display text-[19px] font-semibold text-on-dark">{hero.newBefore}</span>{' '}
                <Saw className="text-[18px]" /> {hero.newAfter}
              </p>
            </motion.aside>
          </div>
        </header>

        {/* Brand and motto */}
        <div className="py-14 sm:py-20 text-center border-b border-line">
          <p className="font-display text-[clamp(2.125rem,1.2vw+1.8rem,2.75rem)] font-medium text-ink">{hero.title}</p>
          <p className="mt-3 flex items-center justify-center gap-4 sm:gap-6 font-display italic text-lead text-accent-deep">
            Read.
            <Star className="w-2.5 h-2.5 text-accent-soft" />
            Reflect.
            <Star className="w-2.5 h-2.5 text-accent-soft" />
            Remember.
          </p>
        </div>

        {/* 01 The Chain */}
        <Section id="chain" width="narrow">
          <SectionHeader num={chain.num} title={chain.title} />
          <motion.div {...reveal} className="space-y-6 text-center text-body-lg text-pretty">
            <p className="font-display text-lead text-ink">
              <Rich text={chain.paragraphs[0]} />
            </p>
            <p>{chain.paragraphs[1]}</p>
            <p className="text-ink font-medium">{chain.paragraphs[2]}</p>
          </motion.div>
          <motion.div {...reveal} className="mt-16">
            <ChainLine stations={chain.stations} label="The chain of transmission, from Madina to you" />
          </motion.div>
        </Section>

        {/* 02 Who this circle is for */}
        <Section id="for" tone="alt" width="wide">
          <SectionHeader num={whoFor.num} title={whoFor.title} />
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...reveal} className="md:col-span-5">
              <ArchFrame src={IMAGES.manuscripts} alt="" position="48% 35%" offset="alt" />
            </motion.div>
            <motion.div {...reveal} className="md:col-span-7">
              <p className="font-display italic text-lead text-ink mb-5">{whoFor.intro}</p>
              <CheckList items={whoFor.items} />
              <p className="mt-8 font-display italic text-[21px] leading-[1.5] text-ink-muted text-pretty">{whoFor.notFor}</p>
            </motion.div>
          </div>
        </Section>

        {/* 03 What we believe */}
        <Section id="believe" className="pt-24 sm:pt-32 pb-20">
          <SectionHeader num={believe.num} title={believe.title} />
          <motion.div {...reveal} className="grid sm:grid-cols-3 gap-5">
            {believe.pillars.map(({ word, line }) => (
              <ArchCard key={word}>
                <p className="mt-5 font-display font-medium text-display-md text-ink">{word}</p>
                <p className="mt-3 text-body-sm sm:text-body text-ink-muted">{line}</p>
              </ArchCard>
            ))}
          </motion.div>
          <motion.div {...reveal} className="mt-14 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <Eyebrow muted className="mb-4">
                This isn&rsquo;t
              </Eyebrow>
              <ul className="flex flex-wrap justify-center gap-2">
                {believe.isnt.map((x) => (
                  <li key={x}>
                    <Chip variant="outline">{x}</Chip>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow className="mb-4">This is</Eyebrow>
              <ul className="flex flex-wrap justify-center gap-2">
                {believe.is.map((x) => (
                  <li key={x}>
                    <Chip variant="soft">{x}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Section>

        <QuoteBand>&ldquo;{believe.quote}&rdquo;</QuoteBand>

        {/* 04 What we're reading */}
        <Section id="reading" width="wide">
          <SectionHeader num={reading.num} title={reading.title} sub={reading.subtitle} />

          <motion.article {...reveal}>
            <Card tone="ink" texture={IMAGES.manuscripts}>
              <div className="p-7 sm:p-12 lg:p-16">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{reading.beginning.status}</Badge>
                  <Eyebrow tone="dark" muted className="text-[11px]">
                    {hero.newLabel}
                  </Eyebrow>
                </div>
                <h3 className="mt-6 font-display font-medium text-display-xl text-on-dark">{reading.beginning.title}</h3>
                <p className="mt-3 font-display italic text-[clamp(1.25rem,0.4vw+1.15rem,1.375rem)] text-on-dark-subtle">
                  {reading.beginning.fullTitle}
                </p>
                <p className="mt-2 text-body text-on-dark-body">
                  <Rich text={reading.beginning.subtitle} />
                </p>

                <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14">
                  <div className="space-y-5 text-body leading-[1.8] text-on-dark-body/90 text-pretty">
                    {reading.beginning.paragraphs.map((p, i) => (
                      <p key={i}>
                        <Rich text={p} />
                      </p>
                    ))}
                  </div>
                  <Card tone="raised" className="self-start">
                    <div className="p-7 sm:p-9">
                      <Badge variant="soft" icon>
                        First time in English
                      </Badge>
                      <h4 className="mt-4 font-display font-medium text-display-sm text-ink">
                        {reading.beginning.commentaryTitle}
                      </h4>
                      <div className="mt-4 space-y-4 text-body leading-[1.75] text-pretty">
                        {reading.beginning.commentary.map((p, i) => (
                          <p key={i} className={i === 1 ? 'text-ink font-medium' : ''}>
                            <Rich text={p} />
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </motion.article>

          <motion.article {...reveal} className="mt-6">
            <Card tone="alt">
              <div className="p-7 sm:p-12 grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5">
                  <Badge variant="outline">{reading.continuing.status}</Badge>
                  <h3 className="mt-5 font-display font-medium text-display-md text-ink">{reading.continuing.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="font-display italic text-[22px] leading-snug text-accent-deep">{reading.continuing.subtitle}</p>
                  <p className="mt-2 text-ink-muted">{reading.continuing.body}</p>
                </div>
              </div>
            </Card>
          </motion.article>
        </Section>

        {/* 05 How a sitting works */}
        <Section id="sitting" tone="alt">
          <SectionHeader num={sitting.num} title={sitting.title} />
          <motion.p {...reveal} className="text-center font-display italic text-lead-lg text-ink max-w-2xl mx-auto text-balance">
            {sitting.lead}
          </motion.p>
          <motion.p {...reveal} className="mt-6 text-center max-w-2xl mx-auto text-body-lg text-pretty">
            <Rich text={sitting.body} />
          </motion.p>
          <motion.div {...reveal} className="mt-16">
            <StepRow steps={sitting.steps} />
          </motion.div>
          <motion.p {...reveal} className="mt-14 flex justify-center">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-line text-body-sm text-ink-body">
              <PlayCircle className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
              {sitting.footnote}
            </span>
          </motion.p>
        </Section>

        {/* 06 The guide */}
        <Section id="guide" width="wide">
          <SectionHeader num={guide.num} title={guide.title} />
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...reveal} className="md:col-span-5">
              <ArchFrame src={IMAGES.shaykh} alt="Shaykh Mustafa Briggs teaching" position="42% 30%" raised />
            </motion.div>
            <motion.div {...reveal} className="md:col-span-7">
              <Eyebrow>Your teacher</Eyebrow>
              <h3 className="mt-3 font-display font-medium text-display-lg text-ink">{guide.name}</h3>
              <div className="mt-6 space-y-5 text-body-lg text-pretty">
                {guide.paragraphs.map((p, i) => (
                  <p key={i} className={i === 1 ? 'text-ink font-medium' : ''}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {guide.credentials.map((c) => (
                  <li key={c}>
                    <Chip>{c}</Chip>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        {/* 07 The company you keep */}
        <Section id="company" tone="alt" width="narrow">
          <SectionHeader num={company.num} title={company.title} />
          <motion.p {...reveal} className="text-center font-display italic text-lead-lg text-ink text-balance">
            <Rich text={company.lead} />
          </motion.p>
          <motion.div {...reveal} className="mt-14">
            <StatCircles stats={company.stats} />
          </motion.div>
          <motion.p {...reveal} className="mt-12 text-center text-body-lg">
            {company.closing}
          </motion.p>
        </Section>

        {/* 08 The hadiyah */}
        <Section id="join" tone="accent" width="narrow" decorated>
          <SectionHeader num={hadiyah.num} title={hadiyah.title} />
          <motion.div {...reveal} className="text-center space-y-8 text-body-lg text-pretty">
            <p>
              <Rich text={hadiyah.intro} />
            </p>
            <figure>
              <p className="font-arabic text-[clamp(2.5rem,2vw+1.9rem,3.375rem)] leading-[1.8] text-on-dark" dir="rtl" lang="ar">
                {hadiyah.arabic}
              </p>
              <figcaption className="font-display italic text-[24px] text-on-dark-muted">&ldquo;{hadiyah.translation}&rdquo;</figcaption>
            </figure>
            <p className="text-on-dark">{hadiyah.body}</p>
          </motion.div>

          <div className="mt-12">
            <HadiyahForm
              action={CHECKOUT_URL}
              plan={CHECKOUT_PLAN}
              title={hadiyah.formLabel}
              amounts={hadiyah.amounts}
              customLabel={hadiyah.customLabel}
              cta={hadiyah.cta}
              small={hadiyah.small}
              secure={hadiyah.secure}
            />
          </div>

          <motion.div {...reveal} className="mt-12 max-w-xl mx-auto">
            <Eyebrow tone="dark" muted className="text-center mb-5">
              {hadiyah.includesTitle}
            </Eyebrow>
            <CheckList tone="dark" items={hadiyah.includes} />
          </motion.div>
        </Section>

        {/* Questions */}
        <Section id="faq" width="reading">
          <SectionHeader title={faq.title} />
          <motion.div {...reveal}>
            <Accordion items={faq.items} />
          </motion.div>
          <motion.div {...reveal} className="mt-16 text-center">
            <Star className="w-4 h-4 mx-auto text-accent-soft" />
            <p className="mt-5 font-display italic text-lead text-ink text-balance">{faq.closing}</p>
            <ButtonLink href="#join" className="mt-8">
              {hadiyah.cta}
            </ButtonLink>
          </motion.div>
        </Section>
      </main>

      <SiteFooter
        motto={hero.motto}
        links={[
          { to: '/hadiyah', label: 'Hadiyah' },
          { to: '/umrah', label: 'Umrah' },
        ]}
      />

      <StickyJoin heroId="top" joinId="join" note="Pay what you can" cta={hero.cta} />
    </div>
  );
}
