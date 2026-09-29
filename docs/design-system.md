# The Sanctuary design system

The design system for Briggs' Book Club, chosen from the September 2026
visual overhaul review (`docs/visual-overhaul-review.pdf`, Concept B).

**The idea:** the site is a quiet, beautiful room. It uses two shapes taken
from our photographs, the **mihrab arch** and the **circle of the halaqa**,
and one ornament, the **eight-point star** from the lattice behind the Shaykh.
The palette, wordmark and photographs are unchanged from the original brand.

- Live reference (every component, rendered for real): **`/design-system`**
  (unlinked, noindexed, disallowed in `robots.txt`)
- Tokens: `tailwind.config.js`
- Components: `src/design-system/` (import from `../design-system`)
- Copy: `src/content/home.ts`

---

## 1. Principles

1. **One promise per screen.** A section says one thing, with one focal point.
   The hero has one headline, one paragraph and one call to action.
2. **Welcome before authority.** Lead with the reader ("You were never too
   late"), then the tradition, then the teacher.
3. **Quiet by default, one dark moment at a time.** Sections alternate paper
   tones. The accent colour appears as a full section at most twice per page
   (the quote band and the hadiyah). There is at most one ink feature card
   per section.
4. **Ornament is rare and meaningful.** The star marks a section, an eyebrow
   or the reader's place in the chain. It is never a bullet on every line.
5. **Readable for long passages.** Running text is Inter at 17 to 19px with
   1.75 line height and a measure of about 65 characters. Paragraphs longer
   than two lines are left-aligned, except short centred intros.

---

## 2. Tokens

### Colour roles

The brand hex values are fixed. New work uses the **role** name, not the
palette name (`bg-surface-alt`, not `bg-cream-100`). The palette names stay
available for the older pages.

| Role | Class stem | Hex | Palette |
|---|---|---|---|
| Page paper | `surface` | `#fdfcfa` | cream-50 |
| Alternate paper | `surface-alt` | `#faf8f4` | cream-100 |
| Sunk paper | `surface-sunk` | `#f5f1e8` | cream-200 |
| Headings, strongest text | `ink` | `#1c1917` | warm-900 |
| Body text | `ink-body` | `#44403c` | warm-700 |
| Secondary text | `ink-muted` | `#57534e` | warm-600 |
| Fine print (min. 12px) | `ink-subtle` | `#78716c` | warm-500 |
| Hairlines | `line` | `#e7e5e4` | warm-200 |
| Stronger hairlines | `line-strong` | `#d6d3d1` | warm-300 |
| Ornament, soft accents | `accent-soft` | `#7c9082` | sage-500 |
| Links, eyebrows, icons | `accent` | `#5d6f63` | sage-600 |
| Buttons, dark sections | `accent-deep` | `#4a5850` | sage-700 |
| Tints | `accent-tint` | `#e8ece9` | sage-100 |
| Text on dark | `on-dark`, `-body`, `-muted`, `-subtle` | cream-50 to cream-300 | |

Rules:
- `warm-400` and lighter are **never** used for text on paper (they fail contrast).
- On `accent-deep` and `ink`, use the `on-dark` family only.
- Photographs under text always get an `ink` gradient of at least 55%.

### Type

| Token | Font | Size (phone to desktop) | Use |
|---|---|---|---|
| `text-display-2xl` | Cormorant 500 | 48 to 92px | Hero headline only |
| `text-display-xl` | Cormorant 500 | 48 to 72px | Feature title (the current text) |
| `text-display-lg` | Cormorant 500 | 40 to 56px | Section title (H2) |
| `text-display-md` | Cormorant 500 | 36 to 44px | Card title, pillar word |
| `text-display-sm` | Cormorant 500 | 26 to 32px | Inset title, step label, form title |
| `text-lead-lg` | Cormorant italic | 26 to 36px | Chapter lead line |
| `text-lead` | Cormorant italic | 22 to 28px | Subtitle, intro line |
| `text-body-lg` | Inter 400 | 17 to 19px | Running text |
| `text-body` | Inter 400 | 17px | Cards, lists |
| `text-body-sm` | Inter 400 | 15px | Chips, secondary |
| `text-caption` | Inter 400 | 13px | Fine print |
| `text-eyebrow` | Inter 500, uppercase, 0.24em | 12px | Eyebrows (use `<Eyebrow>`) |

- Families: `font-display` (Cormorant Garamond), `font-body` (Inter),
  `font-arabic` (Amiri). Loaded once in `index.html`.
- Arabic is always `font-arabic` with `dir="rtl" lang="ar"`.
- The honorific ﷺ is always `<Saw />` (or `{saw}` inside copy strings), so it
  renders in Amiri instead of a fallback glyph.
- Pages using the system set `[font-variant-numeric:lining-nums]` on the root
  so Cormorant numerals line up (1, 2, 3 rather than old-style).

### Shape, depth, motion

| Token | Value | Use |
|---|---|---|
| `rounded-tile` | 16px | List items, amount buttons, accordion |
| `rounded-panel` | 24px | Raised insets |
| `rounded-card` | 32px | Feature and alt cards, the form |
| `rounded-arch` | full top, 24px bottom | Portraits, pillar tiles |
| `rounded-full` | | Buttons, chips, badges, circles |
| `shadow-cta` / `shadow-cta-light` | | Buttons on paper / on dark |
| `shadow-lift` | | Arch portrait |
| `shadow-sheet` | | The hadiyah form |
| `shadow-float` | | Mobile sticky call to action |
| `ease-calm` | cubic-bezier(0.22, 1, 0.36, 1) | All transitions |

Motion (`src/design-system/motion.ts`): `reveal` for scroll entrances (22px
rise, 0.9s), `enter(delay)` for staggered hero entrances. `MotionConfig
reducedMotion="user"` in `main.tsx` removes movement for visitors who ask.

---

## 3. Components

All exported from `src/design-system`.

| Component | What it is | Notes |
|---|---|---|
| `Star`, `Khatam` | The ornament; the line-drawn khatam texture | Khatam only on dark, at 10 to 15% |
| `Eyebrow` | Uppercase label | `tone="dark"` on dark; `stars` adds a star each side |
| `ButtonLink`, `Button` | Pill call to action | Variants `primary`, `light` (on photos/ink), `outline`, `outline-light`; sizes `lg` (54px), `sm` (44px) |
| `Badge` | Uppercase status | `solid` (on ink), `outline`, `soft` (+ `icon` star) |
| `Chip` | Sentence-case tag | `neutral`, `soft` (positive), `outline` (negative/muted) |
| `Section` | A chapter | `tone`: `base`, `alt`, `accent`; `width`: `reading`, `narrow`, `default`, `wide`; `decorated` adds khatam on accent |
| `SectionHeader` | Star, chapter eyebrow, H2, optional italic subtitle | Picks light/dark colours from its `Section` |
| `QuoteBand` | Full-width accent pause with one sentence | Once per page |
| `ArchFrame` | Photograph in the mihrab arch | Portrait crops only |
| `ArchCard` | Arch-topped tile | The three pillars |
| `Card` | `ink` feature (optional photo `texture`), `alt`, `raised` inset | One ink card per section |
| `CheckList` | Check-marked list | `tone="dark"` gives the two-column translucent version |
| `StepRow` | Three numbered circles joined by a hairline | Place on `alt` sections |
| `StatCircles` | Three stats in circles | |
| `ChainLine` | The isnad, ending in "You" | |
| `Accordion` | FAQ built on `<details>` | Works without JavaScript |
| `HadiyahForm` | Monthly gift form | GET to Memberful with `plan` and `price` |
| `SiteNav` | Transparent over the hero; fixed and solid on desktop after it | Includes the skip link |
| `StickyJoin` | Floating pill CTA on phones | Hides over the form |
| `SiteFooter` | Star, wordmark, motto, links | |

---

## 4. Page recipe

The home page (`src/pages/Home.tsx`) is the reference layout:

1. Hero: full-bleed photograph, `Eyebrow stars`, `display-2xl` headline, one
   paragraph, `ButtonLink variant="light"`, reassurance line, one glass note.
2. Brand band: wordmark and "Read. Reflect. Remember."
3. Chapters as `Section`s, alternating `base` and `alt`, each opening with
   `SectionHeader`.
4. One `QuoteBand` in the middle of the page.
5. The hadiyah as `Section tone="accent" decorated`, with `HadiyahForm`.
6. Questions, closing line and one last button, then `SiteFooter`.

## 5. Copy rules

- The only call to action is **"Take your seat"**.
- No em dashes; use commas and full stops.
- Transliteration keeps its diacritics (ṣ, ʿ, ḥ, ā). Both fonts cover them.
- Put inline italics and the honorific in copy strings as `{i:...}` and
  `{saw}`; render with `<Rich text={...} />`.

## 6. Accessibility checklist

- One H1 per page; every `Section` has an H2 (the `SectionHeader`).
- Text contrast meets WCAG AA; `ink-subtle` is the lightest text on paper.
- Every interactive element has a visible focus ring and is at least 44px tall.
- The amount picker uses `aria-pressed`; the custom amount has a label.
- Decorative images use `alt=""`; ornaments are `aria-hidden`.
- Tested with axe-core (WCAG 2 A/AA and best practice): no violations on the
  home page.

## 7. Not yet migrated

The Hadiyah, Umrah and Tafsir pages still use the older components
(`src/components/Navigation`, `Section`, `ui/*`) and the legacy
`font-serif`/`font-sans` stacks. Move them to this system page by page,
starting with `SiteNav` and `SiteFooter`.
