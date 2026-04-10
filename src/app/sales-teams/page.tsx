import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email for Sales Teams — Close 3x More Deals With Automated Sequences | MailerSpark",
  description:
    "Automate outreach with lead scoring, multi-step sequences, CRM integration, and revenue analytics. Start free — no card needed.",
};

export default function SalesTeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Built for Sales Teams
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)]">
             <span className="text-highlight">Close 3x More Deals With Automated Sequences</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Intelligent lead scoring, multi-step sequences, and deep CRM
            integration — so your reps spend time selling, not typing.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">3x</span>
              <span className="text-gray-400 text-sm">More Deals Closed</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">47%</span>
              <span className="text-gray-400 text-sm">Reply Rate Avg.</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">5hrs</span>
              <span className="text-gray-400 text-sm">Saved per Rep / Week</span>
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
              Book a Demo
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
          <span>Trusted by 3,000+ sales teams</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Salesforce, HubSpot &amp; Pipedrive ready</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>SOC 2 compliant</span>
        </div>
      </div>

      {/* Lead Scoring */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Lead Scoring
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Focus on the Leads Most Likely to Buy
              </h2>
              <p className="text-foreground text-lg mb-6">
                Our AI analyzes engagement signals, demographics, and behavior
                to surface your hottest prospects — so reps never waste time on
                cold leads.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  AI-powered scoring based on engagement signals
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Custom scoring rules for your sales process
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Real-time lead activity notifications
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Automatic lead routing to the right rep
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-primary-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Find Your Hottest Leads Instantly
              </p>
              <p className="text-foreground mt-2">
                Spend time on prospects that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Sequences */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="feature-card rounded-2xl p-10 text-center bg-white order-2 lg:order-1">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Automate Your Outreach
              </p>
              <p className="text-foreground mt-2">
                Nurture leads on autopilot while reps focus on closing.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Automated Sequences
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Multi-Step Sequences That Nurture and Convert
              </h2>
              <p className="text-foreground text-lg mb-6">
                Build drip sequences with smart timing, personalization, and
                behavior-triggered follow-ups that pause automatically when a
                lead replies or books a meeting.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Multi-step drip campaigns with smart timing
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Dynamic merge tags and personalized content
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Behavior-triggered follow-ups (opens, clicks, replies)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Auto-pause when a lead replies or books a meeting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Integration */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                CRM Integration
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Your Email and CRM, Always in Sync
              </h2>
              <p className="text-foreground text-lg mb-6">
                Two-way sync with Salesforce, HubSpot, and Pipedrive keeps your
                pipeline up to date and deal stages moving forward automatically.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Native Salesforce, HubSpot &amp; Pipedrive integrations
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Two-way contact and activity sync
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Auto-update deal stages based on email engagement
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Custom field mapping and data enrichment
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-accent-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Seamless CRM Sync
              </p>
              <p className="text-foreground mt-2">
                Email data and CRM, always in perfect harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Sales Analytics
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              See What&apos;s Working — and Double Down
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Track open rates, reply rates, meetings booked, and revenue
              generated — all in one dashboard your team can act on.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Email Performance",
                desc: "Track opens, clicks, replies, and bounces for every email and sequence in real time.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
              },
              {
                title: "Team Leaderboards",
                desc: "See which reps are performing best and identify coaching opportunities with team analytics.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                ),
              },
              {
                title: "Revenue Attribution",
                desc: "Measure the direct impact of email outreach on closed deals and pipeline revenue.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="feature-card rounded-2xl p-8 bg-white">
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

      {/* Mid CTA */}
      <section className="bg-primary-light py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
            Your Reps Could Be Closing Right Now
          </h2>
          <p className="text-foreground mb-6">
            Set up your first automated sequence in under 10 minutes and let MailerSpark handle the follow-ups.
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
            Give Your Sales Team the Unfair Advantage
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join 3,000+ sales teams using MailerSpark to automate outreach,
            score leads, and close more deals every quarter.
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
