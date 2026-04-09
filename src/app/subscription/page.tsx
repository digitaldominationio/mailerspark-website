import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - MailerSpark | Start Free, Scale as You Grow",
  description:
    "Simple, transparent pricing for email marketing. Start free with 1,000 contacts. No credit card required. Plans from $0/mo.",
};

const tiers = [
  {
    name: "Free",
    subtitle: "Forever Free",
    price: "$0",
    period: "/mo",
    description: "Everything you need to start growing your email list today.",
    features: [
      "Up to 1,000 contacts",
      "5,000 emails per month",
      "Drag & drop email editor",
      "Basic email templates",
      "Signup forms & landing pages",
      "Email support",
      "Basic analytics dashboard",
    ],
    cta: "Get Started Free",
    ctaHref: "/signup",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth",
    subtitle: "Most Popular",
    price: "$29",
    period: "/mo",
    description:
      "For growing businesses ready to scale their email revenue.",
    features: [
      "Up to 25,000 contacts",
      "100,000 emails per month",
      "Advanced email templates",
      "Marketing automation workflows",
      "A/B testing",
      "Custom sending domains",
      "Priority email support",
      "Advanced analytics & reports",
      "REST API access",
      "Bring Your Own SMTP / SES",
    ],
    cta: "Start 14-Day Free Trial",
    ctaHref: "/signup?plan=growth",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    subtitle: "For Power Users",
    price: "$79",
    period: "/mo",
    description: "Unlimited sending power for high-volume marketers.",
    features: [
      "Unlimited contacts",
      "Unlimited emails",
      "Everything in Growth",
      "Dedicated IP address",
      "Advanced segmentation & tags",
      "Webhook integrations",
      "Phone, chat & email support",
      "Custom SMTP integration",
      "Team collaboration (5 seats)",
      "Priority deliverability support",
    ],
    cta: "Start 14-Day Free Trial",
    ctaHref: "/signup?plan=pro",
    highlighted: false,
    badge: null,
  },
];

const competitors = [
  { name: "Mailchimp", contacts: "10,000", price: "$100/mo" },
  { name: "ConvertKit", contacts: "10,000", price: "$119/mo" },
  { name: "ActiveCampaign", contacts: "10,000", price: "$139/mo" },
  { name: "MailerSpark Growth", contacts: "25,000", price: "$29/mo" },
];

const faqs = [
  {
    question: "Can I really start for free?",
    answer:
      "Yes. Our Free plan includes up to 1,000 contacts and 5,000 emails per month with no credit card required. Use it as long as you want -- there is no trial period.",
  },
  {
    question: "What happens when I hit my contact limit?",
    answer:
      "We will notify you well before you reach your limit so you can upgrade smoothly. We never cut off your service unexpectedly. You can upgrade or downgrade at any time.",
  },
  {
    question: "Can I use my own SMTP or Amazon SES?",
    answer:
      "Yes. Our Growth and Pro plans support Bring Your Own SMTP. Connect Amazon SES, SendGrid, Mailgun, or any SMTP provider and send emails at your own cost -- as low as $0.10 per 1,000 emails with SES.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Absolutely. All paid plans come with a 30-day money-back guarantee. If MailerSpark is not the right fit, we will refund your payment in full -- no questions asked.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes. Save 20% with annual billing on any paid plan. That brings Growth down to just $23/mo and Pro to $63/mo.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. Upgrade, downgrade, or cancel anytime. When you upgrade, you only pay the prorated difference for the remainder of your billing cycle.",
  },
];

