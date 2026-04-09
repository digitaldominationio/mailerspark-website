import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - MailerSpark | Help is 2 Minutes Away",
  description:
    "Get help with MailerSpark. Browse our knowledge base, submit a support ticket, or connect with our community. Average response time: 2 hours.",
};

const knowledgeBaseLinks = [
  {
    title: "Getting Started",
    description: "Set up your account, import contacts, and send your first campaign in under 10 minutes.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    href: "#",
  },
  {
    title: "Email Campaigns",
    description: "Create, schedule, A/B test, and optimize your email campaigns for maximum engagement.",
    iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    href: "#",
  },
  {
    title: "Automation & Workflows",
    description: "Build automated sequences, drip campaigns, abandoned cart recovery, and trigger-based flows.",
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    href: "#",
  },
  {
    title: "SMTP & Deliverability",
    description: "Configure your own SMTP, Amazon SES, SPF, DKIM, DMARC, and optimize inbox placement.",
    iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
    href: "#",
  },
  {
    title: "Integrations",
    description: "Connect MailerSpark with Zapier, Pabbly, WooCommerce, Shopify, and 5,000+ apps.",
    iconPath: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    href: "#",
  },
  {
    title: "Account & Billing",
    description: "Manage your subscription, update payment methods, download invoices, and team settings.",
    iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    href: "#",
  },
];

const communityLinks = [
  {
    name: "Community Forum",
    description: "Join discussions, share tips, and get help from 12,000+ MailerSpark users.",
    href: "#",
  },
  {
    name: "YouTube Tutorials",
    description: "Watch step-by-step video guides and walkthroughs for every feature.",
    href: "https://youtube.com/@mailerspark",
  },
  {
    name: "Blog",
    description: "Read articles on email marketing strategies, deliverability tips, and growth tactics.",
    href: "#",
  },
  {
    name: "Changelog",
    description: "Stay up to date with the latest features, improvements, and bug fixes.",
    href: "#",
  },
];

const supportStats = [
  { value: "2hr", label: "Average response time" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "24/7", label: "Knowledge base access" },
  { value: "12K+", label: "Community members" },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            SUPPORT
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] text-heading leading-tight mb-6">
            Help is <span className="text-highlight">2 minutes</span> away.
          </h1>
          <p className="text-foreground text-lg mb-10 max-w-2xl mx-auto">
            Browse our knowledge base for instant answers, submit a support
            ticket, or connect with our community. We are here to make sure you
            succeed with MailerSpark.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {supportStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold font-[family-name:var(--font-sora)] text-primary stat-glow">
                  {stat.value}
                </p>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              KNOWLEDGE BASE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading">
              Find answers instantly
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeBaseLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="feature-card bg-white rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-heading text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Form */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              SUBMIT A TICKET
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading">
              Can not find what you need?
            </h2>
            <p className="text-foreground mt-3">
              Submit a support ticket and we will get back to you within 2 hours
              on business days.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="support-name"
                    className="block text-sm font-semibold text-heading mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="support-name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="support-email"
                    className="block text-sm font-semibold text-heading mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="support-email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="support-category"
                  className="block text-sm font-semibold text-heading mb-2"
                >
                  Category
                </label>
                <select
                  id="support-category"
                  name="category"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground"
                >
                  <option value="">Select a category</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing & Account</option>
                  <option value="deliverability">Deliverability</option>
                  <option value="feature">Feature Request</option>
                  <option value="integration">Integration Help</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="support-message"
                  className="block text-sm font-semibold text-heading mb-2"
                >
                  Describe Your Issue
                </label>
                <textarea
                  id="support-message"
                  name="message"
                  rows={5}
                  placeholder="Please describe your issue in detail so we can help you faster..."
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground resize-vertical"
                />
              </div>
              <button
                type="submit"
                className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Submit Support Request
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ & Community */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FAQ Link */}
            <div className="bg-white rounded-2xl shadow-lg border border-border p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-foreground mb-6 max-w-sm">
                Find quick answers to common questions about pricing, features,
                SMTP setup, security, and migrations.
              </p>
              <Link
                href="/faqs"
                className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Browse FAQs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Community */}
            <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-sora)] text-heading mb-6">
                Community & Resources
              </h3>
              <div className="space-y-3">
                {communityLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join 12,000+ marketers who trust MailerSpark for their email
            marketing. Start free today -- no credit card required.
          </p>
          <Link
            href="/signup"
            className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            Get Started Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
