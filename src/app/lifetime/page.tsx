import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lifetime Deal - MailerSpark | Pay Once, Send Forever",
  description:
    "Get lifetime access to MailerSpark with a single payment. No recurring fees. Limited spots available. Starting at $129.",
};

const lifetimePlans = [
  {
    name: "Starter",
    price: "$129",
    monthlyEquivalent: "$29/mo",
    savings: "Save $219/yr",
    contacts: "5,000",
    emailsPerMonth: "25,000",
    features: [
      "Drag & drop email editor",
      "Basic automation workflows",
      "Signup forms & landing pages",
      "Email support",
      "Basic analytics dashboard",
      "Lifetime updates included",
    ],
    cta: "Get Starter Deal",
    ctaHref: "/signup?plan=lifetime-starter",
    highlighted: false,
    badge: null,
  },
  {
    name: "Business",
    price: "$249",
    monthlyEquivalent: "$79/mo",
    savings: "Save $699/yr",
    contacts: "25,000",
    emailsPerMonth: "100,000",
    features: [
      "Everything in Starter",
      "Advanced automation workflows",
      "A/B testing",
      "Custom sending domains",
      "Priority support",
      "Advanced analytics & reports",
      "REST API access",
      "Bring Your Own SMTP / SES",
    ],
    cta: "Get Business Deal",
    ctaHref: "/signup?plan=lifetime-business",
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    price: "$499",
    monthlyEquivalent: "$149/mo",
    savings: "Save $1,289/yr",
    contacts: "100,000",
    emailsPerMonth: "Unlimited",
    features: [
      "Everything in Business",
      "Dedicated IP address",
      "Advanced segmentation & tags",
      "Webhook integrations",
      "Phone, chat & email support",
      "Custom SMTP integration",
      "Team collaboration (10 seats)",
      "Priority deliverability support",
    ],
    cta: "Get Enterprise Deal",
    ctaHref: "/signup?plan=lifetime-enterprise",
    highlighted: false,
    badge: null,
  },
];

