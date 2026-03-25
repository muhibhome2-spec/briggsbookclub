<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Umrah with Mustafa Briggs — Thanksgiving 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --cream: #F5F0E8;
    --cream-light: #FAF7F2;
    --cream-dark: #EDE6D8;
    --sage: #5C7C5E;
    --sage-light: #7A9A7C;
    --sage-dark: #4A664C;
    --sage-muted: #8BAA8D;
    --gold: #C4A265;
    --gold-light: #D4B87A;
    --gold-dark: #A8864A;
    --warm-900: #2C2418;
    --warm-800: #3D3226;
    --warm-700: #5A4D3E;
    --warm-600: #7A6C5B;
    --warm-500: #9A8C7A;
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans: 'Jost', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-sans);
    background: var(--cream);
    color: var(--warm-800);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── Islamic geometric pattern SVG as bg ── */
  .pattern-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L50 10L40 20L30 10Z M0 40L10 30L20 40L10 50Z M40 40L50 30L60 40L50 50Z M80 40L70 30L60 40L70 50Z M40 80L50 70L40 60L30 70Z M20 20L30 30L20 40L10 30Z M60 20L70 30L60 40L50 30Z M20 60L30 50L20 40L10 50Z M60 60L50 50L60 40L70 50Z' fill='%232C2418' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-size: 80px 80px;
    pointer-events: none;
  }

  /* ── Navigation ── */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .nav.scrolled {
    background: rgba(245, 240, 232, 0.95);
    backdrop-filter: blur(20px);
    padding: 0.75rem 2rem;
    box-shadow: 0 1px 0 rgba(44, 36, 24, 0.08);
  }
  .nav-logo {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--cream);
    text-decoration: none;
    transition: color 0.5s;
  }
  .nav.scrolled .nav-logo { color: var(--warm-900); }
  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: color 0.3s;
    font-weight: 400;
  }
  .nav.scrolled .nav-links a { color: var(--warm-700); }
  .nav-links a:hover { color: var(--gold); }

  @media (max-width: 768px) {
    .nav-links { display: none; }
  }

  /* ── Hero ── */
  .hero {
    position: relative;
    height: 100vh;
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--warm-900);
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 50%, rgba(92, 124, 94, 0.15) 0%, transparent 60%),
      radial-gradient(ellipse at 70% 30%, rgba(196, 162, 101, 0.1) 0%, transparent 50%),
      linear-gradient(180deg, #1a1510 0%, #2C2418 40%, #3D3226 100%);
  }
  .hero-grain {
    position: absolute;
    inset: 0;
    opacity: 0.35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 0 2rem;
    max-width: 900px;
  }
  .hero-eyebrow {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeUp 1s 0.3s forwards;
  }
  .hero-title {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-weight: 300;
    color: var(--cream);
    line-height: 1.1;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 1.2s 0.5s forwards;
  }
  .hero-title em {
    font-style: italic;
    color: var(--gold-light);
    font-weight: 400;
  }
  .hero-subtitle {
    font-family: var(--font-sans);
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(245, 240, 232, 0.7);
    font-weight: 300;
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto 3rem;
    opacity: 0;
    animation: fadeUp 1.2s 0.7s forwards;
  }
  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
    font-family: var(--font-sans);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0;
    animation: fadeUp 1s 0.9s forwards;
  }
  .hero-cta:hover {
    background: var(--gold);
    color: var(--warm-900);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(196, 162, 101, 0.25);
  }
  .hero-cta svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s;
  }
  .hero-cta:hover svg { transform: translateX(4px); }

  .hero-scroll {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    color: rgba(245, 240, 232, 0.4);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: fadeIn 1s 1.5s forwards;
    opacity: 0;
  }
  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scrollPulse 2s infinite;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }

  /* ── Geometric Divider ── */
  .geo-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 3rem 0;
  }
  .geo-divider-line {
    height: 1px;
    width: 60px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
  }
  .geo-divider svg {
    width: 24px;
    height: 24px;
    color: var(--gold);
    opacity: 0.6;
  }

  /* ── Sections ── */
  .section {
    padding: 5rem 2rem;
    position: relative;
  }
  .section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  .section-eyebrow {
    font-family: var(--font-sans);
    font-size: 0.7rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .section-title {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: var(--warm-900);
    line-height: 1.2;
  }
  .section-title em {
    font-style: italic;
    font-weight: 400;
  }

  /* ── Experience Cards ── */
  .exp-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    .exp-grid { grid-template-columns: 1fr; }
  }
  .exp-card {
    position: relative;
    background: var(--cream-light);
    border: 1px solid rgba(44, 36, 24, 0.06);
    padding: 2.5rem 2rem;
    text-align: center;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    overflow: hidden;
  }
  .exp-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
    opacity: 0;
    transition: opacity 0.5s;
  }
  .exp-card:hover::before { opacity: 1; }
  .exp-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(44, 36, 24, 0.08);
  }
  .exp-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 1.5rem;
    color: var(--sage);
    opacity: 0.8;
  }
  .exp-card h3 {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--warm-900);
    margin-bottom: 0.75rem;
  }
  .exp-card p {
    font-size: 0.95rem;
    color: var(--warm-600);
    line-height: 1.6;
    font-weight: 300;
  }

  /* ── Quote Band ── */
  .quote-band {
    background: var(--warm-900);
    padding: 6rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .quote-band .pattern-overlay { opacity: 0.03; }
  .quote-band .hero-grain { opacity: 0.25; }
  .quote-mark {
    font-family: var(--font-serif);
    font-size: 6rem;
    color: var(--gold);
    opacity: 0.2;
    line-height: 1;
    margin-bottom: -1rem;
  }
  .quote-text {
    font-family: var(--font-serif);
    font-size: clamp(1.3rem, 3vw, 2rem);
    font-weight: 300;
    font-style: italic;
    color: var(--cream);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
  .quote-attr {
    margin-top: 2rem;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 400;
  }

  /* ── Itinerary / Journey ── */
  .journey-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    .journey-grid { grid-template-columns: 1fr; }
  }
  .journey-card {
    background: var(--cream-light);
    border: 1px solid rgba(44, 36, 24, 0.06);
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .journey-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 48px rgba(44, 36, 24, 0.07);
  }
  .journey-num {
    font-family: var(--font-serif);
    font-size: 3.5rem;
    font-weight: 300;
    color: var(--gold);
    opacity: 0.2;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    line-height: 1;
  }
  .journey-card h4 {
    font-family: var(--font-serif);
    font-size: 1.35rem;
    font-weight: 500;
    color: var(--warm-900);
    margin-bottom: 0.75rem;
  }
  .journey-card p {
    font-size: 0.95rem;
    color: var(--warm-600);
    line-height: 1.7;
    font-weight: 300;
  }
  .journey-card-icon {
    width: 28px;
    height: 28px;
    color: var(--sage);
    margin-bottom: 1rem;
  }

  /* ── Pricing ── */
  .pricing-section {
    background: var(--cream-light);
    position: relative;
  }
  .price-hero {
    text-align: center;
    margin-bottom: 3.5rem;
  }
  .price-amount {
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 4.5rem);
    font-weight: 300;
    color: var(--warm-900);
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .price-amount span {
    font-size: 0.5em;
    vertical-align: super;
    color: var(--warm-600);
  }
  .price-note {
    font-size: 1rem;
    color: var(--warm-600);
    font-weight: 300;
  }
  .price-deposit {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.6rem 2rem;
    background: var(--sage);
    color: var(--cream);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .plans-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 900px) {
    .plans-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 500px) {
    .plans-grid { grid-template-columns: 1fr; }
  }
  .plan-card {
    background: var(--cream);
    border: 1px solid rgba(44, 36, 24, 0.08);
    padding: 2rem 1.5rem;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
  }
  .plan-card.featured {
    background: var(--warm-900);
    color: var(--cream);
    border-color: var(--gold);
    transform: scale(1.03);
    box-shadow: 0 20px 60px rgba(44, 36, 24, 0.15);
  }
  .plan-card:not(.featured):hover {
    border-color: var(--gold);
    transform: translateY(-2px);
  }
  .plan-badge {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gold);
    color: var(--warm-900);
    padding: 0.25rem 1rem;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 600;
    white-space: nowrap;
  }
  .plan-name {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .plan-price {
    font-family: var(--font-serif);
    font-size: 2.2rem;
    font-weight: 300;
  }
  .plan-card.featured .plan-price { color: var(--gold-light); }
  .plan-period {
    font-size: 0.8rem;
    color: var(--warm-500);
    margin-top: 0.25rem;
    font-weight: 300;
  }
  .plan-card.featured .plan-period { color: rgba(245,240,232,0.6); }

  /* ── Details strip ── */
  .details-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border: 1px solid rgba(44, 36, 24, 0.08);
    background: var(--cream);
  }
  @media (max-width: 768px) {
    .details-strip { grid-template-columns: repeat(2, 1fr); }
  }
  .detail-item {
    padding: 1.5rem;
    text-align: center;
    border-right: 1px solid rgba(44, 36, 24, 0.06);
    font-size: 0.85rem;
    color: var(--warm-700);
    font-weight: 300;
    line-height: 1.5;
  }
  .detail-item:last-child { border-right: none; }
  .detail-item strong {
    display: block;
    font-weight: 500;
    color: var(--warm-900);
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ── Scholar Section ── */
  .scholar-section {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: center;
  }
  @media (max-width: 768px) {
    .scholar-section { grid-template-columns: 1fr; gap: 2rem; }
  }
  .scholar-image {
    aspect-ratio: 3/4;
    background: linear-gradient(135deg, var(--sage) 0%, var(--sage-dark) 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scholar-image-placeholder {
    font-family: var(--font-serif);
    font-size: 4rem;
    font-weight: 300;
    color: rgba(245, 240, 232, 0.2);
    font-style: italic;
  }
  .scholar-image::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to top, rgba(44, 36, 24, 0.4), transparent);
  }
  .scholar-info h3 {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 300;
    color: var(--warm-900);
    margin-bottom: 0.5rem;
  }
  .scholar-role {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .scholar-info p {
    font-size: 1rem;
    color: var(--warm-600);
    line-height: 1.8;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  /* ── CTA Section ── */
  .cta-section {
    background: var(--warm-900);
    position: relative;
    overflow: hidden;
    padding: 7rem 2rem;
    text-align: center;
  }
  .cta-content {
    position: relative;
    z-index: 10;
    max-width: 650px;
    margin: 0 auto;
  }
  .cta-bismillah {
    font-family: var(--font-serif);
    font-size: 2rem;
    color: var(--gold);
    opacity: 0.4;
    margin-bottom: 2rem;
    font-style: italic;
  }
  .cta-title {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: var(--cream);
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
  .cta-title em {
    font-style: italic;
    color: var(--gold-light);
  }
  .cta-desc {
    font-size: 1rem;
    color: rgba(245,240,232,0.6);
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 3rem;
  }
  .cta-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .cta-keyword {
    display: inline-block;
    border: 2px solid var(--gold);
    padding: 1rem 3rem;
    font-family: var(--font-serif);
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--gold);
    letter-spacing: 0.15em;
  }
  .cta-instruction {
    font-size: 0.8rem;
    color: rgba(245,240,232,0.5);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1rem;
    padding: 1.1rem 3rem;
    background: var(--gold);
    color: var(--warm-900);
    font-family: var(--font-sans);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .cta-button:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(196, 162, 101, 0.3);
  }
  .cta-spots {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: rgba(245,240,232,0.4);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .cta-spots-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sage);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.3); }
  }

  /* ── Footer ── */
  .footer {
    padding: 3rem 2rem;
    text-align: center;
    background: #1a1510;
    color: rgba(245,240,232,0.3);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }
  .footer a {
    color: var(--gold);
    text-decoration: none;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  .footer a:hover { opacity: 1; }

  /* ── Scroll animations ── */
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.35s; }

  /* ── FAQ Accordion ── */
  .faq-list { max-width: 700px; margin: 0 auto; }
  .faq-item {
    border-bottom: 1px solid rgba(44, 36, 24, 0.08);
  }
  .faq-question {
    width: 100%;
    background: none;
    border: none;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--warm-900);
    text-align: left;
  }
  .faq-question:hover { color: var(--sage); }
  .faq-icon {
    width: 20px;
    height: 20px;
    color: var(--gold);
    transition: transform 0.3s;
    flex-shrink: 0;
    margin-left: 1rem;
  }
  .faq-item.open .faq-icon { transform: rotate(45deg); }
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), padding 0.4s;
    padding: 0 0;
  }
  .faq-item.open .faq-answer {
    max-height: 200px;
    padding: 0 0 1.5rem;
  }
  .faq-answer p {
    font-size: 0.95rem;
    color: var(--warm-600);
    line-height: 1.7;
    font-weight: 300;
  }

  /* ── Back to top ── */
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 44px;
    height: 44px;
    background: var(--warm-900);
    color: var(--gold);
    border: 1px solid var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s;
    z-index: 90;
  }
  .back-to-top.visible {
    opacity: 1;
    pointer-events: auto;
  }
  .back-to-top:hover {
    background: var(--gold);
    color: var(--warm-900);
  }

  /* ── Testimonial ── */
  .testimonial-card {
    background: var(--cream-light);
    border: 1px solid rgba(44, 36, 24, 0.06);
    padding: 3rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  .testimonial-text {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-style: italic;
    color: var(--warm-800);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
  .testimonial-name {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--warm-600);
    font-weight: 500;
  }
  .testimonial-trip {
    font-size: 0.7rem;
    color: var(--warm-500);
    margin-top: 0.25rem;
  }
</style>
</head>
<body>

<!-- Navigation -->
<nav class="nav" id="nav">
  <a href="#" class="nav-logo">Mustafa Briggs</a>
  <ul class="nav-links">
    <li><a href="#experience">Experience</a></li>
    <li><a href="#journey">Journey</a></li>
    <li><a href="#scholar">Scholar</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
</nav>

<!-- Hero -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grain"></div>
  <div class="pattern-overlay"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Thanksgiving 2026 · Makkah & Madinah</p>
    <h1 class="hero-title">Umrah with<br><em>Mustafa Briggs</em></h1>
    <p class="hero-subtitle">A seerah-based journey of knowledge, spirituality, and transformation — walking where the Prophet ﷺ walked.</p>
    <a href="#pricing" class="hero-cta">
      Secure Your Place
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
  <div class="hero-scroll">
    <span>Discover</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- Experience Section -->
<section class="section" id="experience">
  <div class="section-inner">
    <div class="section-header reveal">
      <p class="section-eyebrow">The Experience</p>
      <h2 class="section-title">What <em>Awaits</em> You</h2>
    </div>
    <div class="exp-grid">
      <div class="exp-card reveal reveal-delay-1">
        <svg class="exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <h3>5-Star Sanctuary</h3>
        <p>Premium accommodations within walking distance of the Haram, your home for reflection and rest.</p>
      </div>
      <div class="exp-card reveal reveal-delay-2">
        <svg class="exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <h3>Daily Circles of Knowledge</h3>
        <p>Intimate learning sessions with Shaykh Mustafa Briggs and distinguished guest scholars each day.</p>
      </div>
      <div class="exp-card reveal reveal-delay-3">
        <svg class="exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
        <h3>Guided Expeditions</h3>
        <p>Journey to key historical sites where pivotal moments of Islamic history unfolded.</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote Band -->
<div class="quote-band">
  <div class="pattern-overlay"></div>
  <div class="hero-grain"></div>
  <div style="position:relative;z-index:10">
    <div class="quote-mark reveal">"</div>
    <p class="quote-text reveal reveal-delay-1">
      This is more than an Umrah. It is a return — to knowledge, to the footsteps of the beloved ﷺ, and to the truest version of yourself.
    </p>
    <p class="quote-attr reveal reveal-delay-2">— Shaykh Mustafa Briggs</p>
  </div>
</div>

<!-- Journey Section -->
<section class="section" id="journey">
  <div class="section-inner">
    <div class="section-header reveal">
      <p class="section-eyebrow">The Journey</p>
      <h2 class="section-title">More Than <em>Umrah</em></h2>
    </div>
    <div class="journey-grid">
      <div class="journey-card reveal reveal-delay-1">
        <span class="journey-num">01</span>
        <svg class="journey-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <h4>Seerah Immersion</h4>
        <p>Morning sessions exploring the life of the Prophet ﷺ, Qur'anic reflections, and insights from classical scholarship.</p>
      </div>
      <div class="journey-card reveal reveal-delay-2">
        <span class="journey-num">02</span>
        <svg class="journey-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
        <h4>Sacred Geography</h4>
        <p>Guided visits to places of profound significance — where revelation descended and history was shaped.</p>
      </div>
      <div class="journey-card reveal reveal-delay-3">
        <span class="journey-num">03</span>
        <svg class="journey-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <h4>Spiritual Brotherhood</h4>
        <p>An intimate gathering of seekers. Forge bonds of faith alongside fellow travelers in a supportive, close-knit circle.</p>
      </div>
      <div class="journey-card reveal reveal-delay-4">
        <span class="journey-num">04</span>
        <svg class="journey-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <h4>Uncompromised Comfort</h4>
        <p>Every detail handled — from 5-star lodging steps from the Haram to seamless logistics throughout your stay.</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonial -->
<section class="section">
  <div class="section-inner">
    <div class="testimonial-card reveal">
      <p class="testimonial-text">"Traveling with Shaykh Mustafa transformed the way I understand the places I visited. Every site became a lesson, every prayer became deeper. It wasn't tourism — it was transformation."</p>
      <p class="testimonial-name">Past Traveler</p>
      <p class="testimonial-trip">Previous Umrah Journey</p>
    </div>
  </div>
</section>

<!-- Scholar Section -->
<section class="section" id="scholar" style="background: var(--cream-light);">
  <div class="section-inner">
    <div class="section-header reveal">
      <p class="section-eyebrow">Your Guide</p>
      <h2 class="section-title">Shaykh <em>Mustafa Briggs</em></h2>
    </div>
    <div class="scholar-section reveal">
      <div class="scholar-image">
        <span class="scholar-image-placeholder">م</span>
      </div>
      <div class="scholar-info">
        <h3>Mustafa Briggs</h3>
        <p class="scholar-role">Scholar · Author · Guide</p>
        <p>Shaykh Mustafa Briggs is a scholar of Islamic history and the author of <em>Beyond Bilal: Black History in the Muslim World</em>. He has dedicated years to studying the Seerah and the rich tapestry of Islamic civilization across continents.</p>
        <p>His approach weaves together deep historical knowledge with living spiritual practice — transforming the places you visit from landmarks into profound encounters with the legacy of the Prophet ﷺ and the scholars who followed.</p>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section class="section pricing-section" id="pricing">
  <div class="pattern-overlay"></div>
  <div class="section-inner" style="position:relative;z-index:2;">
    <div class="section-header reveal">
      <p class="section-eyebrow">Investment</p>
      <h2 class="section-title">An Investment in <em>Knowledge</em></h2>
    </div>

    <div class="price-hero reveal">
      <p class="price-amount"><span>$</span>4,500</p>
      <p class="price-note">Complete package per person</p>
      <div class="price-deposit">$500 deposit secures your place</div>
    </div>

    <p style="text-align:center;font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--warm-600);margin-bottom:2rem;font-weight:500;" class="reveal">Flexible Payment Plans</p>

    <div class="plans-grid">
      <div class="plan-card reveal reveal-delay-1">
        <p class="plan-name">5 Months</p>
        <p class="plan-price">$800</p>
        <p class="plan-period">per month × 5</p>
      </div>
      <div class="plan-card featured reveal reveal-delay-2">
        <div class="plan-badge">Most Popular</div>
        <p class="plan-name" style="color:var(--cream)">4 Months</p>
        <p class="plan-price">$1,000</p>
        <p class="plan-period">per month × 4</p>
      </div>
      <div class="plan-card reveal reveal-delay-3">
        <p class="plan-name">2 Months</p>
        <p class="plan-price">$2,000</p>
        <p class="plan-period">per month × 2</p>
      </div>
      <div class="plan-card reveal reveal-delay-4">
        <p class="plan-name">Pay in Full</p>
        <p class="plan-price">$4,500</p>
        <p class="plan-period">one payment</p>
      </div>
    </div>

    <div class="details-strip reveal">
      <div class="detail-item">
        <strong>Payment Window</strong>
        April – October 2026
      </div>
      <div class="detail-item">
        <strong>Completion</strong>
        All payments before travel
      </div>
      <div class="detail-item">
        <strong>Deposit</strong>
        Non-refundable
      </div>
      <div class="detail-item">
        <strong>Availability</strong>
        Limited spaces
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="section" id="faq">
  <div class="section-inner">
    <div class="section-header reveal">
      <p class="section-eyebrow">Questions</p>
      <h2 class="section-title">Frequently <em>Asked</em></h2>
    </div>
    <div class="faq-list reveal">
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          What is included in the package?
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <div class="faq-answer"><p>Your package includes 5-star accommodation in Makkah and Madinah, daily classes with Shaykh Mustafa Briggs, guided historical site visits, ground transportation, and group coordination. Flights are arranged separately.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          How do I secure my spot?
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <div class="faq-answer"><p>Send the word "UMRAH" via WhatsApp to begin the registration process. A $500 non-refundable deposit will secure your place in the group.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          Are flights included?
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <div class="faq-answer"><p>Flights are not included in the package price. The team will provide guidance on booking flights once your spot is confirmed, ensuring the group travels together smoothly.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          What is the group size?
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <div class="faq-answer"><p>The group is kept intentionally intimate to ensure a meaningful, personal experience. Spaces are limited and allocated on a first-come basis.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          Do I need prior Islamic knowledge?
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <div class="faq-answer"><p>Not at all. The program is designed to meet you where you are. Whether you are beginning your journey or deepening existing knowledge, every session is accessible and enriching.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <div class="pattern-overlay"></div>
  <div class="hero-grain"></div>
  <div class="cta-content">
    <p class="cta-bismillah reveal">بسم الله</p>
    <h2 class="cta-title reveal reveal-delay-1">Begin Your <em>Journey</em></h2>
    <p class="cta-desc reveal reveal-delay-2">This Thanksgiving, step away from the ordinary and into a journey that will reshape how you see the world, your faith, and yourself.</p>
    <div class="cta-action reveal reveal-delay-3">
      <p class="cta-instruction">Send via WhatsApp to begin</p>
      <div class="cta-keyword">UMRAH</div>
      <button class="cta-button">
        Open WhatsApp
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <div class="cta-spots">
        <span class="cta-spots-dot"></span>
        Limited spaces remaining
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <p style="margin-bottom:0.5rem;">Umrah with Mustafa Briggs · Thanksgiving 2026</p>
  <p>&copy; 2026 All rights reserved</p>
</footer>

<!-- Back to Top -->
<button class="back-to-top" id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
</button>

<script>
  // Nav scroll effect
  const nav = document.getElementById('nav');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 80;
    nav.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // FAQ
  function toggleFaq(btn) {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  }
</script>
</body>
</html>