import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Everything You Need to Turn Emails into Revenue | MailerSpark",
  description:
    "Email campaigns, marketing automation, CRM, popups, webforms, and email verification — all in one platform. 50M+ emails sent monthly with 99.5% deliverability.",
};

const features = [
  {
    title: "Email Marketing",
    benefit: "Launch campaigns that convert subscribers into buyers — in minutes, not hours.",
    href: "/email-marketing",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Marketing Automation",
    benefit: "Set up once, sell 24/7. Visual workflows that nurture leads while you sleep.",
    href: "/marketing-automation",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Contact CRM",
    benefit: "Know every subscriber by name, behavior, and value — then sell smarter.",
    href: "/contact-crm",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Popup Builder",
    benefit: "Capture leads at the perfect moment with popups that feel helpful, not annoying.",
    href: "/popup-builder",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Lead Webform",
    benefit: "Grow your list on autopilot with embeddable forms that match your brand.",
    href: "/lead-webform",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Email Verification",
    benefit: "Clean lists = fewer bounces, higher inbox placement, and more revenue per send.",
    href: "/email-verification",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Platform Features
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Everything you need to turn{" "}
            <span className="text-highlight">emails into revenue</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            One platform. Six powerful tools. Zero excuses. Launch campaigns,
            automate follow-ups, clean your lists, and grow your audience — all
            at a price that actually makes sense.
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

      {/* Feature Cards */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="feature-card group bg-white rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors font-[family-name:var(--font-sora)]">
                  {feature.title}
                </h3>
                <p className="text-foreground mb-4">{feature.benefit}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1">
                  Explore feature
                  <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Social proof */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Trusted by Thousands
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              The numbers speak louder than copy
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "99.5%", label: "Deliverability Rate", sub: "Inbox, not spam." },
              { stat: "10K+", label: "Happy Customers", sub: "And counting daily." },
              { stat: "50M+", label: "Emails Sent Monthly", sub: "At scale, reliably." },
              { stat: "24/7", label: "Customer Support", sub: "Real humans, fast." },
            ].map((item) => (
              <div key={item.label} className="text-center feature-card bg-surface rounded-2xl p-8">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-sora)]">
                  {item.stat}
                </div>
                <p className="text-heading font-semibold mb-1">{item.label}</p>
                <p className="text-muted text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Stop paying more for less
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get instant access to every feature — email, automation, CRM,
            verification, popups, and forms — on our forever-free plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Start Free — No Card Needed
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact-us"
              className="border border-gray-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Free forever plan &middot; No credit card required &middot; Setup in 2 minutes
          </p>
        </div>
      </section>
    </>
  );
}
