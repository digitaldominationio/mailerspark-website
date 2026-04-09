import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MailerSpark — The Team Behind Your Next Revenue Channel",
  description:
    "Discover how MailerSpark helps 2,400+ businesses turn email into their most profitable channel. Affordable tools, world-class deliverability, and support that actually responds.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero — dark mesh */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            About MailerSpark
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)]">
            The team behind your next{" "}
            <span className="text-highlight">revenue channel</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            We built MailerSpark so every business — from solo founders to
            scaling teams — can turn email into predictable, profitable growth.
          </p>
          <Link
            href="#"
            className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Free — No Card Needed
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="trust-strip py-10 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "2,400+", label: "Businesses trust us" },
              { stat: "50M+", label: "Emails sent monthly" },
              { stat: "99.9%", label: "Platform uptime" },
              { stat: "<2hr", label: "Avg. support response" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-[family-name:var(--font-sora)]">
                  {item.stat}
                </div>
                <p className="text-muted text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Every dollar you spend on email should come back multiplied
              </h2>
              <p className="text-foreground text-lg mb-4">
                Most platforms charge more as you grow — punishing success. We
                flipped the model: enterprise-grade tools at prices that shrink
                your cost-per-acquisition, not inflate it.
              </p>
              <p className="text-foreground text-lg">
                Our mission is to make email the highest-ROI channel for every
                business, regardless of size or budget. When you win, we win.
              </p>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-8 space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Pricing that scales down",
                  desc: "Pay less per email as you grow. Free forever plan included.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Enterprise power, zero complexity",
                  desc: "Automation, CRM, verification — all in one dashboard.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Humans on the other end",
                  desc: "Real support from real people — average reply under 2 hours.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-lg">{item.title}</h3>
                    <p className="text-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Values that drive every feature we ship
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Innovation",
                desc: "We ship AI-powered features and smart automation so you stay two steps ahead of competitors — without the learning curve.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                ),
                title: "Affordability",
                desc: "Premium features at honest prices. Our forever-free plan isn't a bait — it's a real toolkit that grows revenue from day one.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "Simplicity",
                desc: "Powerful doesn't mean complicated. Every screen is designed so you can launch a campaign in minutes, not hours.",
              },
            ].map((item) => (
              <div key={item.title} className="feature-card bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-heading mb-3 font-[family-name:var(--font-sora)]">
                  {item.title}
                </h3>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              The People
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Marketers, engineers, and designers obsessed with your growth
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              A lean, senior team that has collectively sent billions of emails
              and knows what it takes to land in the inbox.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Co-founder", initials: "AJ" },
              { name: "Sarah Chen", role: "CTO & Co-founder", initials: "SC" },
              { name: "Michael Torres", role: "Head of Product", initials: "MT" },
              { name: "Emily Park", role: "Head of Marketing", initials: "EP" },
            ].map((member) => (
              <div
                key={member.name}
                className="feature-card bg-surface rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center text-xl font-bold text-primary mx-auto mb-4 font-[family-name:var(--font-sora)]">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-heading">{member.name}</h3>
                <p className="text-muted text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)]">
            Ready to turn email into your
            <br className="hidden md:block" /> most profitable channel?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join 2,400+ businesses already using MailerSpark to grow audience,
            automate engagement, and drive revenue on autopilot.
          </p>
          <Link
            href="#"
            className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Free — No Card Needed
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Free forever plan &middot; No credit card required &middot; Setup in 2 minutes
          </p>
        </div>
      </section>
    </>
  );
}
