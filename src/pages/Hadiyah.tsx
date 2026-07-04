import { useState } from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Divider from '../components/Divider';
import BackToTop from '../components/ui/BackToTop';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function Hadiyah() {
  const [customAmount, setCustomAmount] = useState('');
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const handleDonateClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (customAmount && parseFloat(customAmount) >= 1) {
      setShowConfirmPopup(true);
    }
  };

  const handleConfirmAndProceed = () => {
    const form = document.getElementById('donation-form') as HTMLFormElement;
    if (form) form.submit();
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />

      <header className="relative pt-10 sm:pt-16 pb-10 sm:pb-14" role="banner">
        <Container size="md" className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm tracking-[0.28em] uppercase text-sage-600 mb-5 sm:mb-6"
          >
            Join Briggs’ Book Club
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-normal text-warm-900 leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:text-7xl mb-5"
          >
            A Monthly <span className="italic">Hadiyah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-warm-700 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
          >
            Pay what you can. Cancel anytime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 sm:mt-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-500 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to home
            </Link>
          </motion.div>
        </Container>
      </header>

      <main role="main">
        <Container size="md" className="pb-16 sm:pb-24 md:pb-32">

          <Section id="what" title="What is a Hadiyah?">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  <span className="italic font-medium">Hadiyah</span> means <span className="italic">gift</span>. In the tradition of Islamic learning, knowledge was never sold. A student would come to a scholar with a book, and the teacher would teach freely. The student, in gratitude, would offer what they could.
                </p>
              </Card>

              <Card variant="filled" className="p-5 sm:p-6 md:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-900">
                  We keep that spirit. Pay what feels right. Every pledge sustains the circle.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="offer" title="Pledge Your Hadiyah">
            <div className="space-y-6 sm:space-y-8">

              <Card variant="default" className="p-5 sm:p-6 md:p-7 border-l-4 border-sage-500">
                <p className="text-base sm:text-lg leading-relaxed text-warm-800">
                  Your hadiyah is a <span className="font-semibold">monthly recurring donation</span>. It opens every reading session, every recording, and our WhatsApp circle. You can change or cancel it at any time.
                </p>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-md mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-md border border-warm-200 p-7 sm:p-9">
                  <div className="text-center mb-6 sm:mb-7">
                    <div className="w-14 h-14 rounded-full bg-sage-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Heart className="w-7 h-7 text-cream-50" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-warm-900 mb-1">
                      Choose your amount
                    </h3>
                    <p className="text-sm text-warm-600">
                      Monthly &middot; pay what you can
                    </p>
                  </div>

                  <form
                    id="donation-form"
                    action="https://briggsbookclubltd.memberful.com/checkout"
                    method="get"
                    className="space-y-5"
                    onSubmit={handleDonateClick}
                  >
                    <input type="hidden" name="plan" value="141115" />

                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-warm-800 mb-2 text-center">
                        Amount in £ per month
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-warm-500" aria-hidden="true">£</span>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          placeholder="10"
                          required
                          min="1.00"
                          step="0.01"
                          inputMode="decimal"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-10 pr-4 py-4 text-xl text-center bg-cream-50 border-2 border-warm-300 rounded-xl text-warm-900 font-medium focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all placeholder:text-warm-400"
                        />
                      </div>
                      <p className="mt-2 text-xs text-center text-warm-500">
                        Charged once a month, until you cancel.
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full min-h-[48px] py-4 bg-sage-600 text-cream-50 text-center text-base sm:text-lg font-semibold rounded-xl shadow-sm hover:bg-sage-500 hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
                    >
                      Continue
                    </motion.button>

                    <p className="text-xs text-center text-warm-500">
                      Secure checkout via Memberful
                    </p>
                  </form>
                </div>
              </motion.div>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <h4 className="font-semibold text-warm-900 mb-3 text-base sm:text-lg">Where your hadiyah goes</h4>
                <ul className="space-y-2 text-sm sm:text-base text-warm-700">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 mt-1" aria-hidden="true">·</span>
                    <span>Supporting Shaykh Mustafa and the teachers who lead our sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 mt-1" aria-hidden="true">·</span>
                    <span>Hosting recordings and the WhatsApp community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 mt-1" aria-hidden="true">·</span>
                    <span>Books, resources, and the next monthly special</span>
                  </li>
                </ul>
              </Card>
            </div>
          </Section>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-500 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Return to home
            </Link>
          </div>
        </Container>
      </main>

      <BackToTop threshold={400} />

      <AnimatePresence>
        {showConfirmPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-warm-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowConfirmPopup(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: 'spring', duration: 0.45 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowConfirmPopup(false)}
                className="absolute top-3 right-3 w-10 h-10 inline-flex items-center justify-center text-warm-500 hover:text-warm-800 rounded-full hover:bg-warm-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-5">
                <div className="w-14 h-14 rounded-full bg-sage-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Heart className="w-7 h-7 text-cream-50" aria-hidden="true" />
                </div>
                <h3 id="confirm-title" className="text-xl sm:text-2xl font-serif text-warm-900 mb-1">
                  One quick note
                </h3>
                <p className="text-sm text-warm-600">
                  Before we send you to checkout
                </p>
              </div>

              <div className="bg-cream-50 rounded-xl p-5 mb-6 border border-warm-200">
                <p className="text-base text-warm-800 leading-relaxed text-center">
                  After checkout, please allow up to <span className="font-semibold">60 seconds</span> for the redirect. The page may briefly pause, this is normal.
                </p>
              </div>

              <motion.button
                onClick={handleConfirmAndProceed}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full min-h-[48px] py-4 bg-sage-600 text-cream-50 text-center text-base sm:text-lg font-semibold rounded-xl shadow-sm hover:bg-sage-500 hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
              >
                Continue to checkout
              </motion.button>

              <p className="text-xs text-center text-warm-500 mt-4">
                You’ll be redirected to Memberful
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
