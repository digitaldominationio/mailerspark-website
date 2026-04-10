import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Email Marketing", href: "/email-marketing" },
    { label: "Marketing Automation", href: "/marketing-automation" },
    { label: "Contact CRM", href: "/contact-crm" },
    { label: "Popup Builder", href: "/popup-builder" },
    { label: "Lead Webform", href: "/lead-webform" },
    { label: "Email Verification", href: "/email-verification" },
  ],
  Solutions: [
    { label: "E-commerce", href: "/ecommerce" },
    { label: "Education", href: "/education" },
    { label: "Marketing Agencies", href: "/marketing-agencies" },
    { label: "Sales Teams", href: "/sales-teams" },
  ],
  Resources: [
    { label: "Pricing", href: "/subscription" },
    { label: "Lifetime Deal", href: "/lifetime" },
    { label: "FAQs", href: "/faqs" },
    { label: "Support", href: "/support" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Cookies Policy", href: "/cookies-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export default function Footer() {
  return (
    <footer>
      {/* ─── CTA SECTION — CRO: Final conversion push with social proof ─── */}
      <section className="relative hero-mesh py-20 lg:py-28 overflow-hidden noise-bg">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-white/80 text-sm font-medium">2,400+ businesses already growing with MailerSpark</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-sora)] tracking-tight">
            <span className="text-highlight-on-dark"> Your first 1,000 emails</span>
            <br />
            <span className="text-highlight-on-dark">are on us</span>
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            No credit card. No time limit. No hidden fees. Just connect your SMTP and start sending in under 3 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link
              href="#"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
            >
              Create Free Account
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/contact-us"
              className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              Talk to Sales
            </Link>
          </div>
          {/* Trust signals */}
          <div className="flex items-center justify-center gap-6 text-white/55 text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              SOC 2 Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              GDPR Ready
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              99.9% Uptime
            </span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER LINKS ─── */}
      <div className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L12 14L21 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 8V18H21V8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-sora)]">MailerSpark</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                The email marketing platform that pays for itself. Send campaigns, automate workflows, and grow revenue — all for less than a cup of coffee.
              </p>
              <div className="flex gap-3">
                {[
                  { label: "X", href: "https://x.com/mailerspark" },
                  { label: "in", href: "https://www.linkedin.com/company/mailerspark" },
                  { label: "ig", href: "https://www.instagram.com/mailer_spark/" },
                  { label: "fb", href: "https://www.facebook.com/mailerspark/" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 flex items-center justify-center text-xs text-white/50 transition-all" aria-label={s.label}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4 text-highlight">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/50 text-sm hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <span>&copy; {new Date().getFullYear()} Trackepay Fintech. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy</Link>
              <Link href="/terms-conditions" className="hover:text-white/60 transition-colors">Terms</Link>
              <Link href="/cookies-policy" className="hover:text-white/60 transition-colors">Cookies</Link>
              <Link href="/gdpr" className="hover:text-white/60 transition-colors">GDPR</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
