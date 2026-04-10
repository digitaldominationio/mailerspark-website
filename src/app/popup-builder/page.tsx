import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popup Builder — Turn Every Visitor into a Subscriber | MailerSpark",
  description:
    "Build high-converting popups with exit-intent detection, A/B testing, and smart targeting rules. Average 28% conversion lift. Start free — no card needed.",
};

export default function PopupBuilderPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Popup Builder
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Turn Every Visitor into a <span className="text-highlight">Subscriber</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Build popups that feel native to your brand, trigger at the perfect moment,
            and convert 3x more visitors — all without writing a line of code.
          </p>

          {/* Social proof stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">28%</span>
              <span className="text-gray-400 text-sm">Avg. Conversion Lift</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">2.4M+</span>
              <span className="text-gray-400 text-sm">Leads Captured</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">50+</span>
              <span className="text-gray-400 text-sm">Ready Templates</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link
              href="/signup"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Free — No Card Needed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/contact-us"
              className="border border-gray-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              See a Live Demo
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Free forever plan available &middot; No credit card required
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="trust-strip bg-surface py-4 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-muted text-sm">
          <span>Trusted by 4,000+ businesses worldwide</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>4.8/5 average rating</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>SOC 2 &amp; GDPR compliant</span>
        </div>
      </div>

      {/* Exit-Intent Technology */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Exit-Intent Detection
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Rescue Visitors Before They Leave
              </h2>
              <p className="text-foreground text-lg mb-6">
                Our exit-intent engine detects cursor movement, scroll patterns, and
                back-button taps to display the right offer at the last possible second.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Desktop cursor-movement prediction
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Mobile scroll-based &amp; back-button triggers
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Last-chance offers, lead magnets &amp; coupon reveals
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Frequency caps to avoid annoying repeat visitors
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-primary-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l3-3m0 0l3 3m-3-3v6" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Recover 10-15% of Abandoning Traffic
              </p>
              <p className="text-foreground mt-2">
                One popup can be worth thousands in recaptured leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A/B Testing */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="feature-card rounded-2xl p-10 text-center bg-white order-2 lg:order-1">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Data-Driven Decisions
              </p>
              <p className="text-foreground mt-2">
                Test, learn, optimize. Let the numbers pick the winner.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                A/B Split Testing
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Stop Guessing, Start Testing
              </h2>
              <p className="text-foreground text-lg mb-6">
                Run split tests on headlines, images, CTAs, and timing to find
                the combination that converts best — then auto-promote the winner.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Test headlines, images, and call-to-actions
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Automatic 50/50 traffic splitting
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Statistical significance indicator
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Auto-select the winning variation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Targeting Rules */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Smart Targeting
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Right Message, Right Person, Right Time
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Layer targeting rules so every popup feels personal — and never
              interrupts the wrong visitor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Page & URL Rules",
                desc: "Show popups on specific pages, blog posts, or product categories.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" /></svg>
                ),
              },
              {
                title: "Geo & Device",
                desc: "Target by country, region, or device type for localized offers.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
              },
              {
                title: "Scroll & Time",
                desc: "Trigger after a visitor reads 50% of the page or stays 30 seconds.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
              },
              {
                title: "New vs. Returning",
                desc: "Welcome first-timers differently from loyal, returning visitors.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="feature-card rounded-2xl p-6 bg-surface"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-heading mb-2 font-[family-name:var(--font-sora)]">
                  {item.title}
                </h3>
                <p className="text-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Stats */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Real Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
            Popups That Actually Perform
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto mb-12">
            Our customers see measurable conversion improvements within the first week.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "3.2x", label: "More Email Signups", desc: "Compared to static sidebar forms and footer opt-ins." },
              { stat: "15%", label: "Cart Recovery Rate", desc: "Exit-intent popups with discount codes bring shoppers back." },
              { stat: "40%", label: "Higher Engagement", desc: "Targeted popups see 40% better click-through than generic ones." },
            ].map((item) => (
              <div key={item.label} className="feature-card rounded-2xl p-8 bg-white">
                <span className="block text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-sora)]">
                  {item.stat}
                </span>
                <h3 className="text-lg font-bold text-heading mb-2 font-[family-name:var(--font-sora)]">
                  {item.label}
                </h3>
                <p className="text-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-primary-light py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
            Ready to See It in Action?
          </h2>
          <p className="text-foreground mb-6">
            Create your first popup in under 5 minutes. No design skills required.
          </p>
          <Link
            href="/signup"
            className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Free — No Card Needed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Stop Losing Visitors. Start Converting Them.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join 4,000+ businesses using MailerSpark popups to grow their email
            lists faster. Set up in minutes, see results today.
          </p>
          <Link
            href="/signup"
            className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Free — No Card Needed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Free forever plan &middot; No credit card &middot; Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
