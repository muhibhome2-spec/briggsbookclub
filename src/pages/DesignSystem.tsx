import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
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
  Khatam,
  QuoteBand,
  Section,
  SectionHeader,
  Star,
  StatCircles,
  StepRow,
} from '../design-system';
import { Saw } from '../components/Rich';
import { usePrivatePage } from '../hooks/usePrivatePage';
import { CHECKOUT_PLAN, IMAGES, hadiyah } from '../content/home';

// Living reference for the Sanctuary design system. Everything on this page
// renders the real components, so it cannot drift from the site.

const ROLES: { group: string; items: { token: string; hex: string; from: string; dark?: boolean }[] }[] = [
  {
    group: 'Surface',
    items: [
      { token: 'surface', hex: '#fdfcfa', from: 'cream-50' },
      { token: 'surface-alt', hex: '#faf8f4', from: 'cream-100' },
      { token: 'surface-sunk', hex: '#f5f1e8', from: 'cream-200' },
    ],
  },
  {
    group: 'Ink',
    items: [
      { token: 'ink', hex: '#1c1917', from: 'warm-900', dark: true },
      { token: 'ink-body', hex: '#44403c', from: 'warm-700', dark: true },
      { token: 'ink-muted', hex: '#57534e', from: 'warm-600', dark: true },
      { token: 'ink-subtle', hex: '#78716c', from: 'warm-500', dark: true },
    ],
  },
  {
    group: 'Line',
    items: [
      { token: 'line', hex: '#e7e5e4', from: 'warm-200' },
      { token: 'line-strong', hex: '#d6d3d1', from: 'warm-300' },
    ],
  },
  {
    group: 'Accent',
    items: [
      { token: 'accent-tint', hex: '#e8ece9', from: 'sage-100' },
      { token: 'accent-soft', hex: '#7c9082', from: 'sage-500', dark: true },
      { token: 'accent', hex: '#5d6f63', from: 'sage-600', dark: true },
      { token: 'accent-deep', hex: '#4a5850', from: 'sage-700', dark: true },
    ],
  },
  {
    group: 'On dark',
    items: [
      { token: 'on-dark', hex: '#fdfcfa', from: 'cream-50' },
      { token: 'on-dark-body', hex: '#faf8f4', from: 'cream-100' },
      { token: 'on-dark-muted', hex: '#f5f1e8', from: 'cream-200' },
      { token: 'on-dark-subtle', hex: '#ebe4d5', from: 'cream-300' },
    ],
  },
];

const TYPE: { token: string; spec: string; className: string; sample: string }[] = [
  { token: 'text-display-2xl', spec: 'Cormorant 500 · 48 to 92px · hero headline only', className: 'font-display font-medium text-display-2xl text-ink', sample: 'You were never too late.' },
  { token: 'text-display-xl', spec: 'Cormorant 500 · 48 to 72px · feature title', className: 'font-display font-medium text-display-xl text-ink', sample: 'Qurrat al-Abṣār' },
  { token: 'text-display-lg', spec: 'Cormorant 500 · 40 to 56px · section title', className: 'font-display font-medium text-display-lg text-ink', sample: 'The Company You Keep' },
  { token: 'text-display-md', spec: 'Cormorant 500 · 36 to 44px · card title, pillar', className: 'font-display font-medium text-display-md text-ink', sample: 'Masālik al-Jinān' },
  { token: 'text-display-sm', spec: 'Cormorant 500 · 26 to 32px · inset title, step', className: 'font-display font-medium text-display-sm text-ink', sample: 'A commentary that came by hand' },
  { token: 'text-lead-lg', spec: 'Cormorant italic · 26 to 36px · chapter lead', className: 'font-display italic text-lead-lg text-ink', sample: 'You only need to arrive.' },
  { token: 'text-lead', spec: 'Cormorant italic · 22 to 28px · subtitle, intro', className: 'font-display italic text-lead text-accent-deep', sample: 'Two texts, one circle.' },
  { token: 'text-body-lg', spec: 'Inter 400 · 17 to 19px · 1.75 · running text', className: 'text-body-lg text-ink-body', sample: 'Shaykh Mustafa reads the Arabic, then explains it in English, line by line.' },
  { token: 'text-body', spec: 'Inter 400 · 17px · 1.75 · cards, lists', className: 'text-body text-ink-body', sample: 'Every sitting is recorded and kept in the replay library.' },
  { token: 'text-body-sm', spec: 'Inter 400 · 15px · 1.6 · chips, secondary', className: 'text-body-sm text-ink-muted', sample: 'Pay what you can · Cancel anytime' },
  { token: 'text-caption', spec: 'Inter 400 · 13px · fine print', className: 'text-caption text-ink-subtle', sample: 'Takes about 60 seconds · Cancel anytime in two taps' },
  { token: 'text-eyebrow', spec: 'Inter 500 · 12px · 0.24em · uppercase', className: 'font-body uppercase text-eyebrow font-medium text-accent', sample: 'Chapter 04' },
];

