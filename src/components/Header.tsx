"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about-us" },
  {
    label: "Features",
    href: "#",
    children: [
      { label: "Email Marketing", href: "/email-marketing", desc: "Drag & drop campaigns" },
      { label: "Marketing Automation", href: "/marketing-automation", desc: "Visual workflow builder" },
      { label: "Contact CRM", href: "/contact-crm", desc: "Manage & segment contacts" },
      { label: "Email Verification", href: "/email-verification", desc: "Reduce bounces instantly" },
      { label: "Popup Builder", href: "/popup-builder", desc: "Convert visitors to leads" },
      { label: "Lead Webform", href: "/lead-webform", desc: "Embed forms anywhere" },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "E-commerce", href: "/ecommerce", desc: "Cart recovery & product emails" },
      { label: "Education", href: "/education", desc: "Student engagement tools" },
      { label: "Marketing Agencies", href: "/marketing-agencies", desc: "White-label & multi-client" },
      { label: "Sales Teams", href: "/sales-teams", desc: "Lead scoring & sequences" },
    ],
  },
  { label: "Pricing", href: "/subscription" },
  {
    label: "Integrations",
    href: "#",
    children: [
      { label: "Zapier", href: "/zapier-integration", desc: "5,000+ app connections" },
      { label: "Pabbly Connect", href: "/pabbly-integration", desc: "Affordable automation" },
      { label: "WooCommerce", href: "/woo-commerce-integration", desc: "Sync your store" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showBanner, setShowBanner] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Urgency Banner — CRO: scarcity + social proof */}
      {showBanner && (
        <div className="announcement-bar text-white py-2.5 px-4 text-sm relative overflow-hidden">
          <div className="flex items-center justify-center gap-3 relative z-10">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="font-medium">
                127 people signed up today
              </span>
              <span className="text-white/50 mx-1">·</span>
              <span className="text-white/80">Lifetime plans from <strong>$129</strong> — limited spots</span>
            </span>
            <Link
              href="/lifetime"
              className="bg-white text-dark px-4 py-1 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Claim Your Spot →
            </Link>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L12 14L21 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 8V18H21V8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-heading tracking-tight font-[family-name:var(--font-sora)]">
                MailerSpark
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary-light/50"
                  >
                    {item.label}
                    {item.children && (
                      <svg className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-white rounded-xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] border border-border/50 py-2 min-w-[280px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col px-4 py-2.5 hover:bg-primary-light/30 transition-colors group/item"
                          >
                            <span className="text-sm font-medium text-heading group-hover/item:text-primary transition-colors">{child.label}</span>
                            <span className="text-xs text-muted">{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA — CRO: benefit-focused, not generic */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/subscription" className="text-[13px] font-medium text-foreground hover:text-primary transition-colors">
                View Pricing
              </Link>
              <Link
                href="#"
                className="cta-glow bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300 inline-flex items-center gap-1.5"
              >
                Start Free — No Card Needed
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors" aria-label="Toggle menu">
              <svg className="w-5 h-5 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border py-4 px-4 shadow-lg">
            {navItems.map((item) => (
              <div key={item.label} className="mb-1">
                <Link href={item.href} className="block py-2.5 px-3 text-sm font-medium text-heading hover:text-primary hover:bg-primary-light/30 rounded-lg transition-colors" onClick={() => !item.children && setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block py-2 px-3 text-sm text-muted hover:text-primary rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <Link href="/subscription" className="block text-center py-2.5 text-sm font-medium text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                View Pricing
              </Link>
              <Link href="#" className="block bg-primary text-white text-center py-3 rounded-lg text-sm font-semibold" onClick={() => setMobileOpen(false)}>
                Start Free — No Card Needed
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
