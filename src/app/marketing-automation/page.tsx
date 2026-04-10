import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Automation — Set It Once. Let It Sell 24/7 | MailerSpark",
  description:
    "Visual workflow builder, smart triggers, drip campaigns, and behavioral targeting. Automate your email marketing and generate revenue on autopilot.",
};

export default function MarketingAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Marketing Automation
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
                Set it once.{" "}
                <span className="text-highlight">Let it sell 24/7.</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Build visual workflows that nurture leads, recover carts, and
                close deals — all while you focus on growing your business.
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
              <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-highlight">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Live Automation Flow
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Trigger: New Subscriber", active: true },
                  { label: "Wait: 1 Day" },
                  { label: "Send: Welcome Email" },
                  { label: "Condition: Opened?" },
                  { label: "Send: Follow-up Offer" },
                ].map((step, i) => (
                  <div key={step.label}>
                    <div
                      className={`rounded-lg p-3 flex items-center gap-3 ${
                        step.active
                          ? "bg-primary/20 border border-primary"
                          : "bg-white/10 border border-white/10"
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${step.active ? "bg-primary" : "bg-gray-400"}`} />
                      <span className="text-sm font-medium text-white">
                        {step.label}
                      </span>
                    </div>
                    {i < 4 && (
                      <div className="flex justify-center py-1">
                        <div className="w-0.5 h-4 bg-white/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Workflow Builder */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-surface rounded-2xl border border-border p-8">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Triggers", items: ["Signup", "Purchase", "Tag Added"], color: "bg-primary-light text-primary" },
                    { label: "Actions", items: ["Send Email", "Add Tag", "Wait"], color: "bg-accent-light text-accent" },
                    { label: "Conditions", items: ["If Opened", "If Clicked", "If Tag"], color: "bg-blue-50 text-blue-600" },
                  ].map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-bold text-heading mb-2 uppercase tracking-wider">
                        {group.label}
                      </p>
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className={`${group.color} rounded-lg px-2 py-1.5 text-xs font-medium text-center`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Visual Builder
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Drag, drop, and deploy automations in minutes
              </h2>
              <p className="text-foreground text-lg mb-6">
                No flowcharts on whiteboards. No code. Just connect triggers,
                actions, and conditions on a visual canvas — then flip the
                switch.
              </p>
              <ul className="space-y-3">
                {[
                  "Intuitive drag-and-drop canvas",
                  "Pre-built workflow templates for common goals",
                  "Test your flow before going live",
                  "Real-time performance visualization",
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

      {/* Triggers & Actions */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Triggers & Actions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              React to every subscriber action — automatically
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Start workflows based on behavior, then let MailerSpark handle
              the rest. The possibilities scale with your ambition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-heading mb-6 flex items-center gap-2 font-[family-name:var(--font-sora)]">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Triggers
              </h3>
              <div className="space-y-3">
                {[
                  { trigger: "Subscriber Joins List", desc: "Start nurturing the moment they opt in" },
                  { trigger: "Email Opened", desc: "Follow up when interest is highest" },
                  { trigger: "Link Clicked", desc: "Send relevant content based on behavior" },
                  { trigger: "Tag Added", desc: "Segment-driven automations" },
                  { trigger: "Date-Based", desc: "Birthdays, renewals, anniversaries" },
                ].map((item) => (
                  <div
                    key={item.trigger}
                    className="bg-surface rounded-xl p-4 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="font-semibold text-heading">{item.trigger}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-heading mb-6 flex items-center gap-2 font-[family-name:var(--font-sora)]">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Actions
              </h3>
              <div className="space-y-3">
                {[
                  { action: "Send Email", desc: "Deliver personalized messages automatically" },
                  { action: "Add/Remove Tag", desc: "Organize contacts with dynamic tagging" },
                  { action: "Move to List", desc: "Route contacts to the right audience" },
                  { action: "Update Field", desc: "Keep contact data fresh automatically" },
                  { action: "Send Webhook", desc: "Connect with any external tool or CRM" },
                ].map((item) => (
                  <div
                    key={item.action}
                    className="bg-surface rounded-xl p-4 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <p className="font-semibold text-heading">{item.action}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drip Campaigns with Timeline */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Drip Campaigns
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Nurture leads from stranger to customer — on autopilot
              </h2>
              <p className="text-foreground text-lg mb-6">
                Create perfectly timed email sequences that build trust, educate,
                and convert. Set it up once and let it work around the clock.
              </p>
              <ul className="space-y-3">
                {[
                  "Schedule emails days, weeks, or months apart",
                  "Personalize content with subscriber data",
                  "Set conversion goals to auto-exit contacts",
                  "Track revenue at every step of the sequence",
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
            <div className="bg-surface rounded-2xl border border-border p-8">
              <h3 className="font-bold text-heading mb-6 font-[family-name:var(--font-sora)]">
                Welcome Series — Timeline
              </h3>
              <div className="space-y-0">
                {[
                  { day: "Day 0", email: "Welcome Email", rate: "68% open", revenue: "$0" },
                  { day: "Day 2", email: "Getting Started Guide", rate: "52% open", revenue: "$240" },
                  { day: "Day 5", email: "Feature Highlight", rate: "44% open", revenue: "$580" },
                  { day: "Day 7", email: "Special Offer", rate: "38% open", revenue: "$1,420" },
                ].map((step, i) => (
                  <div key={step.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary-light" />
                      {i < 3 && <div className="w-0.5 flex-1 bg-primary/20" />}
                    </div>
                    <div className="pb-6 flex-1">
                      <div className="bg-white rounded-lg border border-border p-4 flex items-center gap-4">
                        <span className="text-xs font-bold text-primary bg-primary-light px-2 py-1 rounded shrink-0">
                          {step.day}
                        </span>
                        <span className="text-sm font-medium text-heading flex-1">
                          {step.email}
                        </span>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-muted">{step.rate}</p>
                          <p className="text-xs font-semibold text-primary">{step.revenue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behavioral Targeting */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Behavioral Targeting
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Send the right message at the right moment
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              React to how subscribers interact with your emails, website, and
              products — automatically.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Engagement Scoring",
                desc: "Automatically rank contacts by activity. Focus your energy on the leads most likely to convert.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: "Smart Segmentation",
                desc: "Dynamic segments that update in real-time based on behavior. Your targeting is always fresh.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Personalized Content",
                desc: "Deliver unique messaging to each subscriber based on their interests and past behavior.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="feature-card bg-white rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6">
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

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Put your marketing on autopilot — starting now
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Build your first automation in minutes. Free forever, no credit
            card required.
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