function Block({ title, note, children }: { title: string; note?: ReactNode; children: ReactNode }) {
  return (
    <section className="py-14 border-t border-line">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <h2 className="font-display font-medium text-display-sm text-ink">{title}</h2>
          {note && <p className="mt-2 text-body-sm text-ink-muted">{note}</p>}
        </div>
        <div className="lg:col-span-9 min-w-0">{children}</div>
      </div>
    </section>
  );
}

export default function DesignSystem() {
  usePrivatePage('Sanctuary design system · Briggs’ Book Club');

  return (
    <div className="font-body [font-variant-numeric:lining-nums] bg-surface text-ink-body text-body antialiased">
      <header className="relative bg-accent-deep text-on-dark-body overflow-hidden">
        <Khatam className="absolute -right-24 -top-24 w-[28rem] h-[28rem] text-on-dark/10" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <Eyebrow tone="dark" muted>
            Briggs&rsquo; Book Club · Internal
          </Eyebrow>
          <h1 className="mt-4 font-display font-medium text-display-xl text-on-dark">The Sanctuary design system</h1>
          <p className="mt-5 max-w-2xl text-body-lg text-on-dark-body/90">
            A quiet, beautiful room. Two shapes from the photographs, the mihrab arch and the circle of the halaqa, and one
            ornament, the eight-point star. Everything below is the live component. Rules and usage are in{' '}
            <code className="text-on-dark">docs/design-system.md</code>.
          </p>
          <Link to="/" className="inline-block mt-6 text-body-sm text-on-dark-muted underline underline-offset-4 hover:text-on-dark">
            Back to the site
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-10">
        <Block title="Colour roles" note="Same brand hex values, named by job. Use the role, not the palette name, in new work.">
          <div className="space-y-6">
            {ROLES.map((g) => (
              <div key={g.group}>
                <Eyebrow muted className="mb-3">
                  {g.group}
                </Eyebrow>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {g.items.map((c) => (
                    <div key={c.token} className="rounded-tile border border-line overflow-hidden">
                      <div className="h-20" style={{ background: c.hex }} />
                      <div className="p-3">
                        <p className="text-body-sm font-medium text-ink">{c.token}</p>
                        <p className="text-caption text-ink-subtle">
                          {c.hex} · {c.from}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Type" note="Cormorant Garamond for display, Inter for reading, Amiri for Arabic and the honorific. Sizes are fluid.">
          <div className="space-y-7">
            {TYPE.map((t) => (
              <div key={t.token} className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                <div className="sm:col-span-4">
                  <p className="text-body-sm font-medium text-ink">{t.token}</p>
                  <p className="text-caption text-ink-subtle">{t.spec}</p>
                </div>
                <p className={`sm:col-span-8 ${t.className}`}>{t.sample}</p>
              </div>
            ))}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
              <div className="sm:col-span-4">
                <p className="text-body-sm font-medium text-ink">font-arabic</p>
                <p className="text-caption text-ink-subtle">Amiri · always with dir=&quot;rtl&quot; lang=&quot;ar&quot;</p>
              </div>
              <p className="sm:col-span-8 font-arabic text-[40px] leading-[1.8] text-ink" dir="rtl" lang="ar">
                {hadiyah.arabic}
              </p>
            </div>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
              <div className="sm:col-span-4">
                <p className="text-body-sm font-medium text-ink">&lt;Saw /&gt;</p>
                <p className="text-caption text-ink-subtle">The honorific, set in Amiri inside any text</p>
              </div>
              <p className="sm:col-span-8 text-body-lg">
                The Prophet <Saw /> taught through <em>suhbah</em>, companionship.
              </p>
            </div>
          </div>
        </Block>

        <Block title="Ornament" note="The star marks sections, eyebrows and the last station of the chain. The khatam is texture on dark sections only.">
          <div className="flex flex-wrap items-center gap-10">
            <Star className="w-4 h-4 text-accent-soft" />
            <Star className="w-8 h-8 text-accent" />
            <Star className="w-14 h-14 text-accent-deep" />
            <div className="w-40 h-40 rounded-panel bg-accent-deep grid place-items-center">
              <Khatam className="w-32 h-32 text-on-dark/30" />
            </div>
          </div>
        </Block>

        <Block title="Buttons" note="Always a pill. One phrase site-wide: Take your seat. lg is 54px tall, sm 44px.">
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#">Take your seat</ButtonLink>
            <ButtonLink href="#" variant="outline">
              Take your seat
            </ButtonLink>
            <ButtonLink href="#" size="sm">
              Take your seat
            </ButtonLink>
          </div>
          <div className="mt-5 p-8 rounded-panel bg-ink flex flex-wrap items-center gap-4">
            <ButtonLink href="#" variant="light">
              Take your seat
            </ButtonLink>
            <ButtonLink href="#" variant="outline-light" size="sm">
              Take your seat
            </ButtonLink>
          </div>
        </Block>

        <Block title="Badges and chips" note="Badges are uppercase status labels. Chips are sentence-case tags in a row.">
          <div className="flex flex-wrap items-center gap-3">
            <span className="p-2 rounded-full bg-ink">
              <Badge>Beginning</Badge>
            </span>
            <Badge variant="outline">Continuing</Badge>
            <Badge variant="soft" icon>
              First time in English
            </Badge>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Chip>50+ universities</Chip>
            <Chip variant="soft">A circle of sincerity</Chip>
            <Chip variant="outline">A class with homework</Chip>
          </div>
        </Block>

        <Block title="Arch" note="Portraits and the three pillars. Never on a photograph wider than it is tall.">
          <div className="grid sm:grid-cols-2 gap-8 items-start">
            <ArchFrame src={IMAGES.shaykh} alt="Shaykh Mustafa Briggs" position="42% 30%" raised />
            <ArchCard>
              <p className="mt-5 font-display font-medium text-display-md text-ink">Reflect</p>
              <p className="mt-3 text-body text-ink-muted">on what it asks of you.</p>
            </ArchCard>
          </div>
        </Block>

        <Block title="Cards" note="One ink feature card per section at most. Raised insets sit inside ink cards.">
          <Card tone="ink" texture={IMAGES.manuscripts}>
            <div className="p-8 sm:p-10 grid md:grid-cols-2 gap-8">
              <div>
                <Badge>Beginning</Badge>
                <p className="mt-5 font-display font-medium text-display-md text-on-dark">Feature card</p>
                <p className="mt-2 text-on-dark-body/90">Dark ink with the manuscripts photograph at 12% as texture.</p>
              </div>
              <Card tone="raised">
                <div className="p-6">
                  <p className="font-display font-medium text-display-sm text-ink">Raised inset</p>
                  <p className="mt-2">Paper on ink, for the one thing to notice.</p>
                </div>
              </Card>
            </div>
          </Card>
          <Card tone="alt" className="mt-5">
            <div className="p-8">
              <p className="font-display font-medium text-display-sm text-ink">Alt card</p>
              <p className="mt-2 text-ink-muted">Secondary content on a light section.</p>
            </div>
          </Card>
        </Block>

        <Block title="Lists" note="Check lists for who it is for and what a seat includes.">
          <CheckList items={['you don’t read Arabic, or you read it slowly', 'you want one still place in your week']} />
          <div className="mt-5 p-6 rounded-panel bg-accent-deep">
            <CheckList tone="dark" items={['The private WhatsApp community', 'Every live sitting, plus every replay']} />
          </div>
        </Block>

        <Block title="Circles" note="The halaqa: steps, stats and the chain of transmission.">
          <div className="space-y-14">
            <div className="rounded-panel bg-surface-alt p-8">
              <StepRow
                steps={[
                  { label: 'He reads', text: 'The Arabic, aloud.' },
                  { label: 'He explains', text: 'In English, line by line.' },
                  { label: 'You ask', text: 'The floor is yours.' },
                ]}
              />
            </div>
            <StatCircles
              stats={[
                { value: '500+', label: 'readers worldwide' },
                { value: 'Live', label: 'all recorded' },
                { value: 'WhatsApp', label: 'member circle' },
              ]}
            />
            <ChainLine stations={['Madina', 'Kufa', 'Tunis', 'Timbuktu', 'You']} label="Chain of transmission" />
          </div>
        </Block>

        <Block title="Accordion">
          <Accordion
            items={[
              { q: 'When are the sittings?', a: 'We gather weekly on Sundays, live online.' },
              { q: 'How do I cancel?', a: 'Anytime, in a couple of taps, from your Memberful account.' },
            ]}
          />
        </Block>

        <Block title="Hadiyah form" note="Posts to Memberful with plan and price. The amount picker is a pressed-button group.">
          <div className="rounded-panel bg-accent-deep p-6 sm:p-10">
            <HadiyahForm
              action="#"
              plan={CHECKOUT_PLAN}
              title={hadiyah.formLabel}
              amounts={hadiyah.amounts}
              customLabel={hadiyah.customLabel}
              cta={hadiyah.cta}
              small={hadiyah.small}
              secure={hadiyah.secure}
            />
          </div>
        </Block>
      </div>

      <Section tone="alt" width="narrow" className="py-20">
        <SectionHeader num="00" title="Section header" sub="Star, chapter eyebrow, title, optional italic subtitle." />
      </Section>
      <Section tone="accent" width="narrow" className="py-20" decorated>
        <SectionHeader num="08" title="On the accent tone" sub="Headers switch to on-dark colours by themselves." />
      </Section>
      <QuoteBand>&ldquo;The quote band: one sentence, and a pause.&rdquo;</QuoteBand>
    </div>
  );
}
