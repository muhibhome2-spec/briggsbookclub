import { Star, BookOpen, Globe, Calendar, Lock, Users, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Divider from '../components/Divider';
import AnimatedCard from '../components/AnimatedCard';
import BackToTop from '../components/ui/BackToTop';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function Umrah() {
  const highlights = [
    {
      icon: Star,
      title: '5-star Accommodation',
      description: 'Walking distance to the Haram',
    },
    {
      icon: BookOpen,
      title: 'Daily Classes',
      description: 'With Shaykh Mustafa Briggs & special guests',
    },
    {
      icon: Globe,
      title: 'Guided Expeditions',
      description: 'To key historical sites',
    },
  ];

  const pricingPlans = [
    {
      name: '5-Month Plan',
      badge: 'Most Popular',
      monthlyPrice: 800,
      months: 5,
      highlighted: true,
    },
    {
      name: '4-Month Plan',
      monthlyPrice: 1000,
      months: 4,
      highlighted: false,
    },
    {
      name: '2-Month Plan',
      monthlyPrice: 2000,
      months: 2,
      highlighted: false,
    },
    {
      name: 'Pay in Full',
      totalPrice: 4500,
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />

      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-warm-900/70 via-warm-900/60 to-warm-900/70 z-20" />
          <div className="absolute inset-0 bg-warm-900/40 z-10" />
        </div>

        <div className="relative z-30 max-w-4xl mx-auto px-6 sm:px-8 md:px-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-4 sm:mb-6 leading-tight">
            UMRAH WITH MUSTAFA BRIGGS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cream-100 mb-6 sm:mb-8 font-medium">
            Thanksgiving 2026
          </p>
          <p className="text-lg sm:text-xl text-cream-100/90 max-w-2xl mx-auto leading-relaxed">
            Join us for a unique Seerah-based Umrah experience rooted in knowledge, spirituality, and connection.
          </p>
        </div>
      </section>

      <main role="main">
        <Container size="lg" className="pb-16 sm:pb-24 md:pb-32">
          <Section id="highlights" title="What You'll Experience">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <AnimatedCard
                    key={index}
                    className="bg-cream-100 rounded-lg p-6 sm:p-8 text-center border border-sage-100/50 hover:border-sage-500/30 transition-colors"
                    delay={index * 0.1}
                  >
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-sage-600 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="font-serif text-xl sm:text-2xl text-warm-900 mb-2">{highlight.title}</h3>
                    <p className="text-base sm:text-lg text-warm-700">{highlight.description}</p>
                  </AnimatedCard>
                );
              })}
            </div>
          </Section>

          <Divider />

          <Section id="pricing" title="Investment in Knowledge">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <Card variant="filled" className="p-6 sm:p-8 mb-8">
                <p className="text-2xl sm:text-3xl font-serif text-warm-900 mb-3">Package Price: $4,500</p>
                <p className="text-base sm:text-lg text-warm-700">Secure your spot with just $500 deposit</p>
              </Card>

              <p className="text-lg sm:text-xl text-warm-700 font-medium mb-8">
                Flexible Payment Options
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-12">
              {pricingPlans.map((plan, index) => (
                <AnimatedCard
                  key={index}
                  className={`rounded-lg p-6 sm:p-8 transition-all ${
                    plan.highlighted
                      ? 'bg-sage-600 text-cream-50 ring-2 ring-sage-500 ring-offset-4 ring-offset-cream-50 scale-105 shadow-lg'
                      : 'bg-cream-100 text-warm-900 border border-sage-100/50'
                  }`}
                  delay={index * 0.1}
                >
                  {plan.badge && (
                    <div className="inline-block mb-3 px-3 py-1 bg-warm-900/20 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className={`font-serif text-xl sm:text-2xl mb-3 ${plan.highlighted ? 'text-cream-50' : 'text-warm-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="space-y-2">
                    {plan.months && (
                      <>
                        <p className={`text-3xl sm:text-4xl font-semibold ${plan.highlighted ? 'text-cream-50' : 'text-sage-600'}`}>
                          ${plan.monthlyPrice}
                        </p>
                        <p className={`text-sm ${plan.highlighted ? 'text-cream-100/80' : 'text-warm-600'}`}>
                          per month for {plan.months} months
                        </p>
                      </>
                    )}
                    {plan.totalPrice && (
                      <p className={`text-3xl sm:text-4xl font-semibold ${plan.highlighted ? 'text-cream-50' : 'text-sage-600'}`}>
                        ${plan.totalPrice}
                      </p>
                    )}
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <Card variant="default" className="p-6 sm:p-8 border-l-4 border-sage-500 mb-8">
              <h3 className="font-serif text-xl sm:text-2xl text-warm-900 mb-4">Important Details</h3>
              <div className="space-y-3 text-base sm:text-lg text-warm-700">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Payments:</strong> April – October 2026</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>All payments must be completed before travel</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Deposit is non-refundable</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Limited spaces available</strong></span>
                </div>
              </div>
            </Card>
          </Section>

          <Divider />

          <Section id="journey" title="More Than Umrah">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-xl p-6 sm:p-8 md:p-10 border-2 border-sage-500/20">
                <p className="text-xl sm:text-2xl font-serif italic text-warm-900 text-center leading-relaxed">
                  This is more than an Umrah. This is a journey of knowledge, connection, and transformation.
                </p>
              </div>

              <Card variant="default" className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-warm-900 mb-4">A Seerah-Based Experience</h3>
                <p className="text-base sm:text-lg leading-relaxed text-warm-700 mb-4">
                  Learn directly from Shaykh Mustafa Briggs and special guest scholars as you walk the same paths where the Prophet ﷺ walked. Every day is an opportunity to deepen your understanding of the Seerah while experiencing the spiritual reality of Umrah.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-warm-700">
                  From the life of the Prophet ﷺ to the wisdom of classical scholars, this journey weaves together historical knowledge and spiritual devotion in a way that transforms how you understand Islam and your own path.
                </p>
              </Card>

              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <AnimatedCard className="bg-cream-100 rounded-lg p-6 sm:p-7 border border-sage-100/50" delay={0}>
                  <BookOpen className="w-8 h-8 text-sage-600 mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-warm-900 mb-2 text-lg">Daily Learning</h4>
                  <p className="text-sm sm:text-base text-warm-700">
                    Morning classes exploring Seerah, Qur'anic insights, and classical scholarship
                  </p>
                </AnimatedCard>

                <AnimatedCard className="bg-cream-100 rounded-lg p-6 sm:p-7 border border-sage-100/50" delay={0.1}>
                  <Globe className="w-8 h-8 text-sage-600 mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-warm-900 mb-2 text-lg">Historical Sites</h4>
                  <p className="text-sm sm:text-base text-warm-700">
                    Guided tours to places significant in Islamic history and the Prophet's life
                  </p>
                </AnimatedCard>

                <AnimatedCard className="bg-cream-100 rounded-lg p-6 sm:p-7 border border-sage-100/50" delay={0.2}>
                  <Users className="w-8 h-8 text-sage-600 mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-warm-900 mb-2 text-lg">Spiritual Community</h4>
                  <p className="text-sm sm:text-base text-warm-700">
                    Experience Umrah alongside fellow seekers in an intimate, supportive circle
                  </p>
                </AnimatedCard>

                <AnimatedCard className="bg-cream-100 rounded-lg p-6 sm:p-7 border border-sage-100/50" delay={0.3}>
                  <Star className="w-8 h-8 text-sage-600 mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-warm-900 mb-2 text-lg">Premium Comfort</h4>
                  <p className="text-sm sm:text-base text-warm-700">
                    5-star accommodations steps away from the Sacred Mosque for prayer and reflection
                  </p>
                </AnimatedCard>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="cta" title="">
            <div className="max-w-3xl mx-auto">
              <div className="bg-sage-600 text-cream-50 rounded-xl p-8 sm:p-10 md:p-12 text-center shadow-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                  This is more than an Umrah. This is a journey of knowledge, connection, and transformation.
                </p>

                <div className="bg-cream-50/10 rounded-lg p-6 sm:p-8 mb-8 border border-cream-50/20">
                  <p className="text-lg sm:text-xl font-medium mb-2">Ready to secure your spot?</p>
                  <p className="text-base sm:text-lg text-cream-100/90">
                    Message <span className="font-semibold">"UMRAH"</span> to begin your journey
                  </p>
                </div>

                <button className="inline-block bg-cream-50 text-sage-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-warm-50 transition-colors shadow-lg">
                  Send Message
                </button>

                <p className="text-xs sm:text-sm text-cream-100/70 mt-6">
                  Limited spaces available • Deposit secures your place • Begin your transformation today
                </p>
              </div>
            </div>
          </Section>
        </Container>
      </main>

      <BackToTop threshold={400} />
    </div>
  );
}
