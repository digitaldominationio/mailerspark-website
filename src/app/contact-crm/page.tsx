import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CRM — Know Your Audience. Sell Smarter. | MailerSpark",
  description:
    "Manage, segment, and understand every subscriber. Tags, lists, smart segmentation, import/export — all built into your email marketing platform.",
};

export default function ContactCrmPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Contact CRM
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
                Know your audience.{" "}
                <span className="text-highlight">Sell smarter.</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                A CRM built for email marketers — not salespeople. Understand
                every subscriber by name, behavior, and value, then target them
                with precision.
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Contact Overview
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Sarah Johnson", email: "sarah@example.com", tag: "VIP", value: "$2,340" },
                  { name: "Mike Chen", email: "mike@example.com", tag: "Lead", value: "$0" },
                  { name: "Emily Davis", email: "emily@example.com", tag: "Customer", value: "$890" },
                  { name: "Alex Smith", email: "alex@example.com", tag: "New", value: "$0" },
                ].map((contact) => (
                  <div
                    key={contact.name}
                    className="bg-white/10 rounded-lg p-3 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                      {contact.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">
                        {contact.name}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{contact.email}</p>
                    </div>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium shrink-0">
                      {contact.tag}
                    </span>
                    <span className="text-xs text-gray-300 font-semibold shrink-0">
                      {contact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Management */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-surface rounded-2xl border border-border p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="font-bold text-heading text-sm">Contact Profile</span>
                    <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">Active</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "First Name", value: "Sarah" },
                      { label: "Last Name", value: "Johnson" },
                      { label: "Email", value: "sarah@co.com" },
                      { label: "Phone", value: "+1 234 567" },
                      { label: "Company", value: "Acme Inc." },
                      { label: "Lifetime Value", value: "$2,340" },
                    ].map((field) => (
                      <div key={field.label}>
                        <p className="text-xs text-muted">{field.label}</p>
                        <p className="text-sm font-medium text-heading">{field.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {["Newsletter", "VIP", "Q4 Campaign"].map((tag) => (
                      <span key={tag} className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Contact Management
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Every subscriber has a story. Now you can read it.
              </h2>
              <p className="text-foreground text-lg mb-6">
                Store contact data, engagement history, tags, and custom fields
                in one place. Know exactly who to target and when.
              </p>
              <ul className="space-y-3">
                {[
                  "Unlimited custom fields for detailed profiles",
                  "Full engagement history and activity timeline",
                  "Automatic duplicate detection and merging",
                  "GDPR-compliant data management",
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

      {/* Segmentation */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Advanced Segmentation
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Send the right message to the right people, every time
              </h2>
              <p className="text-foreground text-lg mb-6">
                Build laser-targeted segments using any combination of data,
                behavior, and engagement. Dynamic segments update automatically
                so your targeting is always fresh.
              </p>
              <ul className="space-y-3">
                {[
                  "Combine conditions with AND/OR logic",
                  "Segment by engagement, location, or custom fields",
                  "Dynamic segments that update in real-time",
                  "Pre-built templates to get started fast",
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
            <div className="bg-white rounded-2xl border border-border p-8">
              <h3 className="font-bold text-heading mb-4 font-[family-name:var(--font-sora)]">Segment Builder</h3>
              <div className="space-y-3">
                <div className="bg-primary-light rounded-lg p-3 border-2 border-primary">
                  <p className="text-xs text-muted mb-1">WHERE</p>
                  <p className="text-sm font-medium text-heading">
                    Tag <span className="text-primary font-semibold">is</span> &quot;VIP Customer&quot;
                  </p>
                </div>
                <div className="text-center text-xs font-bold text-primary">AND</div>
                <div className="bg-surface rounded-lg p-3 border border-border">
                  <p className="text-xs text-muted mb-1">AND</p>
                  <p className="text-sm font-medium text-heading">
                    Last email opened <span className="text-primary font-semibold">within</span> 30 days
                  </p>
                </div>
                <div className="text-center text-xs font-bold text-primary">AND</div>
                <div className="bg-surface rounded-lg p-3 border border-border">
                  <p className="text-xs text-muted mb-1">AND</p>
                  <p className="text-sm font-medium text-heading">
                    Location <span className="text-primary font-semibold">is</span> United States
                  </p>
                </div>
                <div className="bg-primary-light rounded-lg p-3 text-center">
                  <p className="text-sm font-bold text-primary">2,847 contacts match this segment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags & Lists */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Organization
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Tags & Lists that make targeting effortless
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Group subscribers by interest, source, behavior, or any criteria
              that matters to your bottom line.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="feature-card bg-surface rounded-2xl p-8">
              <h3 className="text-xl font-bold text-heading mb-4 flex items-center gap-2 font-[family-name:var(--font-sora)]">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Tags
              </h3>
              <p className="text-foreground mb-4">
                Apply unlimited tags for granular organization. Track interests,
                lead sources, and behavior with precision.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "VIP", "Newsletter", "Webinar Attendee", "Free Trial",
                  "Purchased", "Inactive", "Blog Subscriber", "Enterprise",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-light text-primary text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="feature-card bg-surface rounded-2xl p-8">
              <h3 className="text-xl font-bold text-heading mb-4 flex items-center gap-2 font-[family-name:var(--font-sora)]">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Lists
              </h3>
              <p className="text-foreground mb-4">
                Group contacts for targeted campaigns. Manage multiple products
                or brands from a single account.
              </p>
              <div className="space-y-3">
                {[
                  { name: "Main Newsletter", count: "12,450" },
                  { name: "Product Updates", count: "8,320" },
                  { name: "Webinar Leads", count: "3,180" },
                  { name: "Enterprise Prospects", count: "1,240" },
                ].map((list) => (
                  <div
                    key={list.name}
                    className="flex items-center justify-between bg-white rounded-lg p-3 border border-border"
                  >
                    <span className="text-sm font-medium text-heading">{list.name}</span>
                    <span className="text-sm text-muted">{list.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import/Export */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Import & Export
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Bring your contacts in. Keep your freedom out.
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Import from anywhere, export anytime. Your data is always yours —
              no lock-in, no restrictions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CSV/Excel Import",
                desc: "Upload contacts with smart field mapping and automatic duplicate detection.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Copy & Paste",
                desc: "Paste a list of emails and we handle the rest. Perfect for quick imports from any source.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                ),
              },
              {
                title: "One-Click Export",
                desc: "Export your entire database in CSV format anytime. Zero restrictions, zero hoops.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="feature-card bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-6">
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
            Stop sending blind. Start selling smart.
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Organize your contacts, target with precision, and watch your
            revenue-per-subscriber climb.
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
