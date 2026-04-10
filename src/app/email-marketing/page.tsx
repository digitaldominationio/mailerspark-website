import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing — Campaigns That Sell for You | MailerSpark",
  description:
    "Drag-and-drop builder, 100+ templates, A/B testing, and real-time analytics. Launch high-converting email campaigns in minutes. Free forever plan.",
};

export default function EmailMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Email Marketing
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)]">
               <span className="text-highlight">Campaigns that write themselves —{" "}</span> 
                <span className="text-highlight">and sell for you</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Design beautiful emails in minutes, test what converts, and
                watch revenue roll in. No design skills. No guesswork. Just
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  href="/features"
                  className="border border-gray-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
                >
                  All Features
                </Link>
              </div>
            </div>
            <div className="glass-card-dark rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="font-bold text-white">Campaign Dashboard</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { value: "98.2%", label: "Delivered" },
                      { value: "42.5%", label: "Opened" },
                      { value: "8.3%", label: "Clicked" },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/10 rounded-lg p-2">
                        <div className="text-primary font-bold text-lg">{m.value}</div>
                        <div className="text-xs text-gray-300">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <div className="flex-1">
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className="h-2 bg-primary rounded-full w-3/4" />
                    </div>
                    <p className="text-xs text-gray-300 mt-1">Revenue goal: 75% achieved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drag & Drop Builder */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-surface rounded-2xl border border-border p-8">
              <div className="space-y-3">
                {[
                  { label: "Header Block", active: false },
                  { label: "Image Block", active: false },
                  { label: "Text Block", active: true },
                  { label: "Button Block", active: false },
                  { label: "Footer Block", active: false },
                ].map((block) => (
                  <div
                    key={block.label}
                    className={`rounded-lg p-3 border-2 border-dashed flex items-center gap-3 ${
                      block.active
                        ? "border-primary bg-primary-light"
                        : "border-border"
                    }`}
                  >
                    <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="text-sm font-medium text-heading">{block.label}</span>
                    <span className="ml-auto text-xs text-muted">drag to reorder</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Visual Builder
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Build emails that look like a designer made them
              </h2>
              <p className="text-foreground text-lg mb-6">
                Drag, drop, and publish. Our visual editor gives you pixel-perfect
                control without writing a single line of code.
              </p>
              <ul className="space-y-3">
                {[
                  "Mobile-responsive layouts by default",
                  "Rich content blocks: images, buttons, videos",
                  "Real-time preview across devices",
                  "Save and reuse your own templates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Templates Library
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                100+ proven templates so you never start from scratch
              </h2>
              <p className="text-foreground text-lg mb-6">
                Every template is conversion-tested and fully customizable.
                Pick one, tweak it, and send — in under 10 minutes.
              </p>
              <ul className="space-y-3">
                {[
                  "Categorized by industry and goal",
                  "Fully customizable to match your brand",
                  "Optimized for mobile and dark mode",
                  "Save custom templates for your team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Newsletter", color: "bg-blue-50 border-blue-200" },
                { label: "Promotion", color: "bg-accent-light border-accent/30" },
                { label: "Welcome", color: "bg-primary-light border-primary/30" },
                { label: "Product Launch", color: "bg-purple-50 border-purple-200" },
              ].map((tpl) => (
                <div
                  key={tpl.label}
                  className={`${tpl.color} border rounded-xl p-6 text-center feature-card`}
                >
                  <svg className="w-8 h-8 text-muted mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <p className="text-sm font-semibold text-heading">{tpl.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A/B Testing */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-surface rounded-2xl border border-border p-8">
              <h3 className="font-bold text-heading mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                A/B Test Results
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-heading">Variant A</span>
                    <span className="text-sm bg-surface px-2 py-1 rounded text-foreground">
                      Subject Line A
                    </span>
                  </div>
                  <div className="h-3 bg-surface rounded-full">
                    <div className="h-3 bg-muted rounded-full w-2/5" />
                  </div>
                  <p className="text-sm text-foreground mt-1">Open rate: 38.2%</p>
                </div>
                <div className="rounded-lg border-2 border-primary p-4 bg-primary-light">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-heading">Variant B</span>
                    <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded font-medium">
                      Winner &middot; +43% lift
                    </span>
                  </div>
                  <div className="h-3 bg-primary/20 rounded-full">
                    <div className="h-3 bg-primary rounded-full w-3/5" />
                  </div>
                  <p className="text-sm text-foreground mt-1">Open rate: 54.7%</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                A/B Testing
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Stop guessing. Let data pick the winner.
              </h2>
              <p className="text-foreground text-lg mb-6">
                Test subject lines, content, and send times. MailerSpark
                automatically sends the winning version to the rest of your
                list — so every campaign improves itself.
              </p>
              <ul className="space-y-3">
                {[
                  "Test subject lines, content, and send times",
                  "Automatic winner selection with statistical confidence",
                  "Flexible audience splits (50/50, 80/20, etc.)",
                  "Revenue-based winner detection, not just opens",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Analytics & Reporting
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              See exactly which emails drive revenue
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Track opens, clicks, conversions, and revenue per campaign.
              Understand what works, double down, and grow faster.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Open Rate", value: "42.5%", change: "+12%", color: "text-primary" },
              { label: "Click Rate", value: "8.3%", change: "+8%", color: "text-primary" },
              { label: "Conversion", value: "3.2%", change: "+23%", color: "text-accent" },
              { label: "Revenue", value: "$12.4K", change: "+31%", color: "text-accent" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="feature-card bg-white rounded-2xl p-6 text-center"
              >
                <div className={`text-3xl font-bold ${metric.color} mb-1 font-[family-name:var(--font-sora)]`}>
                  {metric.value}
                </div>
                <p className="text-heading font-semibold text-sm mb-1">{metric.label}</p>
                <span className="text-xs text-primary font-medium bg-primary-light px-2 py-0.5 rounded-full">
                  {metric.change} vs last month
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Your next campaign could be your best one yet
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who use MailerSpark to create, test,
            and optimize email campaigns that actually sell.
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
