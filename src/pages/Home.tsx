import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  MessageCircle,
  PlayCircle,
  BookOpen,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Container from '../components/ui/Container';

function scrollToJoin() {
  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

function Chapter({
  id,
  num,
  title,
  dark = false,
  className = '',
  children,
}: {
  id: string;
  num: string;
  title: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 scroll-mt-16 ${className}`}>
      <Container size="md">
        <motion.p
          {...reveal}
          className={`text-xs sm:text-sm tracking-[0.3em] uppercase text-center mb-3 ${
            dark ? 'text-cream-200/80' : 'text-sage-600'
          }`}
        >
          {num}
        </motion.p>
        <motion.h2
          {...reveal}
          className={`font-serif text-2xl sm:text-4xl tracking-tight text-center mb-8 sm:mb-10 ${
            dark ? 'text-cream-50' : 'text-warm-900'
          }`}
        >
          {title}
        </motion.h2>
        {children}
      </Container>
    </section>
  );
}

export default function Home() {
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />

      <main role="main">
        {/* Arrival — what this is */}
        <header className="relative" role="banner">
          <div className="relative w-full min-h-[560px] h-[88svh] max-h-[860px] overflow-hidden">
            <img
              src="/WhatsApp Image 2025-11-03 at 3.08.19 PM.jpeg"
              alt="A scholar among centuries-old manuscripts"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-warm-900/50 via-warm-900/60 to-warm-900/85"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex items-center justify-center px-5">
              <div className="text-center max-w-xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs sm:text-sm tracking-[0.3em] uppercase text-cream-200/90 mb-5"
                >
                  A community of sacred reading
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-4 drop-shadow-lg"
                >
                  Briggs&rsquo; Book Club
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif italic text-xl sm:text-2xl text-cream-100 mb-5 drop-shadow"
                >
                  Read. Reflect. Remember.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base sm:text-lg text-cream-100/95 leading-relaxed mb-8 text-balance"
                >
                  Read classical Islamic texts with Shaykh Mustafa Briggs and
                  500+ readers around the world — one book, one circle, one
                  sitting at a time.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-3"
                >
                  <button
                    onClick={scrollToJoin}
                    className="w-full sm:w-auto min-h-[52px] px-10 py-4 bg-sage-600 text-cream-50 rounded-xl text-lg font-semibold hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
                  >
                    Join the circle
                  </button>
                  <p className="text-sm text-cream-200/90">
                    Pay what you can &middot; Cancel anytime
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-5 left-0 right-0 flex flex-col items-center text-cream-200/80"
              aria-hidden="true"
            >
              <span className="text-[11px] tracking-[0.25em] uppercase mb-1">
                The journey begins
              </span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </motion.div>
          </div>
        </header>

        {/* 01 — The Tradition */}
        <Chapter id="tradition" num="Chapter 01" title="The Tradition">
          <motion.div {...reveal} className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-warm-800">
              For fourteen centuries, knowledge has travelled{' '}
              <span className="font-semibold text-warm-900">heart to heart</span>{' '}
              — from the Prophet ﷺ to his Companions, from Madina to Kufa, from
              Tunis to Timbuktu. An unbroken chain of readers, the{' '}
              <span className="italic">isnād</span>, carried one gathering at a
              time.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-warm-800">
              Briggs&rsquo; Book Club is a seat in that circle — where{' '}
              <span className="font-semibold text-warm-900">
                sacred tradition meets contemporary conversation
              </span>
              , in the familiar form of a book club.
            </p>
            <div className="flex justify-center pt-2" aria-hidden="true">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-sage-500 to-transparent" />
            </div>
          </motion.div>
        </Chapter>

        {/* 02 — The Circle */}
        <Chapter id="circle" num="Chapter 02" title="The Circle" className="bg-cream-100">
          <div className="max-w-xl mx-auto space-y-6">
            <motion.p {...reveal} className="text-lg sm:text-xl leading-relaxed text-warm-800 text-center">
              No homework. No prerequisites. No performing. Each sitting,
              Shaykh Mustafa opens the text and carries us through it — drawing
              on the Qur&rsquo;an, the Sunnah, and the living chain of{' '}
              <span className="italic">isnād</span> — while you simply sit,
              listen, and ask.
            </motion.p>

            <motion.div {...reveal} className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl border border-warm-200 p-5 sm:p-6">
                <h3 className="font-semibold text-warm-900 mb-3 text-sm sm:text-base">
                  This isn&rsquo;t
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-warm-600">
                  <li>A class with homework</li>
                  <li>A course with requirements</li>
                  <li>A place to perform</li>
                </ul>
              </div>
              <div className="bg-sage-600/10 rounded-xl border border-sage-500/20 p-5 sm:p-6">
                <h3 className="font-semibold text-warm-900 mb-3 text-sm sm:text-base">
                  This is
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-warm-700">
                  <li>A circle of sincerity</li>
                  <li>Love of knowledge</li>
                  <li>Stillness in your week</li>
                </ul>
              </div>
            </motion.div>

            <motion.blockquote
              {...reveal}
              className="bg-sage-600 text-cream-50 rounded-2xl p-7 sm:p-9 text-center shadow-md"
            >
              <p className="font-serif text-xl sm:text-2xl leading-relaxed">
                &ldquo;It isn&rsquo;t about keeping up or catching up —
                it&rsquo;s about <span className="font-semibold">showing up</span>.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </Chapter>

        {/* 03 — The Book */}
        <Chapter id="reading" num="Chapter 03" title="What We're Reading">
          <motion.div
            {...reveal}
            className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-warm-200 p-6 sm:p-10 text-center"
          >
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-sage-700 mb-4">
              Current Special
            </p>
            <h3 className="font-serif text-2xl sm:text-4xl text-warm-900 mb-2 leading-tight">
              The Ocean of the Opening
            </h3>
            <p className="font-serif italic text-lg sm:text-xl text-warm-700 mb-5">
              A Tafsir of Sūrah al-Fātiḥah
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-warm-700 mb-7">
              The seven verses recited in every prayer, opened like an ocean —
              live sessions with Q&amp;A, led by Shaykh Mustafa Briggs. Come as
              you are; no preparation needed.
            </p>
            <Link
              to="/fatiha"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 bg-sage-600 text-cream-50 rounded-xl text-base font-semibold hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
            >
              Explore the series
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.p {...reveal} className="text-center text-sm sm:text-base text-warm-600 mt-6">
            A new special every month — read live, kept forever in the replay
            library.
          </motion.p>
        </Chapter>

        {/* 04 — The Guide */}
        <Chapter id="guide" num="Chapter 04" title="The Guide" className="bg-cream-100">
          <motion.div
            {...reveal}
            className="max-w-xl mx-auto flex flex-col items-center text-center gap-6 bg-white rounded-2xl border border-warm-200 p-7 sm:p-10"
          >
            <img
              src="/481670751_1186997073434369_6966345736034781904_n.jpg"
              alt="Shaykh Mustafa Briggs"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-sage-500 shadow-md"
              loading="lazy"
            />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-warm-900 mb-3">
                Shaykh Mustafa Briggs
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                Author of the Amazon bestseller{' '}
                <span className="italic">Beyond Bilal: Black History in Islam</span>,
                taught at over 50 universities across three continents —
                Oxford, Cambridge, Harvard, and Yale among them. Trained at
                SOAS and al-Azhar, he carries classical{' '}
                <span className="italic">ijazat</span> from Shariff Ibrahim Ibn
                Saleh al-Hussaini.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-warm-800 font-medium mt-4">
                Every month, he sits down to read with us.
              </p>
            </div>
          </motion.div>
        </Chapter>

        {/* 05 — The Community */}
        <Chapter id="community" num="Chapter 05" title="The Company You Keep">
          <div className="max-w-xl mx-auto">
            <motion.p {...reveal} className="text-lg sm:text-xl leading-relaxed text-warm-800 text-center mb-8">
              The Prophet ﷺ taught through <span className="italic">suhbah</span>{' '}
              — companionship. Knowledge here is not a commodity but a
              relationship: readers across the world, growing through presence.
            </motion.p>

            <motion.div {...reveal} className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-cream-100 rounded-xl p-4 sm:p-5 text-center">
                <Users className="w-6 h-6 text-sage-600 mx-auto mb-2" aria-hidden="true" />
                <p className="font-serif text-lg sm:text-2xl text-warm-900">500+</p>
                <p className="text-xs sm:text-sm text-warm-600">readers worldwide</p>
              </div>
              <div className="bg-cream-100 rounded-xl p-4 sm:p-5 text-center">
                <PlayCircle className="w-6 h-6 text-sage-600 mx-auto mb-2" aria-hidden="true" />
                <p className="font-serif text-lg sm:text-2xl text-warm-900">Live</p>
                <p className="text-xs sm:text-sm text-warm-600">all recorded</p>
              </div>
              <div className="bg-cream-100 rounded-xl p-4 sm:p-5 text-center">
                <MessageCircle className="w-6 h-6 text-sage-600 mx-auto mb-2" aria-hidden="true" />
                <p className="font-serif text-lg sm:text-2xl text-warm-900">Daily</p>
                <p className="text-xs sm:text-sm text-warm-600">WhatsApp circle</p>
              </div>
            </motion.div>
          </div>
        </Chapter>

        {/* 06 — The Hadiyah: destination */}
        <section id="join" className="py-16 sm:py-24 scroll-mt-16 bg-sage-700">
          <Container size="md">
            <motion.p
              {...reveal}
              className="text-xs sm:text-sm tracking-[0.3em] uppercase text-center mb-3 text-cream-200/80"
            >
              Chapter 06 &middot; Your Seat in the Circle
            </motion.p>
            <motion.h2
              {...reveal}
              className="font-serif text-2xl sm:text-4xl tracking-tight text-center mb-8 sm:mb-10 text-cream-50"
            >
              The Hadiyah
            </motion.h2>

            <motion.div {...reveal} className="max-w-xl mx-auto text-center space-y-6 mb-10">
              <p className="text-lg sm:text-xl leading-relaxed text-cream-100">
                In the West African tradition, knowledge was never sold. The
                teacher taught freely; the student, moved by gratitude, offered
                what they could — a <span className="italic font-medium">hadiyah</span>,
                a gift.
              </p>

              <blockquote className="py-2">
                <p className="text-2xl sm:text-3xl leading-loose text-cream-50 mb-3" dir="rtl">
                  لَا تُرَدّ وَلَا تُعَدّ وَلَا تُحَدّ
                </p>
                <p className="text-base sm:text-lg italic text-cream-200">
                  &ldquo;It is not rejected, not counted, and not limited.&rdquo;
                </p>
              </blockquote>

              <p className="text-lg sm:text-xl leading-relaxed text-cream-100">
                We keep that spirit. One monthly gift — any amount — opens
                everything.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            >
              <form
                action="https://briggsbookclubltd.memberful.com/checkout"
                method="get"
                className="space-y-4"
              >
                <input type="hidden" name="plan" value="141115" />

                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-warm-800 text-center"
                >
                  Your monthly hadiyah
                </label>
                <div className="relative">
                  <span
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-warm-500"
                    aria-hidden="true"
                  >
                    £
                  </span>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="10"
                    required
                    min="1.00"
                    step="0.01"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 text-xl text-center bg-cream-50 border-2 border-warm-300 rounded-xl text-warm-900 font-medium focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all placeholder:text-warm-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[52px] py-4 bg-sage-600 text-cream-50 text-lg font-semibold rounded-xl shadow-sm hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
                >
                  <Heart className="w-5 h-5" aria-hidden="true" />
                  Take your seat
                </button>

                <p className="text-xs text-center text-warm-500">
                  Cancel anytime. Secure checkout via Memberful — the redirect
                  after payment can take up to a minute.
                </p>
              </form>
            </motion.div>

            <motion.ul {...reveal} className="max-w-md mx-auto mt-8 space-y-4">
              <li className="flex items-center gap-4">
                <PlayCircle className="w-6 h-6 text-cream-200 flex-shrink-0" aria-hidden="true" />
                <span className="text-base sm:text-lg text-cream-100">
                  Every live sitting with Shaykh Mustafa — and every replay
                </span>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle className="w-6 h-6 text-cream-200 flex-shrink-0" aria-hidden="true" />
                <span className="text-base sm:text-lg text-cream-100">
                  The private WhatsApp community
                </span>
              </li>
              <li className="flex items-center gap-4">
                <BookOpen className="w-6 h-6 text-cream-200 flex-shrink-0" aria-hidden="true" />
                <span className="text-base sm:text-lg text-cream-100">
                  Reading guides and a new special every month
                </span>
              </li>
            </motion.ul>

            <motion.p
              {...reveal}
              className="text-center text-sm sm:text-base text-cream-200/90 mt-10 max-w-md mx-auto"
            >
              Whoever gives shares in the reward of all who benefit. Every
              contribution sustains the circle.
            </motion.p>
          </Container>
        </section>
      </main>

      {/* Footer — essentials only */}
      <footer className="border-t border-warm-200 py-10 bg-cream-50">
        <Container size="md" className="text-center space-y-4">
          <p className="font-serif text-lg text-warm-900">
            Briggs&rsquo; Book Club
          </p>
          <p className="font-serif italic text-sm text-warm-600">
            Read. Reflect. Remember.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              to="/hadiyah"
              className="text-warm-600 hover:text-sage-600 transition-colors py-2"
            >
              Hadiyah
            </Link>
            <Link
              to="/fatiha"
              className="text-warm-600 hover:text-sage-600 transition-colors py-2"
            >
              Fātiḥah Series
            </Link>
            <Link
              to="/umrah"
              className="text-warm-600 hover:text-sage-600 transition-colors py-2"
            >
              Umrah
            </Link>
          </nav>
          <p className="text-xs text-warm-500">
            &copy; {new Date().getFullYear()} Briggs&rsquo; Book Club
          </p>
        </Container>
      </footer>
    </div>
  );
}
