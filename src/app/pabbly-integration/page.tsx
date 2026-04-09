import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pabbly Connect Integration - MailerSpark | Automate for a Fraction of Zapier's Cost",
  description:
    "Connect MailerSpark with Pabbly Connect for the most cost-effective automation stack. No per-task pricing. Unlimited workflows. One-time payment option.",
};

const steps = [
  {
    step: "1",
    title: "Connect MailerSpark",
    description:
      "Log in to Pabbly Connect and add MailerSpark using your API key. The connection takes under 60 seconds to configure.",
  },
  {
    step: "2",
    title: "Build Your Workflow",
    description:
      "Choose triggers and actions to create automated workflows. Use conditions, filters, routers, and formatters for complex logic.",
  },
  {
    step: "3",
    title: "Activate & Scale",
    description:
      "Enable your workflow and let Pabbly Connect handle everything automatically. Internal tasks are free, so scale without limits.",
  },
];

const integrations = [
  {
    name: "Google Forms",
    description: "Add form respondents directly to MailerSpark lists.",
  },
  {
    name: "Facebook Lead Ads",
    description: "Capture Facebook leads and subscribe them instantly.",
  },
  {
    name: "WooCommerce",
    description: "Sync customer data and trigger post-purchase email flows.",
  },
  {
    name: "Razorpay",
    description: "Send emails after successful payments or subscriptions.",
  },
  {
    name: "Notion",
    description: "Log new subscribers and campaign data to Notion databases.",
  },
  {
    name: "Telegram",
    description: "Get Telegram notifications for new subscribers or campaign events.",
  },
  {
    name: "Airtable",
    description: "Sync contact data between MailerSpark and Airtable bases.",
  },
  {
    name: "WhatsApp",
    description: "Send WhatsApp messages alongside your email campaigns.",
  },
  {
    name: "Webhooks",
    description: "Connect to any app with custom webhook triggers and actions.",
  },
];

const benefits = [
  {
    title: "One-Time Payment Option",
    description: "Pabbly Connect offers lifetime deals -- pair it with MailerSpark's lifetime deal for zero recurring costs on your entire automation stack.",
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Unlimited Workflows",
    description: "No limits on the number of workflows you can create. Build as many automations as your business needs.",
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "No Per-Task Pricing",
    description: "Internal tasks are completely free. You only count external API calls, making it 10x more cost-effective than Zapier.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Multi-Step Workflows",
    description: "Build complex, multi-step workflows with conditions, filters, routers, and data formatters for advanced automation.",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
];

const costComparison = [
  { platform: "Zapier", tasks: "2,000 tasks/mo", price: "$49/mo", annual: "$588/yr" },
  { platform: "Make", tasks: "10,000 ops/mo", price: "$29/mo", annual: "$348/yr" },
  { platform: "Pabbly Connect", tasks: "Unlimited*", price: "$249 once", annual: "$0/yr after" },
];

export default function PabblyIntegrationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            PABBLY CONNECT INTEGRATION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] text-heading leading-tight mb-6">
            Automate everything for a{" "}
            <span className="text-highlight">fraction of Zapier&apos;s cost.</span>
          </h1>
          <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
            Connect MailerSpark with hundreds of apps using Pabbly Connect.
            Unlimited workflows, no per-task pricing, and a one-time payment
            option that eliminates recurring costs forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Connect with Pabbly
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="#how-it-works"
              className="border border-border text-foreground px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Why Pabbly Connect - Benefits */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              WHY PABBLY CONNECT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              The most cost-effective automation platform
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Pabbly Connect pairs perfectly with MailerSpark -- especially if
              you want to eliminate recurring costs entirely with lifetime deals
              on both platforms.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="feature-card bg-white rounded-2xl border border-border p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefit.iconPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-heading mb-2">{benefit.title}</h3>
                <p className="text-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              COMPARE & SAVE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Stop paying monthly for automation
            </h2>
          </div>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-6 text-heading font-bold">Platform</th>
                  <th className="text-center py-4 px-4 text-heading font-bold">Tasks</th>
                  <th className="text-center py-4 px-4 text-heading font-bold">Price</th>
                  <th className="text-center py-4 px-4 text-heading font-bold">Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row) => (
                  <tr
                    key={row.platform}
                    className={`border-b border-border ${
                      row.platform === "Pabbly Connect" ? "bg-primary-light" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-heading">
                      {row.platform === "Pabbly Connect" ? (
                        <span className="font-bold text-primary">{row.platform}</span>
                      ) : (
                        <span className="text-muted">{row.platform}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-foreground text-sm">{row.tasks}</td>
                    <td className="py-4 px-4 text-center">
                      {row.platform === "Pabbly Connect" ? (
                        <span className="font-bold text-primary">{row.price}</span>
                      ) : (
                        <span className="text-muted">{row.price}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.platform === "Pabbly Connect" ? (
                        <span className="font-bold text-primary">{row.annual}</span>
                      ) : (
                        <span className="text-muted line-through">{row.annual}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted mt-4">
            * Unlimited internal tasks. External API calls counted separately.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              3 SIMPLE STEPS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Set up in under 5 minutes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="feature-card bg-white rounded-2xl border border-border p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary text-white text-2xl font-bold font-[family-name:var(--font-sora)] flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] text-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              POPULAR INTEGRATIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Connect with your favorite apps
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              MailerSpark works with hundreds of apps through Pabbly Connect.
              Here are some popular combinations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="feature-card bg-surface rounded-xl p-6 border border-border hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-heading mb-1">{integration.name}</h3>
                    <p className="text-foreground text-sm">{integration.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-white mb-6">
            The ultimate zero-recurring-cost stack
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Pair MailerSpark&apos;s lifetime deal with Pabbly Connect&apos;s
            lifetime deal for the most cost-effective email marketing automation
            stack available. Zero monthly fees on both platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Started with Pabbly Connect
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/lifetime"
              className="border border-gray-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              View Lifetime Deals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
