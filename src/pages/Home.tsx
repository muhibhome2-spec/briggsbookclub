import { useState } from 'react';
import {
  Heart,
  Users,
  MessageCircle,
  PlayCircle,
  BookOpen,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Container from '../components/ui/Container';

function scrollToJoin() {
  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />

      <main role="main">
        {/* 1 — What the club is */}
        <header className="pt-6 sm:pt-10" role="banner">
          <Container size="md">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/WhatsApp Image 2025-11-03 at 3.08.19 PM.jpeg"
                alt="Briggs' Book Club gathering"
                className="w-full aspect-[16/9] object-cover"
                fetchPriority="high"
                loading="eager"
              />
            </div>

            <div className="text-center pt-7 sm:pt-10 pb-2">
              <h1 className="font-serif text-3xl sm:text-5xl text-warm-900 tracking-tight leading-tight mb-4">
                Briggs&rsquo; Book Club
              </h1>
              <p className="text-lg sm:text-xl text-warm-700 leading-relaxed max-w-xl mx-auto text-balance">
                A community reading classical Islamic texts together with
                Shaykh Mustafa Briggs — no homework, no prerequisites, just
                show up.
              </p>

              <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-sm sm:text-base text-warm-600 mt-5">
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-warm-800">500+ members</span>
                </li>
                <li className="text-warm-300" aria-hidden="true">·</li>
                <li>Online</li>
                <li className="text-warm-300" aria-hidden="true">·</li>
                <li>Pay what you can</li>
              </ul>

              <div className="mt-7 flex flex-col items-center gap-4">
                <button
                  onClick={scrollToJoin}
                  className="w-full sm:w-auto min-h-[52px] px-10 py-4 bg-sage-600 text-cream-50 rounded-xl text-lg font-semibold hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
                >
                  Join the circle
                </button>
                <p className="font-serif italic text-warm-600">
                  Read. Reflect. Remember.
                </p>
              </div>
            </div>
          </Container>
        </header>

        {/* 2 — How to join */}
        <section id="join" className="py-12 sm:py-16 scroll-mt-20">
          <Container size="md">
            <h2 className="font-serif text-2xl sm:text-3xl text-warm-900 tracking-tight mb-2 text-center">
              Join the circle
            </h2>
            <p className="text-base sm:text-lg text-warm-700 leading-relaxed text-center max-w-xl mx-auto mb-8">
              Membership works on a{' '}
              <span className="italic font-medium">hadiyah</span> — a gift.
              Pledge any monthly amount that feels right; it opens everything.
              Cancel anytime.
            </p>

            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md border border-warm-200 p-6 sm:p-8">
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
                  Join now
                </button>

                <p className="text-xs text-center text-warm-500">
                  Secure checkout via Memberful. The redirect after payment can
                  take up to a minute.
                </p>
              </form>
            </div>

            <ul className="max-w-md mx-auto mt-8 space-y-4">
              <li className="flex items-center gap-4">
                <PlayCircle
                  className="w-6 h-6 text-sage-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-base sm:text-lg text-warm-800">
                  Live reading sessions with Shaykh Mustafa — all recorded
                </span>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle
                  className="w-6 h-6 text-sage-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-base sm:text-lg text-warm-800">
                  Private WhatsApp community for discussion
                </span>
              </li>
              <li className="flex items-center gap-4">
                <BookOpen
                  className="w-6 h-6 text-sage-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-base sm:text-lg text-warm-800">
                  Reading guides, replays, and a new special each month
                </span>
              </li>
            </ul>
          </Container>
        </section>

        {/* 3 — Current book */}
        <section id="reading" className="py-12 sm:py-16 scroll-mt-20 bg-cream-100">
          <Container size="md">
            <h2 className="font-serif text-2xl sm:text-3xl text-warm-900 tracking-tight mb-8 text-center">
              What we&rsquo;re reading
            </h2>

            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-warm-200 p-6 sm:p-10 text-center">
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
                Live and recorded sessions with Q&amp;A, led by Shaykh Mustafa
                Briggs. Come as you are — no preparation needed.
              </p>
              <Link
                to="/fatiha"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 bg-sage-600 text-cream-50 rounded-xl text-base font-semibold hover:bg-sage-500 active:scale-[0.98] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
              >
                Explore the series
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </section>

        {/* 4 — Community */}
        <section id="community" className="py-12 sm:py-16 scroll-mt-20">
          <Container size="md">
            <h2 className="font-serif text-2xl sm:text-3xl text-warm-900 tracking-tight mb-8 text-center">
              Inside the community
            </h2>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mb-10">
              <div className="bg-cream-100 rounded-xl p-4 sm:p-5 text-center">
                <Users
                  className="w-6 h-6 text-sage-600 mx-auto mb-2"
                  aria-hidden="true"
                />
                <p className="font-serif text-lg sm:text-2xl text-warm-900">500+</p>
                <p className="text-xs sm:text-sm text-warm-600">readers</p>
              </div>
              <div className="bg-cream-100 rounded-xl p-4 sm:p-5 text-center">
                <PlayCircle
                  className="w-6 h-6 text-sage-600 mx-auto mb-2"
                  aria-hidden="true"
                />
                <p className="font-serif text-lg sm:text-2xl text-warm-900">Live</p>
                <p className="text-xs sm:text-sm text-warm-600">+ recorded</p>
              </div>
              <div className="bg-cream-100 rounded-xl p-4 sm:p-5 text-center">
                <BookOpen
                  className="w-6 h-6 text-sage-600 mx-auto mb-2"
                  aria-hidden="true"
                />
                <p className="font-serif text-lg sm:text-2xl text-warm-900">Monthly</p>
                <p className="text-xs sm:text-sm text-warm-600">specials</p>
              </div>
            </div>

            <div className="max-w-xl mx-auto bg-sage-600 text-cream-50 rounded-2xl p-6 sm:p-8 text-center shadow-md mb-10">
              <p className="text-lg sm:text-xl font-serif leading-relaxed">
                &ldquo;It isn&rsquo;t about keeping up or catching up — it&rsquo;s
                about showing up.&rdquo;
              </p>
              <p className="text-sm text-cream-200 mt-3">
                Learning through companionship, in the West African tradition
              </p>
            </div>

            <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-5 sm:gap-7 bg-cream-100 rounded-2xl p-6 sm:p-8">
              <img
                src="/481670751_1186997073434369_6966345736034781904_n.jpg"
                alt="Shaykh Mustafa Briggs"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-sage-500 shadow-md flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-xl sm:text-2xl text-warm-900 mb-2">
                  Led by Shaykh Mustafa Briggs
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-warm-700">
                  Author of the Amazon bestseller{' '}
                  <span className="italic">Beyond Bilal: Black History in Islam</span>,
                  presented at over 50 universities including Oxford, Cambridge,
                  Harvard, and Yale. He studied at SOAS and al-Azhar University
                  and holds classical ijazat from Shariff Ibrahim Ibn Saleh
                  al-Hussaini.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <button
                onClick={scrollToJoin}
                className="inline-flex items-center gap-2 min-h-[48px] px-8 py-3 border-2 border-sage-600 text-sage-700 rounded-xl text-base font-semibold hover:bg-sage-600 hover:text-cream-50 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
              >
                <ArrowDown className="w-4 h-4 rotate-180" aria-hidden="true" />
                Back to join
              </button>
            </div>
          </Container>
        </section>
      </main>

      {/* 5 — Footer */}
      <footer className="border-t border-warm-200 py-10">
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
