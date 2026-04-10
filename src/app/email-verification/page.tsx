import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Verification — Clean Lists = More Revenue. Period. | MailerSpark",
  description:
    "Reduce bounces from 12% to under 1%. Real-time and bulk email verification to protect your sender reputation and maximize inbox placement.",
};

export default function EmailVerificationPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Email Verification
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
                Clean lists = more revenue.{" "}
                <span className="text-highlight">Period.</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Every bounced email hurts your sender score, tanks your
                deliverability, and wastes money. MailerSpark catches bad
                addresses before they cause damage.
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Verification Results
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-white">List: Q4 Campaign</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">Complete</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-green-500/10 rounded-lg p-2">
                      <div className="text-green-400 font-bold text-lg">8,420</div>
                      <div className="text-xs text-gray-300">Valid</div>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-2">
                      <div className="text-red-400 font-bold text-lg">312</div>
                      <div className="text-xs text-gray-300">Invalid</div>
                    </div>
                    <div className="bg-yellow-500/10 rounded-lg p-2">
                      <div className="text-yellow-400 font-bold text-lg">168</div>
                      <div className="text-xs text-gray-300">Risky</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div className="flex-1">
                    <div className="h-2.5 bg-white/10 rounded-full flex overflow-hidden">
                      <div className="h-2.5 bg-green-500 w-[94%]" />
                      <div className="h-2.5 bg-red-400 w-[4%]" />
                      <div className="h-2.5 bg-yellow-400 w-[2%]" />
                    </div>
                    <p className="text-xs text-gray-300 mt-1">94.6% deliverability score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Stats */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              The Difference Is Dramatic
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              See what verification does to your numbers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-8">
              <h3 className="text-lg font-bold text-red-600 mb-6 flex items-center gap-2 font-[family-name:var(--font-sora)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Without Verification
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Bounce Rate", value: "12.4%" },
                  { label: "Deliverability", value: "82.1%" },
                  { label: "Sender Score", value: "62/100" },
                  { label: "Spam Complaints", value: "High" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white rounded-lg p-3 border border-red-200"
                  >
                    <span className="text-sm text-foreground">{item.label}</span>
                    <span className="text-sm font-bold text-red-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-primary-light/50 p-8">
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2 font-[family-name:var(--font-sora)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                With MailerSpark Verification
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Bounce Rate", value: "0.8%", improvement: "-93%" },
                  { label: "Deliverability", value: "99.2%", improvement: "+21%" },
                  { label: "Sender Score", value: "95/100", improvement: "+53%" },
                  { label: "Spam Complaints", value: "Minimal", improvement: "" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white rounded-lg p-3 border border-primary/20"
                  >
                    <span className="text-sm text-foreground">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary">{item.value}</span>
                      {item.improvement && (
                        <span className="text-xs bg-primary-light text-primary px-1.5 py-0.5 rounded font-medium">
                          {item.improvement}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Verification */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-border p-8">
                <h3 className="font-bold text-heading mb-4 font-[family-name:var(--font-sora)]">Real-time Check</h3>
                <div className="space-y-3">
                  <div className="bg-surface rounded-lg p-3 border border-border">
                    <p className="text-xs text-muted mb-1">Email Address</p>
                    <p className="text-sm font-mono text-heading">user@example.com</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { check: "Syntax Valid", status: "pass" },
                      { check: "Domain Exists", status: "pass" },
                      { check: "MX Records Found", status: "pass" },
                      { check: "Mailbox Exists", status: "pass" },
                      { check: "Not Disposable", status: "pass" },
                      { check: "Not a Catch-All", status: "warn" },
                    ].map((item) => (
                      <div
                        key={item.check}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-foreground">{item.check}</span>
                        <span
                          className={`font-medium flex items-center gap-1 ${
                            item.status === "pass"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }`}
                        >
                          {item.status === "pass" ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          )}
                          {item.status === "pass" ? "Pass" : "Warning"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary-light rounded-lg p-3 text-center border border-primary/20">
                    <p className="text-sm font-bold text-primary">Result: Valid — Safe to Send</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Real-Time Verification
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Catch bad emails before they enter your list
              </h2>
              <p className="text-foreground text-lg mb-6">
                Verify addresses instantly as they hit your signup forms. Block
                disposable and invalid emails at the point of capture — before
                they pollute your data.
              </p>
              <ul className="space-y-3">
                {[
                  "Verify emails in under 1 second",
                  "Integrate with signup forms and landing pages",
                  "Block disposable and temporary emails",
                  "Simple REST API with full documentation",
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

      {/* Bulk Verification */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Bulk Verification
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Clean your entire list in minutes, not days
              </h2>
              <p className="text-foreground text-lg mb-6">
                Upload up to 1 million emails per batch. Get a detailed,
                downloadable report with actionable results — valid, invalid,
                risky, and disposable.
              </p>
              <ul className="space-y-3">
                {[
                  "Verify up to 1M emails per upload",
                  "Upload CSV or paste addresses directly",
                  "Detailed downloadable reports",
                  "Automatic duplicate removal",
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
              <h3 className="font-bold text-heading mb-4 font-[family-name:var(--font-sora)]">Bulk Upload</h3>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                  <svg className="w-10 h-10 text-muted mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm font-medium text-heading mb-1">
                    Drop your CSV file here
                  </p>
                  <p className="text-xs text-muted">or click to browse</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-heading">contacts_q4.csv</span>
                    <span className="text-xs text-primary font-medium">Processing...</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full">
                    <div className="h-2 bg-primary rounded-full w-3/4 transition-all" />
                  </div>
                  <p className="text-xs text-muted mt-1">7,500 / 10,000 emails verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverability Improvement */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Four layers of verification. One clean list.
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Every email passes through four checks before it reaches your
              list — so you only send to real, active inboxes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Syntax Check",
                desc: "Catch typos and formatting errors instantly.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: "Domain Check",
                desc: "Verify the domain exists and accepts mail.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                ),
              },
              {
                title: "Mailbox Check",
                desc: "Confirm the mailbox is active and accepting.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Risk Assessment",
                desc: "Detect disposable, role-based, and catch-all addresses.",
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="feature-card bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Clean your list today. Watch revenue climb tomorrow.
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Protect your sender reputation and maximize inbox placement.
            Verification pays for itself on the first send.
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
