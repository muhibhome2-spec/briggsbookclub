import { useState, useEffect } from 'react';
import { Heart, Gift, Users, Sparkles, ArrowLeft, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Divider from '../components/Divider';
import AnimatedCard from '../components/AnimatedCard';

export default function Hadiyah() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDonateClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (customAmount && parseFloat(customAmount) >= 1) {
      setShowConfirmPopup(true);
    }
  };

  const handleConfirmAndProceed = () => {
    const form = document.getElementById('donation-form') as HTMLFormElement;
    if (form) {
      form.submit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      <Navigation />

      <header className="relative py-12 sm:py-20 lg:py-24 px-4 sm:px-8 overflow-hidden mt-16 sm:mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-600/5 via-cream-100 to-warm-200/20"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full mb-6 shadow-lg"
          >
            <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-cream-50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-warm-900 mb-4 sm:mb-6 leading-tight"
          >
            The Gift of <span className="italic">Hadiyah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl lg:text-2xl text-warm-700 font-serif font-light max-w-3xl mx-auto leading-relaxed"
          >
            A tradition of generosity that transcends transaction
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-500 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 pb-20 sm:pb-32">
        <Section id="meaning" title="What is Hadiyah?">
          <div className="space-y-5">
            <AnimatedCard className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-warm-200/50" delay={0}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-sage-600/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-warm-900 mb-2">A Sacred Gift</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                    <span className="italic font-semibold">Hadiyah</span> (هدية) in Arabic means "gift" — but it carries a deeper spiritual meaning. It is an offering given freely, from the heart, without expectation of return or reciprocation.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-gradient-to-br from-sage-600/5 to-transparent rounded-xl p-6 sm:p-8 border border-sage-500/20" delay={0.1}>
              <blockquote className="space-y-4">
                <p className="text-2xl sm:text-3xl text-center font-arabic leading-loose text-warm-900" dir="rtl">
                  لَا تُرَدّ وَلَا تُعَدّ وَلَا تُحَدّ
                </p>
                <p className="text-lg sm:text-xl text-center italic text-warm-800">
                  "It is not rejected, not counted, and not limited."
                </p>
                <p className="text-base text-center text-warm-600">
                  — The principle of <span className="italic">hadiyah</span> in Islamic tradition
                </p>
              </blockquote>
            </AnimatedCard>

            <AnimatedCard className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-warm-200/50" delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                Unlike a payment or fee, a <span className="italic">hadiyah</span> represents gratitude, love, and respect. It strengthens bonds between giver and receiver, transforming what could be a commercial transaction into an act of devotion and community building.
              </p>
            </AnimatedCard>
          </div>
        </Section>

        <Divider />

        <Section id="tradition" title="Rooted in Tradition">
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-warm-200/50">
              <h3 className="font-serif text-xl sm:text-2xl text-warm-900 mb-4">The West African Model</h3>
              <p className="text-base sm:text-lg leading-relaxed text-warm-700 mb-4">
                In the great centers of Islamic learning across West Africa — from Timbuktu to Kano, from Fes to Shinqit — knowledge was never sold. A student would come to a scholar with a book, and the teacher would teach freely.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                There were no tuition fees, no enrollment forms, no payment plans. The only prerequisites were <span className="italic font-medium">sincerity</span> (ikhlās), <span className="italic font-medium">proper conduct</span> (adab), and a <span className="italic font-medium">love for knowledge</span>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-warm-100 to-cream-100 rounded-xl p-6 sm:p-8 border-l-4 border-sage-500">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-warm-900 mb-2 text-lg">The Scholar's Provision</h4>
                  <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                    Students would support their teachers through voluntary gifts — food, clothing, service, or monetary offerings given according to one's means and gratitude. This preserved the dignity of both student and teacher, keeping knowledge sacred while ensuring scholars could continue their work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        <Section id="philosophy" title="The Philosophy">
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <AnimatedCard className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-warm-200/50" delay={0}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                    <span className="text-2xl">✗</span>
                  </div>
                  <h4 className="font-semibold text-warm-900 mb-2">Subscription Model</h4>
                  <ul className="text-sm sm:text-base text-warm-600 space-y-1 text-left w-full">
                    <li>• Fixed price for access</li>
                    <li>• Pay or be excluded</li>
                    <li>• Commodifies knowledge</li>
                    <li>• Creates barriers</li>
                  </ul>
                </div>
              </AnimatedCard>

              <AnimatedCard className="bg-gradient-to-br from-sage-600/5 to-transparent rounded-xl p-5 sm:p-6 border-2 border-sage-500/30" delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sage-600/20 flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-sage-600" />
                  </div>
                  <h4 className="font-semibold text-warm-900 mb-2">Hadiyah Model</h4>
                  <ul className="text-sm sm:text-base text-warm-700 space-y-1 text-left w-full">
                    <li>• Give what you can</li>
                    <li>• Access for all</li>
                    <li>• Honors sacred knowledge</li>
                    <li>• Builds community</li>
                  </ul>
                </div>
              </AnimatedCard>
            </div>

            <div className="bg-sage-600 text-cream-50 rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 flex-shrink-0 opacity-90" />
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl mb-3">A Circle of Mutual Support</h4>
                  <p className="text-base sm:text-lg leading-relaxed">
                    When you offer a <span className="italic">hadiyah</span>, you don't just support the book club — you support every member who benefits from it. Your generosity creates ripples of <span className="italic">barakah</span> (blessing) that extend far beyond the moment of giving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        <Section id="practice" title="How It Works in Practice">
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-warm-200/50">
              <h3 className="font-serif text-xl sm:text-2xl text-warm-900 mb-6 text-center">Our Approach</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-sage-600 text-cream-50 flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-900 mb-1">Choose Your Pledge</h4>
                    <p className="text-sm sm:text-base text-warm-700">
                      Pledge whatever amount feels right to you. There is no minimum or maximum — give what you can.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-sage-600 text-cream-50 flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-900 mb-1">Full Access Included</h4>
                    <p className="text-sm sm:text-base text-warm-700">
                      Your pledge grants you access to all reading sessions, the WhatsApp community, session replays, and all resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-sage-600 text-cream-50 flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-900 mb-1">Give From the Heart</h4>
                    <p className="text-sm sm:text-base text-warm-700">
                      Beyond the minimum, give what feels right to you. £5, £10, £50 — or more. Every amount, given sincerely, is blessed and appreciated.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-sage-600 text-cream-50 flex items-center justify-center flex-shrink-0 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-900 mb-1">Shared Blessing</h4>
                    <p className="text-sm sm:text-base text-warm-700">
                      Your contribution benefits all who learn and grow through the book club. You share in the reward of every insight gained and every heart transformed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        <Section id="offer" title="Offer Your Hadiyah">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sage-600/10 to-transparent rounded-xl p-6 sm:p-8 text-center border border-sage-500/20">
              <p className="text-lg sm:text-xl leading-relaxed text-warm-800 mb-2">
                Your generosity sustains this circle of learning
              </p>
              <p className="text-base text-warm-600 italic">
                May your gift be accepted and multiplied in blessing
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-warm-200/50 p-8 sm:p-10">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-sage-500 to-sage-600 flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <Heart className="w-8 h-8 text-cream-50" />
                  </motion.div>

                  <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-2">
                    Choose Your Amount
                  </h3>
                  <p className="text-sm text-warm-600">
                    Monthly recurring gift
                  </p>
                </div>

                <form
                  id="donation-form"
                  action="https://briggsbookclubltd.memberful.com/checkout"
                  method="get"
                  className="space-y-6"
                  onSubmit={handleDonateClick}
                >
                  <input type="hidden" name="plan" value="141115" />

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-warm-900 mb-3 text-center">
                      Choose what you pay
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Choose what you pay"
                      required
                      min="1.00"
                      step="0.01"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full px-4 py-4 text-xl text-center bg-cream-50 border-2 border-warm-300 rounded-xl text-warm-900 font-medium focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all placeholder:text-warm-400"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-sage-600 to-sage-500 text-cream-50 text-center text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Contribute now
                  </motion.button>

                  <p className="text-xs text-center text-warm-500">
                    Secure payment via Memberful
                  </p>
                </form>
              </div>
            </motion.div>

            <div className="bg-warm-100/50 rounded-xl p-6 sm:p-8 border border-warm-200/50">
              <h4 className="font-semibold text-warm-900 mb-3 text-center text-lg">Where Your Hadiyah Goes</h4>
              <ul className="space-y-2 text-sm sm:text-base text-warm-700 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 mt-1">•</span>
                  <span>Supporting scholars and teachers who lead our sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 mt-1">•</span>
                  <span>Maintaining technology and platforms for our community</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 mt-1">•</span>
                  <span>Acquiring books and educational materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 mt-1">•</span>
                  <span>Creating accessible content for all members</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 mt-1">•</span>
                  <span>Growing and strengthening our learning circle</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-500 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </main>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 p-2.5 sm:p-3 bg-sage-600 text-cream-50 rounded-full shadow-lg hover:bg-sage-500 hover:shadow-xl z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-warm-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowConfirmPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowConfirmPopup(false)}
                className="absolute top-4 right-4 text-warm-400 hover:text-warm-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage-500 to-sage-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="w-8 h-8 text-cream-50" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-2">
                  Important Notice
                </h3>
              </div>

              <div className="bg-warm-50 rounded-xl p-5 mb-6 border border-warm-200">
                <p className="text-base text-warm-800 leading-relaxed text-center">
                  After completing your checkout, please wait up to <span className="font-semibold">60 seconds</span> for the redirect. The page may appear to pause this is normal.
                </p>
              </div>

              <motion.button
                onClick={handleConfirmAndProceed}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-sage-600 to-sage-500 text-cream-50 text-center text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Continue with your pledge
              </motion.button>

              <p className="text-xs text-center text-warm-500 mt-4">
                You'll be redirected to Memberful to complete your donation
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
