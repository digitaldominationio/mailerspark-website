import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — CRO: Benefit headline + social proof + urgency
          ═══════════════════════════════════════════════════ */}
      <section className="relative hero-mesh overflow-hidden noise-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Social proof pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
                <div className="flex -space-x-2 avatar-stack">
                  {["#FF6B35", "#0FA573", "#3B82F6", "#8B5CF6"].map((c, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-dark flex items-center justify-center text-[8px] text-white font-bold" style={{ background: c, zIndex: 4 - i }}>
                      {["JK", "AL", "SM", "RD"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-white/70 text-sm">
                  <strong className="text-white">2,400+</strong> marketers already growing
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mb-6 font-[family-name:var(--font-sora)]">
                <span className="text-highlight-on-dark">
                  Send 10,000 emails.
                </span>
                <br />
                <span className="text-highlight-on-dark">
                  Pay under $1.
                </span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                Connect your Amazon SES, and get drag-and-drop campaigns, automation workflows, and a built-in CRM — all on a <strong className="text-white">forever-free plan</strong>.
              </p>

              {/* CTA cluster — CRO: primary + secondary + friction reducer */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <Link
                  href="#"
                  className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
                >
                  Start Free — No Card Needed
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/features"
                  className="border border-white/25 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center text-base"
                >
                  See All Features
                </Link>
              </div>
              <p className="text-white/50 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2EEAA0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Free forever &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Setup in 2 min
              </p>
            </div>

            {/* Hero Visual — Newsletter Growth Dashboard */}
            <div className="relative">
              <div className="glass-card-dark rounded-2xl p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Campaign Performance</p>
                    <h3 className="text-white/40 text-xs font-bold text-highlight-on-dark">Newsletter Growth</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                </div>
                <div className="relative h-44 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 500 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0FA573" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0FA573" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,160 C40,155 80,150 120,130 C160,110 200,100 240,85 C280,70 320,55 360,45 C400,35 440,20 480,12 L500,10 L500,180 L0,180 Z" fill="url(#heroGrad)" />
                    <path d="M0,160 C40,155 80,150 120,130 C160,110 200,100 240,85 C280,70 320,55 360,45 C400,35 440,20 480,12 L500,10" fill="none" stroke="#0FA573" strokeWidth="2.5" />
                    <circle cx="360" cy="45" r="5" fill="#0FA573" />
                    <circle cx="360" cy="45" r="10" fill="#0FA573" fillOpacity="0.2" />
                    <rect x="325" y="20" width="70" height="24" rx="12" fill="white" fillOpacity="0.15" />
                    <text x="360" y="37" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">+46%</text>
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Open Rate", value: "48.2%", change: "+12%" },
                    { label: "Click Rate", value: "8.7%", change: "+23%" },
                    { label: "Revenue", value: "$2,343", change: "+31%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-white font-bold text-lg stat-glow">{stat.value}</p>
                      <p className="text-primary text-xs font-medium">{stat.change}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-float">
                🔥 127 signups today
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LOGO STRIP — CRO: Trust through association
          ═══════════════════════════════════════════════════ */}
      <section className="trust-strip py-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted text-xs uppercase tracking-widest font-medium mb-6">Trusted by teams at</p>
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap opacity-40">
            {["Shopify Stores", "Digital Agencies", "SaaS Startups", "Ed-Tech", "E-Commerce"].map((name) => (
              <span key={name} className="text-heading font-bold text-sm md:text-base tracking-tight whitespace-nowrap">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VALUE PROPS — CRO: Benefit-first, not feature-first
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Why MailerSpark</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Every email you send<br />should <span className="text-highlight">make you money</span>
            </h2>
            <p className="text-foreground text-lg">
              Three steps to turn your email list into a revenue engine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Capture leads effortlessly", desc: "Smart popups and forms that convert 3x better than industry average. A/B tested templates ready to deploy.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", color: "bg-primary" },
              { step: "02", title: "Nurture on autopilot", desc: "Visual workflow builder with behavioral triggers. Send the right message at the exact right moment.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", color: "bg-accent" },
              { step: "03", title: "Convert & track revenue", desc: "See exactly which emails drive sales. Built-in tracking, A/B testing, and ROI attribution in real-time.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "bg-blue-500" },
            ].map((item) => (
              <div key={item.step} className="feature-card bg-white rounded-2xl p-8 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <span className="text-muted text-xs font-bold uppercase tracking-widest">Step {item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-heading mb-3 font-[family-name:var(--font-sora)]">{item.title}</h3>
                <p className="text-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COST COMPARISON — CRO: Price anchoring
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-surface relative noise-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Save 10x on email costs</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-6 font-[family-name:var(--font-sora)]">
                Stop overpaying for<br />email marketing
              </h2>
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                Most platforms charge $50–$300/month for 10K contacts. With MailerSpark + Amazon SES, you pay <strong className="text-heading">under $1 for 10,000 emails</strong>. That&apos;s not a typo.
              </p>
              {/* Price comparison — CRO: anchoring effect */}
              <div className="space-y-3 mb-8">
                {[
                  { name: "Mailchimp", price: "$100/mo", contacts: "10K contacts", strikethrough: true },
                  { name: "ConvertKit", price: "$119/mo", contacts: "10K contacts", strikethrough: true },
                  { name: "ActiveCampaign", price: "$139/mo", contacts: "10K contacts", strikethrough: true },
                ].map((comp) => (
                  <div key={comp.name} className="flex items-center justify-between bg-white/60 rounded-lg px-4 py-3 border border-border">
                    <span className="text-sm text-muted">{comp.name}</span>
                    <span className="text-sm text-muted line-through">{comp.price}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between bg-primary-light rounded-lg px-4 py-3 border-2 border-primary">
                  <span className="text-sm font-bold text-heading flex items-center gap-2">
                    MailerSpark
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">YOU SAVE 99%</span>
                  </span>
                  <span className="text-lg font-extrabold text-primary">$0/mo*</span>
                </div>
                <p className="text-xs text-muted">*Free plan includes 1,000 contacts. You only pay Amazon SES costs (~$0.10 per 1,000 emails).</p>
              </div>
              <Link href="/subscription" className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
                See Full Pricing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-[0_30px_80px_-12px_rgba(0,0,0,0.08)] border border-border p-8">
                <div className="text-center mb-8">
                  <p className="text-muted text-xs uppercase tracking-wider font-medium mb-1">Cost per 10,000 emails</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-extrabold text-heading font-[family-name:var(--font-sora)] stat-glow">$1</span>
                    <span className="text-2xl text-muted">.00</span>
                  </div>
                  <p className="text-primary text-sm font-medium mt-1">via Amazon SES</p>
                </div>
                <div className="space-y-3">
                  {["Unlimited contacts on paid plans", "Drag & drop email builder", "Automation workflows", "Built-in CRM & segmentation", "Real-time analytics", "Multiple SMTP support"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURES GRID — CRO: Scannable benefit cards
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Full Feature Suite</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Everything you need,<br /><span className="text-highlight">nothing you don&apos;t</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "AI-Powered Personalization", desc: "Dynamic content that adapts to each subscriber. Higher open rates, more clicks, more revenue.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", href: "/email-marketing" },
              { title: "Visual Automation Builder", desc: "Drag-and-drop workflows triggered by opens, clicks, purchases, or any custom event you define.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", href: "/marketing-automation" },
              { title: "Built-In CRM", desc: "Segment by behavior, tag by interest, score by engagement. Know your audience inside out.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", href: "/contact-crm" },
              { title: "Email Verification", desc: "Clean your list before you send. Reduce bounces by 98% and protect your sender reputation.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", href: "/email-verification" },
              { title: "Popup & Form Builder", desc: "Exit-intent popups, scroll triggers, timed displays. A/B test everything. No coding required.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z", href: "/popup-builder" },
              { title: "Real-Time Tracking", desc: "Opens, clicks, conversions, revenue — see it all live. Know what works before your coffee gets cold.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", href: "/features" },
            ].map((f) => (
              <Link key={f.title} href={f.href} className="feature-card bg-white rounded-2xl p-7 group block">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-heading mb-2 font-[family-name:var(--font-sora)] group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-foreground text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-4 text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INTEGRATIONS — CRO: Remove friction concern
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Plays nice with your stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
            Connects to tools you already use
          </h2>
          <p className="text-foreground text-lg mb-12 max-w-xl mx-auto">
            One-click integrations. No engineering team required.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: "Amazon SES", tag: "SMTP" },
              { name: "Zapier", tag: "5,000+ apps" },
              { name: "Pabbly", tag: "Automation" },
              { name: "WooCommerce", tag: "E-commerce" },
            ].map((tool) => (
              <div key={tool.name} className="feature-card bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-surface mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <p className="font-bold text-heading text-sm">{tool.name}</p>
                <p className="text-muted text-xs mt-0.5">{tool.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIAL — CRO: Social proof
          ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center gap-1 text-primary mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-heading leading-snug mb-8 font-[family-name:var(--font-sora)]">
            &ldquo;We switched from Mailchimp and saved <span className="text-highlight">$2,400/year</span>. Same features, better deliverability, fraction of the cost.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">SK</div>
            <div className="text-left">
              <p className="font-semibold text-heading text-sm">Sarah Kim</p>
              <p className="text-muted text-xs">Head of Growth, TechScale</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA — CRO: Last chance push
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-primary-light/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-heading mb-3 font-[family-name:var(--font-sora)]">
            Ready to send emails that actually make money?
          </h2>
          <p className="text-foreground mb-6">
            Join 2,400+ businesses already growing with MailerSpark. Free forever plan — no strings attached.
          </p>
          <Link href="#" className="cta-glow bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 text-base">
            Start Free — No Card Needed
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