const comparisonFeatures = [
  { feature: "Contacts", starter: "5,000", business: "25,000", enterprise: "100,000" },
  { feature: "Emails / Month", starter: "25,000", business: "100,000", enterprise: "Unlimited" },
  { feature: "Email Templates", starter: "Basic", business: "Advanced", enterprise: "Advanced" },
  { feature: "Marketing Automation", starter: "Basic", business: "Advanced", enterprise: "Advanced" },
  { feature: "A/B Testing", starter: false, business: true, enterprise: true },
  { feature: "Custom Domains", starter: false, business: true, enterprise: true },
  { feature: "Dedicated IP", starter: false, business: false, enterprise: true },
  { feature: "API Access", starter: false, business: true, enterprise: true },
  { feature: "Bring Your Own SMTP", starter: false, business: true, enterprise: true },
  { feature: "Webhook Integrations", starter: false, business: false, enterprise: true },
  { feature: "Team Collaboration", starter: false, business: false, enterprise: true },
  { feature: "Lifetime Updates", starter: true, business: true, enterprise: true },
  { feature: "No Monthly Fees", starter: true, business: true, enterprise: true },
  { feature: "30-Day Money-Back", starter: true, business: true, enterprise: true },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function LifetimePage() {
  return (
    <>
      {/* Urgency Banner */}
      <div className="bg-accent text-white text-center py-3 px-4 font-semibold text-sm md:text-base">
        <span className="inline-flex items-center gap-2">
          <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Only 127 lifetime deals remaining -- once they are gone, they are gone forever.
        </span>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            LIFETIME DEAL
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] text-heading leading-tight mb-6">
            Pay once. <span className="text-highlight">Send forever.</span>
          </h1>
          <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
            Lock in lifetime access to MailerSpark with a single payment. No
            recurring charges. No price increases. All future features and
            updates included -- forever.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-foreground">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              One-time payment
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Lifetime updates
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              All future features
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              30-day money-back
            </div>
          </div>
        </div>
      </section>

      {/* Lifetime Plan Cards */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {lifetimePlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "pricing-popular shadow-2xl scale-105 relative"
                    : "bg-white shadow-lg border border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold px-5 py-1.5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <h3
                  className={`text-xl font-bold font-[family-name:var(--font-sora)] mb-1 ${
                    plan.highlighted ? "text-white" : "text-heading"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-400" : "text-muted"}`}>
                  One-time payment
                </p>
                <div className="mb-1">
                  <span className={`text-5xl font-bold font-[family-name:var(--font-sora)] ${plan.highlighted ? "text-white" : "text-heading"}`}>
                    {plan.price}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-sm line-through ${plan.highlighted ? "text-gray-500" : "text-muted"}`}>
                    {plan.monthlyEquivalent} equivalent
                  </span>
                  <span className="text-xs font-semibold bg-primary-light text-primary px-2 py-0.5 rounded-full">
                    {plan.savings}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-300" : "text-foreground"}`}>
                  {plan.contacts} contacts &middot; {plan.emailsPerMonth} emails/mo
                </p>
                <Link
                  href={plan.ctaHref}
                  className={`text-center mb-8 ${
                    plan.highlighted
                      ? "cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                      : "bg-dark hover:bg-heading text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                  }`}
                >
                  {plan.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 shrink-0 mt-0.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.highlighted ? "text-gray-200" : "text-foreground"}`}>
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

      {/* ROI Calculator / Why Lifetime Makes Sense */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              THE MATH
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              This deal pays for itself in under 4 months
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="feature-card bg-surface rounded-xl p-6 text-center">
              <p className="text-muted text-sm mb-2">Monthly plan (1 year)</p>
              <p className="text-3xl font-bold font-[family-name:var(--font-sora)] text-heading line-through decoration-accent">$948</p>
              <p className="text-muted text-sm mt-1">$79/mo x 12 months</p>
            </div>
            <div className="feature-card bg-primary-light rounded-xl p-6 text-center border-2 border-primary">
              <p className="text-primary text-sm font-semibold mb-2">Lifetime deal (forever)</p>
              <p className="text-3xl font-bold font-[family-name:var(--font-sora)] text-primary">$249</p>
              <p className="text-primary text-sm mt-1 font-semibold">One payment, that is it</p>
            </div>
            <div className="feature-card bg-surface rounded-xl p-6 text-center">
              <p className="text-muted text-sm mb-2">You save in year 1</p>
              <p className="text-3xl font-bold font-[family-name:var(--font-sora)] text-primary stat-glow">$699</p>
              <p className="text-muted text-sm mt-1">And $948 every year after</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading text-center mb-12">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-6 text-heading font-bold">Feature</th>
                  <th className="text-center py-4 px-4 text-heading font-bold">Starter</th>
                  <th className="text-center py-4 px-4 text-heading font-bold bg-primary/5">Business</th>
                  <th className="text-center py-4 px-4 text-heading font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-3 px-6 text-foreground font-medium">{row.feature}</td>
                    {(["starter", "business", "enterprise"] as const).map((tier) => (
                      <td
                        key={tier}
                        className={`py-3 px-4 text-center ${tier === "business" ? "bg-primary/5" : ""}`}
                      >
                        {typeof row[tier] === "boolean" ? (
                          row[tier] ? <CheckIcon /> : <CrossIcon />
                        ) : (
                          <span className="text-foreground text-sm">{row[tier]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
          <p className="text-foreground text-lg max-w-xl mx-auto">
            Try your lifetime deal completely risk-free. If MailerSpark does not
            meet your expectations within 30 days, we will issue a full refund.
            No questions asked. No fine print.
          </p>
        </div>
      </section>

      {/* Urgency + Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-5 py-2 text-sm font-semibold mb-6">
            <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Limited spots -- price increases when batch sells out
          </div>
          <br/><h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-white mb-6 text-highlight ">
            Do not miss this deal
          </h2>
      
          <p className="text-gray-300 text-lg mb-8">
            Lifetime access at a one-time price. Every future feature included.
            Once the remaining spots are filled, this offer disappears and prices
            go to monthly billing only.
          </p>
          <Link
            href="/signup?plan=lifetime-business"
            className="cta-glow bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            Get Lifetime Access Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <p className="text-gray-500 text-sm mt-6">
            30-day money-back guarantee. Instant access after purchase.
          </p>
        </div>
      </section>
    </>
  );
}
