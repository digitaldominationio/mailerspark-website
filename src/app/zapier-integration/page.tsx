import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapier Integration - MailerSpark | Connect to 5,000+ Apps",
  description:
    "Connect MailerSpark to 5,000+ apps with Zapier. Automate your email marketing workflows without writing a single line of code.",
};

const steps = [
  {
    step: "1",
    title: "Connect Your Apps",
    description:
      "Sign up for Zapier (free plan available) and connect your MailerSpark account alongside any of the 5,000+ apps. Authentication takes under 60 seconds.",
  },
  {
    step: "2",
    title: "Set Up Triggers & Actions",
    description:
      "Choose a trigger event (e.g., new subscriber, purchase, form submission) and define the action (e.g., add to list, send campaign, update CRM).",
  },
  {
    step: "3",
    title: "Automate & Scale",
    description:
      "Turn on your Zap and let it run automatically 24/7. Your workflows execute in the background, saving you hours of manual work every week.",
  },
];

const integrations = [
  {
    name: "Google Sheets",
    description: "Sync subscriber data to spreadsheets automatically.",
  },
  {
    name: "Slack",
    description: "Get notified in Slack when new subscribers join or campaigns send.",
  },
  {
    name: "Shopify",
    description: "Add customers to email lists and trigger post-purchase flows.",
  },
  {
    name: "HubSpot",
    description: "Sync contacts bidirectionally between MailerSpark and your CRM.",
  },
  {
    name: "WordPress",
    description: "Capture form submissions and add leads to mailing lists.",
  },
  {
    name: "Stripe",
    description: "Trigger email sequences after successful payments or refunds.",
  },
  {
    name: "Typeform",
    description: "Add survey respondents to targeted email campaigns.",
  },
  {
    name: "Calendly",
    description: "Send automated follow-up emails after meetings are booked.",
  },
  {
    name: "Trello",
    description: "Create cards when new subscribers join or campaigns launch.",
  },
];

const useCases = [
  {
    title: "E-commerce",
    description: "Sync Shopify/WooCommerce orders and trigger abandoned cart, post-purchase, and win-back emails.",
  },
  {
    title: "SaaS & Apps",
    description: "Onboard new users, trigger usage-based emails, and sync with your CRM automatically.",
  },
  {
    title: "Content Creators",
    description: "Grow your list from YouTube, podcasts, and social media. Auto-send new content to subscribers.",
  },
  {
    title: "Agencies",
    description: "Manage multiple client workflows. Sync leads from ads, forms, and CRMs into MailerSpark.",
  },
];

export default function ZapierIntegrationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            ZAPIER INTEGRATION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] text-heading leading-tight mb-6">
            Connect to <span className="text-highlight">5,000+ apps</span>{" "}
            without writing code.
          </h1>
          <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
            Automate your email marketing workflows by connecting MailerSpark
            with the tools you already use. Set up in minutes. No developers
            needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Connect with Zapier
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

      {/* How It Works */}
      <section id="how-it-works" className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              3 SIMPLE STEPS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Up and running in 5 minutes
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              No technical skills required. If you can click a button, you can
              build an automation.
            </p>
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

      {/* Use Cases */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              USE CASES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Built for every business type
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="feature-card bg-surface rounded-xl p-6">
                <h3 className="font-bold text-heading mb-2">{uc.title}</h3>
                <p className="text-foreground text-sm">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              POPULAR INTEGRATIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Works with the tools you love
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Here are some of the most popular ways our users connect MailerSpark
              through Zapier. Plus 5,000+ more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="feature-card bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all"
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
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-white mb-6 text-highlight">
            Ready to automate your workflows?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Connect MailerSpark with your favorite tools through Zapier and save
            hours of manual work every week. Start free -- no credit card
            required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Started with Zapier
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/subscription"
              className="border border-gray-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
