import { BookOpen, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Divider from '../components/Divider';
import CallToAction from '../components/CallToAction';
import AnimatedCard from '../components/AnimatedCard';
import BackToTop from '../components/ui/BackToTop';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function Home() {

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <Hero />

      <main role="main">
        <Container size="lg" className="pb-16 sm:pb-24 md:pb-32">
          <Section id="introduction" title="Introduction">
            <div className="space-y-4 sm:space-y-5">
              <AnimatedCard className="bg-cream-100 rounded-lg p-5 sm:p-6 md:p-8" delay={0}>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Inspired by Shaykh Mustafa Briggs, a small community of students and those who wished to study with him formed Briggs' Book Club, a space to learn, connect, and grow together through books and conversation.
                </p>
              </AnimatedCard>

              <AnimatedCard className="bg-cream-100 rounded-lg p-5 sm:p-6 md:p-8" delay={0.1}>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Where <span className="font-semibold text-warm-900">sacred tradition meets contemporary conversation</span>.
                </p>
              </AnimatedCard>

              <AnimatedCard className="bg-cream-100 rounded-lg p-5 sm:p-6 md:p-8" delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  A circle for seekers who wish to experience classical learning through the familiar form of a book club.
                </p>
              </AnimatedCard>

              <div className="text-center py-6 sm:py-8">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-warm-700">
                  Read. Reflect. Remember.
                </p>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="now-reading" title="Now Reading">
            <div className="space-y-5 sm:space-y-6">
              <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-sm sm:text-base text-warm-600 mb-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
                  <span className="font-medium text-warm-800">500+ members and growing</span>
                </li>
                <li className="text-warm-300" aria-hidden="true">·</li>
                <li>A new special each month</li>
              </ul>

              <Card variant="filled" className="p-6 sm:p-8 md:p-10 text-center">
                <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-sage-700 mb-4">
                  Current Special
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-900 mb-2 leading-tight">
                  The Ocean of the Opening
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-warm-700 mb-5">
                  A Tafsir of Sūrah al-Fātiḥah
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-warm-700 max-w-xl mx-auto mb-7">
                  Two Sundays in May, live and recorded, with a Q&amp;A with Shaykh Mustafa Briggs.
                </p>
                <Link
                  to="/fatiha"
                  className="inline-flex items-center gap-2 min-h-[44px] px-6 sm:px-8 py-3 bg-sage-600 text-cream-50 rounded-md text-sm sm:text-base font-medium hover:bg-sage-500 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="vision" title="The Vision">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8 border-l-4 border-sage-500">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-warm-900 mb-3 sm:mb-4">
                  The Tradition of <span className="italic">Isnad</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  The unbroken chain from the Prophet ﷺ through his Companions and scholars of every age. From Madina to Kufa, from Tunis to Timbuktu — knowledge transmitted heart to heart.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8 border-l-4 border-sage-500">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-warm-900 mb-3 sm:mb-4">
                  The Modern Book Club
                </h3>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  An open gathering of readers exploring texts together, sharing insights, and growing in understanding.
                </p>
              </Card>

              <Card variant="filled" className="p-6 sm:p-7 md:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-900 font-medium">
                  Briggs' Book Club unites these two worlds.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="companionship" title="Knowledge as Companionship">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  The Prophet ﷺ taught through <span className="italic font-medium">suhbah</span> — companionship. Knowledge was not a commodity but a relationship.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  The early generations preserved this: learning through love, trust, and proximity to people of knowledge.
                </p>
              </Card>

              <div className="bg-sage-600 text-cream-50 rounded-lg p-6 sm:p-8 md:p-10 text-center shadow-lg mt-8">
                <p className="text-lg sm:text-xl md:text-2xl font-serif leading-relaxed">
                  Briggs' Book Club revives this ethos for our time.
                </p>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="ethos" title="The Ethos">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl text-warm-700 font-medium">
                Knowledge Is a Trust, Not a Transaction
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  In West African tradition, a student would approach a teacher with a book. The teacher gave freely. The student, moved by gratitude, would offer what they could — a <span className="italic font-medium">hadiyah</span>. No set price. No obligation. Only sincerity, <span className="italic">adab</span>, and love for knowledge.
                </p>
              </Card>

              <blockquote className="my-6 sm:my-8 py-6 sm:py-8 md:py-10 px-5 sm:px-8 md:px-10 bg-sage-600/5 border-l-4 border-sage-500 rounded-r">
                <p className="text-xl sm:text-2xl md:text-3xl text-center font-arabic leading-loose text-warm-900 mb-4 sm:mb-5" dir="rtl">
                  لَا تُرَدّ وَلَا تُعَدّ وَلَا تُحَدّ
                </p>
                <p className="text-base sm:text-lg md:text-xl text-center italic text-warm-700 mb-3">
                  "It is not rejected, not counted, and not limited."
                </p>
                <p className="text-sm sm:text-base text-center text-warm-600">
                  — On the gift of <span className="italic">hadiyah</span>
                </p>
              </blockquote>

              <Card variant="default" className="p-5 sm:p-6 md:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed italic">
                  Generosity without calculation. Gratitude without obligation.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="hadiyah" title="The Hadiyah Model">
            <div className="space-y-4 sm:space-y-5">
              <Card variant="filled" className="p-5 sm:p-6 md:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Briggs’ Book Club runs on a <span className="font-semibold italic">hadiyah</span>: a monthly donation, pay what you can.
                </p>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-sage-600 text-2xl flex-shrink-0" aria-hidden="true">•</span>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-1">
                    Pledge whatever amount feels right to you — there is no minimum or maximum
                  </p>
                </div>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-sage-600 text-2xl flex-shrink-0" aria-hidden="true">•</span>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-1">
                    Full access to reading sessions, WhatsApp community, and all content
                  </p>
                </div>
              </Card>

              <Card variant="default" className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="text-sage-600 text-2xl flex-shrink-0" aria-hidden="true">•</span>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-1">
                    Give what you can — every contribution sustains the circle
                  </p>
                </div>
              </Card>

              <div className="bg-sage-600 text-cream-50 rounded-lg p-5 sm:p-6 md:p-8 text-center shadow-md">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Every contribution benefits the entire community. Whoever gives shares in the <span className="italic">reward</span> of all who benefit.
                </p>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="how-it-works" title="How It Works">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-xl p-6 sm:p-8 md:p-10 border-2 border-sage-500/20 shadow-sm">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-sage-700 mb-6 sm:mb-8 text-center">
                  A Return to West African Learning
                </h2>

                <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-warm-800">
                  <p>
                    Briggs' Book Club is a return to the West African way of learning: through <span className="font-semibold text-warm-900">companionship</span>, <span className="font-semibold text-warm-900">conversation</span>, and <span className="font-semibold text-warm-900">reflection</span>.
                  </p>

                  <p>
                    It's a space where knowledge is shared openly, where hearts grow through presence, and where <span className="italic font-medium text-sage-700">showing up matters more than being prepared</span>.
                  </p>
                </div>
              </div>

              <Card variant="default" className="p-6 sm:p-7 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-800 mb-4">
                  Shaykh Mustafa takes us through a part of the text, sharing insights from the Qur'an, the Sunnah, and the living chain of <span className="italic">isnād</span>.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-800">
                  You don't need to read ahead or study beforehand — you just come as you are, to sit, listen, and remember together.
                </p>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <Card variant="default" className="p-5 sm:p-6 md:p-7 border-l-4 border-sage-500">
                  <h3 className="font-semibold text-warm-900 mb-3 sm:mb-4 text-base sm:text-lg md:text-xl">What This Isn't</h3>
                  <div className="space-y-2 text-sm sm:text-base md:text-lg text-warm-700">
                    <p>A class with homework</p>
                    <p>A course with requirements</p>
                    <p>A space where you must perform</p>
                  </div>
                </Card>

                <Card variant="filled" className="p-5 sm:p-6 md:p-7 border-l-4 border-sage-600">
                  <h3 className="font-semibold text-warm-900 mb-3 sm:mb-4 text-base sm:text-lg md:text-xl">What This Is</h3>
                  <div className="space-y-2 text-sm sm:text-base md:text-lg text-warm-700">
                    <p>A circle for sincerity</p>
                    <p>A space for love of knowledge</p>
                    <p>A moment of stillness in your week</p>
                  </div>
                </Card>
              </div>

              <div className="bg-sage-600 text-cream-50 rounded-xl p-6 sm:p-8 md:p-10 text-center shadow-lg">
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-serif italic mb-3">
                  "It isn't about keeping up or catching up—"
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-serif font-semibold">
                  It's about showing up.
                </p>
              </div>

              <Card variant="elevated" className="p-6 sm:p-7 md:p-8 border border-warm-200">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700 text-center">
                  Even the smallest amount of knowledge gained is valuable. There's no pressure — only a space to grow, at your own pace, alongside others who love knowledge and remembrance.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          <Section id="shaykh" title="Meet Shaykh Mustafa Briggs">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-6 sm:p-8 bg-gradient-to-br from-sage-50 to-cream-50 rounded-xl border border-sage-200">
                <div className="flex-shrink-0">
                  <img
                    src="/481670751_1186997073434369_6966345736034781904_n.jpg"
                    alt="Shaykh Mustafa Briggs"
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-sage-500 shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-serif text-2xl sm:text-3xl text-warm-900 mb-4">Shaykh Mustafa Briggs</h2>
                  <div className="space-y-3 text-base sm:text-lg leading-relaxed text-warm-700">
                    <p>
                      Mustafa Briggs is a graduate of Arabic and International Relations from the University of Westminster. He studied Arabic and Islamic Texts at SOAS before continuing his studies at al-Azhar University in Cairo, where he is currently pursuing a degree in Islamic Studies and Arabic.
                    </p>
                    <p>
                      He gained international acclaim for his <span className="italic font-medium">Beyond Bilal: Black History in Islam</span> lecture series, presented at over 50 universities across 3 continents including Oxford, Cambridge, Harvard and Yale. His book <span className="italic">Beyond Bilal</span> became an Amazon bestseller and is now part of the educational curriculum at Edinburgh University. He holds classical ijazat from the distinguished Shariff Ibrahim Ibn Saleh al-Hussaini. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="join" title="How to Join">
            <div className="space-y-5 sm:space-y-6">
              <Card variant="filled" className="p-5 sm:p-6 md:p-8 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-2 text-warm-900 font-medium">
                  A monthly donation, pay what you can.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-warm-700">
                  One pledge opens every session, every recording, and our WhatsApp circle.
                </p>
              </Card>

              <div className="grid gap-4 sm:gap-5 md:gap-6 mb-8">
                <AnimatedCard className="flex items-start p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0}>
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-sage-600 mr-4 sm:mr-5 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">Reading Guides</h3>
                    <p className="text-sm sm:text-base md:text-lg text-warm-700">Curated materials and reflection prompts</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard className="flex items-start p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.1}>
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-sage-600 mr-4 sm:mr-5 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">Community Access</h3>
                    <p className="text-sm sm:text-base md:text-lg text-warm-700">WhatsApp group for discussion and connection</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard className="flex items-start p-5 sm:p-6 md:p-7 bg-cream-100 rounded-lg" delay={0.2}>
                  <Calendar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-sage-600 mr-4 sm:mr-5 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">Session Replays</h3>
                    <p className="text-sm sm:text-base md:text-lg text-warm-700">Access to recordings and continued dialogue</p>
                  </div>
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
