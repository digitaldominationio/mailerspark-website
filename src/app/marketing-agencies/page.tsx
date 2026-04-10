import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing for Agencies — Scale 50 Clients Without Scaling Your Team | MailerSpark",
  description:
    "Manage multiple clients from one dashboard with white-label branding, automated reporting, and team collaboration. Start free — no card needed.",
};

export default function MarketingAgenciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Built for Marketing Agencies
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)]">
           <span className="text-highlight"> Scale 50 Clients Without Scaling Your Team</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            One dashboard for every client. White-label everything, automate
            reporting, and deliver results that keep retainers growing.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">800+</span>
              <span className="text-gray-400 text-sm">Agencies Trust Us</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">10hrs</span>
              <span className="text-gray-400 text-sm">Saved per Week / Client</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">100%</span>
              <span className="text-gray-400 text-sm">White Label</span>
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
              Partner with Us
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
          <span>Used by 800+ marketing agencies</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Full white-label support</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Agency partner program available</span>
        </div>
      </div>

      {/* Multi-Client Management */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Multi-Client Dashboard
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Every Client, One Login
              </h2>
              <p className="text-foreground text-lg mb-6">
                Switch between client accounts in one click, set granular
                permissions for team members, and keep billing separated by account.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Centralized dashboard for all client accounts
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  One-click account switching
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Granular roles: admin, editor, viewer
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Separate billing and usage tracking per client
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-primary-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                One Dashboard, All Clients
              </p>
              <p className="text-foreground mt-2">
                Streamline operations across your entire portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White Label */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="feature-card rounded-2xl p-10 text-center bg-white order-2 lg:order-1">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Your Brand, Your Platform
              </p>
              <p className="text-foreground mt-2">
                Clients never see our name — only yours.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                White Label
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Present It as Your Own Platform
              </h2>
              <p className="text-foreground text-lg mb-6">
                Add your logo, colors, and custom domain. Every email, report,
                and client portal carries your agency&apos;s brand — zero MailerSpark
                branding.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Custom branding with your logo and colors
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Custom domain for client-facing portal
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Branded email templates and reports
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Complete removal of all MailerSpark branding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Automated Reporting
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Reports That Prove Your Value — Automatically
              </h2>
              <p className="text-foreground text-lg mb-6">
                Schedule white-labeled PDF and web reports that land in your
                client&apos;s inbox every week. No manual export needed.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Automated client reports on a schedule
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Cross-client performance comparisons
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  White-labeled PDF and web reports
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Real-time analytics dashboards
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-accent-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Reports That Impress
              </p>
              <p className="text-foreground mt-2">
                Prove your value with data clients can see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Team Collaboration
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Your Whole Team, Working in Sync
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Assign roles, share asset libraries, and set up approval workflows
              so nothing goes live without a second pair of eyes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Role-Based Access",
                desc: "Admin, editor, or viewer roles to control who can do what across every client account.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                ),
              },
              {
                title: "Shared Asset Library",
                desc: "Central repository of templates, images, and content blocks your entire team can reuse.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
                ),
              },
              {
                title: "Approval Workflows",
                desc: "Set up review and sign-off processes before campaigns go live for quality control.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
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

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Grow Your Agency, Not Your Headcount
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join 800+ marketing agencies using MailerSpark to manage clients,
            deliver results, and scale without limits.
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
