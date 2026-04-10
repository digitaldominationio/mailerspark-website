import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Web Forms — Forms That Fill Your Pipeline While You Sleep | MailerSpark",
  description:
    "Build beautiful, embeddable lead capture forms with custom fields, integrations, and conditional logic. Start free — no card needed.",
};

export default function LeadWebformPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Lead Web Forms
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Forms That Fill Your Pipeline <span className="text-highlight">While You Sleep</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Drag, drop, publish. Capture high-quality leads 24/7 with forms
            that look great everywhere and sync with every tool you use.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">12M+</span>
              <span className="text-gray-400 text-sm">Leads Captured</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">45%</span>
              <span className="text-gray-400 text-sm">Avg. Form Completion</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">1,000+</span>
              <span className="text-gray-400 text-sm">App Integrations</span>
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
              See Examples
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
          <span>Used by 6,000+ growing businesses</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>GDPR &amp; CCPA compliant</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>99.9% uptime SLA</span>
        </div>
      </div>

      {/* Custom Fields */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Custom Fields
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Collect Exactly the Data You Need
              </h2>
              <p className="text-foreground text-lg mb-6">
                Text, email, phone, dropdowns, date pickers, file uploads, hidden fields
                — add any combination and set validation rules so you only get quality leads.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Multi-step forms for higher completion rates
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Conditional logic to show/hide fields dynamically
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Real-time validation and spam protection (CAPTCHA)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Hidden fields for UTM tracking and attribution
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-primary-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Unlimited Custom Fields
              </p>
              <p className="text-foreground mt-2">
                Collect exactly the data your sales team needs to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="feature-card rounded-2xl p-10 text-center bg-white order-2 lg:order-1">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Connect Everything
              </p>
              <p className="text-foreground mt-2">
                Seamless integrations with 1,000+ apps via native and Zapier.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Integrations
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Leads Flow Straight Into Your Stack
              </h2>
              <p className="text-foreground text-lg mb-6">
                Every form submission is synced in real time with your CRM, email
                platform, and business tools — zero manual data entry.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Native CRM sync (Salesforce, HubSpot, Pipedrive)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Zapier &amp; Pabbly Connect for custom workflows
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Webhook support for developer-friendly piping
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Auto-tag and segment new leads on arrival
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embed Anywhere */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Embed Anywhere
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Place Forms Where Your Audience Already Is
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              One form, endless placements. Embed on your site, share a link,
              or spin up a standalone landing page in seconds.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Website Embed",
                desc: "Copy a one-line snippet into any site or CMS — WordPress, Shopify, Webflow, and more.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                ),
              },
              {
                title: "Shareable Links",
                desc: "Generate unique URLs to share via email, social, or messaging apps — track opens automatically.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" /></svg>
                ),
              },
              {
                title: "Landing Pages",
                desc: "Turn any form into a polished standalone landing page with a custom URL and branding.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="feature-card rounded-2xl p-8 bg-surface">
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

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Your Next Lead Is One Form Away
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join 6,000+ businesses capturing more leads with MailerSpark forms.
            Build your first form in under 3 minutes.
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
