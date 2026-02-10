import { Bookmark, Users, Lightbulb, Calendar } from 'lucide-react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Divider from '../components/Divider';
import CallToAction from '../components/CallToAction';
import AnimatedCard from '../components/AnimatedCard';
import BackToTop from '../components/ui/BackToTop';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function Tafsir() {
  const whatToExpectItems = [
    'Close engagement with the Qur\'anic text of Surah Yusuf',
    'Insights from West African scholarly traditions',
    'Reflection on patience, destiny, character, and reconciliation',
    'Interactive discussion in a focused Ramadan learning environment',
  ];

  const ramadanDates = [
    { date: 'Sunday, 22 February 2026', week: 'Week 1' },
    { date: 'Sunday, 1 March 2026', week: 'Week 2' },
    { date: 'Sunday, 8 March 2026', week: 'Week 3' },
    { date: 'Sunday, 15 March 2026', week: 'Week 4' },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <Hero
        title="Tafsir of Surah Yusuf"
        subtitle="Ramadan Sundays Series 2026"
        description="Journey through the best of stories with West African scholarly tradition"
      />

      <main role="main">
        <Container size="lg" className="pb-16 sm:pb-24 md:pb-32">
          <Section id="introduction" title="About This Series">
            <div className="space-y-4 sm:space-y-5">
              <AnimatedCard className="bg-cream-100 rounded-lg p-5 sm:p-6 md:p-8" delay={0}>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  This Ramadan, Briggs Book Club presents a weekly Tafsir of Surah Yusuf, held every Sunday throughout the blessed month.
                </p>
              </AnimatedCard>

              <AnimatedCard className="bg-cream-100 rounded-lg p-5 sm:p-6 md:p-8" delay={0.1}>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  This series draws on the finest traditions of West African Qur'anic interpretation, engaging deeply with the insights of Shaykh Abdullahi Dan Fodio, Shaykh Muhammad Yadali, Shaykh Ibrahim Niasse, and other authoritative scholars.
                </p>
              </AnimatedCard>

              <AnimatedCard className="bg-cream-100 rounded-lg p-5 sm:p-6 md:p-8" delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  These works combine textual precision with deep spiritual and ethical reflection, making the message of the Qur'an immediately relevant to contemporary life.
                </p>
              </AnimatedCard>
            </div>
          </Section>

          <Divider />

          <Section id="why-surah-yusuf" title="Why Surah Yusuf?">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8 border-l-4 border-sage-500">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  Surah Yusuf is described by the Qur'an itself as <span className="font-semibold italic">"the best of stories"</span>, and this series explores why.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  Through careful reading and reflection, sessions will trace the Surah's unfolding narrative of betrayal, patience, moral integrity, hardship, forgiveness, and divine wisdom.
                </p>
              </Card>

              <Card variant="filled" className="p-5 sm:p-6 md:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-900 font-medium">
                  Emphasis will be placed on how these themes speak to real human experience, offering guidance for resilience, trust in Allah, and clarity in moments of trial.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-sage-50 to-cream-50">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed italic text-warm-700">
                  This tafsir is designed to be both intellectually enriching and spiritually nourishing, grounding participants in classical scholarship while making the Qur'an speak to your life today.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="what-to-expect" title="What to Expect">
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0}>
                <Bookmark className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">Qur'anic Text</h3>
                <p className="text-sm sm:text-base text-warm-700">Close engagement with Surah Yusuf</p>
              </AnimatedCard>

              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.1}>
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">Scholarly Insights</h3>
                <p className="text-sm sm:text-base text-warm-700">West African traditions</p>
              </AnimatedCard>

              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.2}>
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">Reflection</h3>
                <p className="text-sm sm:text-base text-warm-700">Patience, character, wisdom</p>
              </AnimatedCard>

              <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.3}>
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600 mb-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-warm-900 mb-2 text-base sm:text-lg">Community</h3>
                <p className="text-sm sm:text-base text-warm-700">Interactive Ramadan learning</p>
              </AnimatedCard>
            </div>
          </Section>

          <Divider />

          <Section id="schedule" title="Ramadan Sundays 2026">
            <div className="mb-8 text-center">
              <p className="text-lg sm:text-xl text-warm-600 italic">
                Expected dates for Ramadan 1447 AH (February–March 2026)
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
              {ramadanDates.map((item, index) => (
                <AnimatedCard
                  key={index}
                  className="border-2 border-sage-500 rounded-lg p-6 sm:p-7 md:p-8 text-center hover:shadow-lg transition-shadow"
                  delay={index * 0.1}
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-sage-600" aria-hidden="true" />
                    <span className="text-sm font-semibold text-sage-600 uppercase tracking-wide">
                      {item.week}
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-warm-900">
                    {item.date}
                  </p>
                </AnimatedCard>
              ))}
            </div>

            <Card variant="elevated" className="mt-8 p-6 sm:p-8 text-center border border-warm-200">
              <p className="text-base sm:text-lg text-warm-700">
                <span className="font-semibold">Time to be announced</span> closer to Ramadan
              </p>
            </Card>
          </Section>

          <Divider />

          <Section id="deep-dive" title="The Story of Yusuf">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <h3 className="font-semibold text-warm-900 mb-3 text-lg sm:text-xl">Betrayal & Resilience</h3>
                <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                  From the pit of injustice, Yusuf (as) never lost faith. Learn how trials refine character and build strength in the soul.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <h3 className="font-semibold text-warm-900 mb-3 text-lg sm:text-xl">Integrity Under Pressure</h3>
                <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                  In the palace of Al-Aziz, Yusuf (as) held firm to his principles despite temptation and false accusation. A model of moral courage.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <h3 className="font-semibold text-warm-900 mb-3 text-lg sm:text-xl">Forgiveness & Reunion</h3>
                <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                  The climax teaches us about mercy, family, and the healing power of sincere repentance and divine grace.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <h3 className="font-semibold text-warm-900 mb-3 text-lg sm:text-xl">Divine Wisdom Unveiled</h3>
                <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                  What appears as tragedy from our limited view reveals itself as mercy and planning from Allah's infinite wisdom.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="join" title="How to Join">
            <div className="space-y-6 sm:space-y-8">
              <Card variant="filled" className="p-6 sm:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-3">
                  Pledge whatever amount feels right to you.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  Access to all sessions and our WhatsApp community included.
                </p>
              </Card>

              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3">
                <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0}>
                  <Bookmark className="w-8 h-8 text-sage-600 mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-warm-900 mb-2">Weekly Sessions</h3>
                  <p className="text-sm sm:text-base text-warm-700">Live tafsir every Ramadan Sunday</p>
                </AnimatedCard>

                <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.1}>
                  <Users className="w-8 h-8 text-sage-600 mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-warm-900 mb-2">Community</h3>
                  <p className="text-sm sm:text-base text-warm-700">WhatsApp group for connection</p>
                </AnimatedCard>

                <AnimatedCard className="flex flex-col p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.2}>
                  <Calendar className="w-8 h-8 text-sage-600 mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-warm-900 mb-2">Replays</h3>
                  <p className="text-sm sm:text-base text-warm-700">Access to all recordings</p>
                </AnimatedCard>
              </div>

              <CallToAction />
            </div>
          </Section>
        </Container>
      </main>

      <BackToTop threshold={400} />
    </div>
  );
}