function CheckIcon({ className = "w-5 h-5 text-primary" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function SubscriptionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            PRICING
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] text-heading leading-tight mb-6">
            Invest <span className="text-highlight">$0 today.</span>{" "}
            Watch your revenue grow.
          </h1>
          <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
            No credit card required. No hidden fees. Start free and upgrade only
            when your business demands it. Join 12,000+ marketers who chose
            MailerSpark.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-primary" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-primary" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-primary" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? "pricing-popular shadow-2xl scale-105 relative"
                    : "bg-white shadow-lg border border-border"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold px-5 py-1.5 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold font-[family-name:var(--font-sora)] mb-1 ${
                      tier.highlighted ? "text-white" : "text-heading"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      tier.highlighted ? "text-gray-400" : "text-muted"
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                </div>
                <div className="mb-2">
                  <span
                    className={`text-5xl font-bold font-[family-name:var(--font-sora)] ${
                      tier.highlighted ? "text-white" : "text-heading"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-lg ${
                      tier.highlighted ? "text-gray-400" : "text-muted"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`mb-6 text-sm ${
                    tier.highlighted ? "text-gray-300" : "text-foreground"
                  }`}
                >
                  {tier.description}
                </p>
                <Link
                  href={tier.ctaHref}
                  className={`text-center mb-8 ${
                    tier.highlighted
                      ? "cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                      : "bg-dark hover:bg-heading text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                  }`}
                >
                  {tier.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-primary" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.highlighted ? "text-gray-200" : "text-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Anchoring -- Competitor Comparison */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              COMPARE & SAVE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Why pay 4x more for fewer contacts?
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              See how MailerSpark stacks up against the big names. Same features,
              fraction of the price.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 text-heading font-bold">Platform</th>
                  <th className="text-center py-4 px-4 text-heading font-bold">Contacts</th>
                  <th className="text-center py-4 px-4 text-heading font-bold">Price</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row) => (
                  <tr
                    key={row.name}
                    className={`border-b border-border ${
                      row.name.startsWith("MailerSpark")
                        ? "bg-primary-light"
                        : ""
                    }`}
                  >
                    <td className="py-4 px-4 font-medium text-heading">
                      {row.name.startsWith("MailerSpark") ? (
                        <span className="font-bold text-primary">{row.name}</span>
                      ) : (
                        <span className="line-through text-muted">{row.name}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-foreground">{row.contacts}</td>
                    <td className="py-4 px-4 text-center">
                      {row.name.startsWith("MailerSpark") ? (
                        <span className="font-bold text-primary text-lg">{row.price}</span>
                      ) : (
                        <span className="text-muted line-through">{row.price}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted mt-6">
            * Competitor pricing based on publicly available data as of 2024. Prices may vary by plan and features.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-3 text-primary">
                <ShieldIcon />
              </div>
              <h3 className="font-semibold text-heading text-sm mb-1">30-Day Money-Back</h3>
              <p className="text-muted text-xs">Full refund, no questions asked</p>
            </div>
            <div className="feature-card bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-3 text-primary">
                <ShieldIcon />
              </div>
              <h3 className="font-semibold text-heading text-sm mb-1">SOC 2 Compliant</h3>
              <p className="text-muted text-xs">Enterprise-grade security</p>
            </div>
            <div className="feature-card bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-3 text-primary">
                <ShieldIcon />
              </div>
              <h3 className="font-semibold text-heading text-sm mb-1">GDPR Compliant</h3>
              <p className="text-muted text-xs">Your data stays protected</p>
            </div>
            <div className="feature-card bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-3 text-primary">
                <ShieldIcon />
              </div>
              <h3 className="font-semibold text-heading text-sm mb-1">99.9% Uptime</h3>
              <p className="text-muted text-xs">Reliable infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            TRUSTED BY MARKETERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-12">
            12,000+ businesses grow with MailerSpark
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-2xl p-6 text-left">
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground text-sm mb-4">
                &ldquo;Switched from Mailchimp and saving $200/mo with better deliverability. The Amazon SES integration alone is worth it.&rdquo;
              </p>
              <p className="text-heading font-semibold text-sm">Sarah Chen</p>
              <p className="text-muted text-xs">Founder, GrowthLoop</p>
            </div>
            <div className="bg-surface rounded-2xl p-6 text-left">
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground text-sm mb-4">
                &ldquo;The automation workflows pay for themselves. We recovered $14K in abandoned carts last quarter using the WooCommerce integration.&rdquo;
              </p>
              <p className="text-heading font-semibold text-sm">Marcus Williams</p>
              <p className="text-muted text-xs">E-commerce Director, StyleHQ</p>
            </div>
            <div className="bg-surface rounded-2xl p-6 text-left">
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground text-sm mb-4">
                &ldquo;Best value in email marketing. We manage 50K subscribers on the Pro plan and deliverability is consistently above 98%.&rdquo;
              </p>
              <p className="text-heading font-semibold text-sm">Priya Sharma</p>
              <p className="text-muted text-xs">Head of Marketing, TechNova</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading">
              Common pricing questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-border p-6"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-heading pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faqs" className="text-primary hover:text-primary-dark font-semibold transition-colors inline-flex items-center gap-2">
              View all FAQs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6 text-primary">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-foreground text-lg mb-2 max-w-xl mx-auto">
            Try any paid plan risk-free. If MailerSpark does not meet your
            expectations within 30 days, we will refund every penny. No hoops,
            no fine print.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-white mb-6">
            Start sending better emails today
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join 12,000+ marketers who switched to MailerSpark and never looked back.
            Your first 1,000 contacts are on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Started Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/contact-us"
              className="border border-gray-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            No credit card required. Free plan available forever.
          </p>
        </div>
      </section>
    </>
  );
}
