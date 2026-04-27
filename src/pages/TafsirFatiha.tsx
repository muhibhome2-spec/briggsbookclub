import { Heart, BookOpen, Users, Calendar } from 'lucide-react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Divider from '../components/Divider';
import CallToAction from '../components/CallToAction';
import AnimatedCard from '../components/AnimatedCard';
import BackToTop from '../components/ui/BackToTop';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function TafsirFatiha() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <Hero
        title="The Opening"
        subtitle="Tafsir of Sūrah al-Fātiḥah"
        description="Seven verses. A thousand recitations a year. One conversation between you and your Lord — heard, perhaps, for the first time."
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/e/e1/Unknown%2C_Arabia%2C_late_7th_Century_-_Pages_from_a_Qur%27an_in_Hijazi_-_Google_Art_Project.jpg"
      />

      <main role="main">
        <Container size="lg" className="pb-16 sm:pb-24 md:pb-32">

          <Section id="invitation" title="An Invitation">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-warm-800 font-serif">
                You have recited al-Fātiḥah more than any other passage of the Qur'an.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                This morning. This week. This year. By the time you finish reading this page, somewhere in the world a believer has begun it again.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                And yet — when you say <span className="italic font-medium text-warm-900">iyyāka naʿbudu wa iyyāka nastaʿīn</span> — what passes through the heart?
              </p>
              <div className="text-center py-4 sm:py-6">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-sage-700">
                  Slow down. Listen. Meet it again.
                </p>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="why" title="Why al-Fātiḥah">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8 border-l-4 border-sage-500">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  The Prophet ﷺ called it <span className="italic font-medium">Umm al-Qur'ān</span> — the Mother of the Qur'an. <span className="italic font-medium">al-Shifā'</span> — the Cure. <span className="italic font-medium">al-Sabʿ al-Mathānī</span> — the Seven Oft-Repeated.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  Seven short verses that hold the whole of the Qur'an in miniature. Praise. Mercy. Lordship. Longing. The straight path. A plea not to be lost.
                </p>
              </Card>

              <Card variant="filled" className="p-5 sm:p-6 md:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-900 font-medium">
                  No prayer is complete without it. No threshold of life — birth, marriage, hardship, the grave — is crossed without it.
                </p>
              </Card>

              <blockquote className="my-6 sm:my-8 py-6 sm:py-8 md:py-10 px-5 sm:px-8 md:px-10 bg-sage-600/5 border-l-4 border-sage-500 rounded-r">
                <p className="text-xl sm:text-2xl md:text-3xl text-center font-serif leading-loose text-warm-900 mb-4 sm:mb-5" dir="rtl">
                  قَسَمْتُ الصَّلَاةَ بَيْنِي وَبَيْنَ عَبْدِي نِصْفَيْنِ
                </p>
                <p className="text-base sm:text-lg md:text-xl text-center italic text-warm-700 mb-3">
                  "I have divided the prayer between Myself and My servant into two halves..."
                </p>
                <p className="text-sm sm:text-base text-center text-warm-600">
                  — Ḥadīth Qudsī, on the recitation of al-Fātiḥah
                </p>
              </blockquote>

              <Card variant="default" className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-sage-50 to-cream-50">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed italic text-warm-700 text-center">
                  When you understand what you are saying, He answers. Verse by verse.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="what-youll-receive" title="What You'll Receive">
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0}>
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">Verse by Verse</h3>
                <p className="text-sm sm:text-base text-warm-700">A slow walk through all seven āyāt — Arabic, translation, and the meaning beneath the meaning.</p>
              </AnimatedCard>

              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.1}>
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">Heart First</h3>
                <p className="text-sm sm:text-base text-warm-700">Drawn from West African tafsir tradition, where understanding is in service of presence — not the other way around.</p>
              </AnimatedCard>

              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.2}>
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">A Circle</h3>
                <p className="text-sm sm:text-base text-warm-700">A small WhatsApp community of fellow readers. Questions welcomed. No performance asked of you.</p>
              </AnimatedCard>

              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.3}>
                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">Yours to Keep</h3>
                <p className="text-sm sm:text-base text-warm-700">Every session recorded. Return to it the next time you stand in prayer.</p>
              </AnimatedCard>
            </div>
          </Section>

          <Divider />

          <Section id="the-promise" title="The Promise">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-800">
                  We will not rush.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-800">
                  We will not flatten the Qur'an into information.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-800">
                  We will sit with the verses the way our teachers sat with them — until something inside us moves.
                </p>
              </Card>

              <div className="bg-sage-600 text-cream-50 rounded-lg p-6 sm:p-8 md:p-10 text-center shadow-lg mt-6">
                <p className="text-lg sm:text-xl md:text-2xl font-serif italic leading-relaxed">
                  By the end, the Sūrah you have recited a thousand times will recite itself differently.
                </p>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="for-you" title="This Is For You If…">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-sage-600 text-2xl flex-shrink-0 leading-none" aria-hidden="true">·</span>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-1 text-warm-800">
                    You feel your prayer slipping past you, and you'd like to be present in it again.
                  </p>
                </div>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-sage-600 text-2xl flex-shrink-0 leading-none" aria-hidden="true">·</span>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-1 text-warm-800">
                    You've never studied tafsir formally — and you'd like to begin where every Muslim begins.
                  </p>
                </div>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-sage-600 text-2xl flex-shrink-0 leading-none" aria-hidden="true">·</span>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-1 text-warm-800">
                    You have studied — and you'd like to hear the Sūrah through a West African ear.
                  </p>
                </div>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-sage-600 text-2xl flex-shrink-0 leading-none" aria-hidden="true">·</span>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-1 text-warm-800">
                    You believe the heart is a place that can be tended — and the Qur'an is how.
                  </p>
                </div>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="join" title="Take Your Seat">
            <div className="space-y-6 sm:space-y-8">
              <Card variant="filled" className="p-6 sm:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-3 text-warm-900">
                  Pledge whatever amount feels right to you.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  Sessions, recordings, and the WhatsApp circle — included.
                </p>
              </Card>

              <Card variant="elevated" className="p-6 sm:p-8 text-center border border-warm-200">
                <p className="text-base sm:text-lg leading-relaxed text-warm-700 italic">
                  Dates and time announced to the circle a week before we begin.
                </p>
              </Card>

              <CallToAction />
            </div>
          </Section>
        </Container>
      </main>

      <BackToTop threshold={400} />
    </div>
  );
}
