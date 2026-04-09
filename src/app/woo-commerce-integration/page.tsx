import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WooCommerce Integration - MailerSpark | Turn Abandoned Carts into Completed Orders",
  description:
    "Integrate MailerSpark with WooCommerce. Sync customers, recover abandoned carts, send product emails, and track revenue -- all on autopilot.",
};

const features = [
  {
    title: "Sync Customers Automatically",
    description:
      "Every new customer, registration, or checkout is captured and added to your email lists in real time. No manual imports. No lost leads. Map WooCommerce fields to MailerSpark custom fields and segment by purchase history.",
    points: [
      "Auto-sync on new orders and registrations",
      "Map WooCommerce fields to custom fields",
      "Segment by purchase history and customer tags",
      "One-click import of existing customers",
    ],
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Abandoned Cart Recovery",
    description:
      "68% of online shopping carts are abandoned. MailerSpark automatically sends personalized reminder emails with dynamic product images and cart details to bring customers back and complete their purchase.",
    points: [
      "Automated multi-step recovery sequences",
      "Dynamic product images and cart details",
      "Customizable timing and frequency",
      "Track recovery rate and revenue recovered",
    ],
    iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
  },
  {
    title: "Product & Promotional Emails",
    description:
      "Create stunning product emails using your WooCommerce catalog data. Feature new arrivals, bestsellers, and personalized recommendations based on each customer's purchase and browsing history.",
    points: [
      "Pull product data directly from WooCommerce",
      "Dynamic product recommendation blocks",
      "New arrival and back-in-stock notifications",
      "Coupon code integration and tracking",
    ],
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Revenue Tracking & Analytics",
    description:
      "See exactly how much revenue each email campaign generates. Track conversions, measure ROI, and optimize your strategy with data-driven insights that tie directly to your WooCommerce sales.",
    points: [
      "Revenue attribution per campaign and email",
      "Conversion tracking with UTM parameters",
      "Customer lifetime value reporting",
      "Visual dashboards and exportable reports",
    ],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { value: "68%", label: "Average cart abandonment rate you can recover from" },
  { value: "45%", label: "Open rate on cart recovery emails" },
  { value: "10x", label: "Average ROI on email marketing" },
  { value: "30%", label: "Revenue increase with email automation" },
];

export default function WooCommerceIntegrationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            WOOCOMMERCE INTEGRATION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] text-heading leading-tight mb-6">
            Turn abandoned carts into{" "}
            <span className="text-highlight">completed orders.</span>
          </h1>
          <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
            Seamlessly integrate MailerSpark with WooCommerce to sync customers,
            recover abandoned carts, send product emails, and track revenue --
            all on autopilot. Start recovering lost sales today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Install WooCommerce Plugin
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="#features"
              className="border border-border text-foreground px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Stats Section */}
      <section className="hero-mesh py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-sora)] text-primary stat-glow mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section id="features" className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              FEATURES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
              Everything you need for WooCommerce email marketing
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              From customer sync to revenue tracking, MailerSpark has all the
              tools to grow your WooCommerce store with email.
            </p>
          </div>
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] text-heading mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-foreground text-lg mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 shrink-0 mt-0.5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-surface rounded-2xl p-8 lg:p-12 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-heading text-sm">
                          {feature.title}
                        </div>
                        <div className="text-xs text-muted">
                          MailerSpark + WooCommerce
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {feature.points.slice(0, 3).map((point, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          <span className="text-sm text-foreground">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <div className="flex gap-1 justify-center mb-4 text-accent">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-foreground text-lg mb-6 italic">
              &ldquo;We recovered $14,000 in abandoned cart revenue last quarter
              alone. The WooCommerce integration paid for our MailerSpark
              lifetime deal in the first week.&rdquo;
            </p>
            <p className="text-heading font-semibold">Marcus Williams</p>
            <p className="text-muted text-sm">E-commerce Director, StyleHQ</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-white mb-6">
            Stop leaving money on the table
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of WooCommerce store owners who use MailerSpark to
            recover abandoned carts, drive repeat purchases, and build lasting
            customer relationships through email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Started Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/subscription"
              className="border border-gray-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Free plan available. No credit card required. Install in 2 minutes.
          </p>
        </div>
      </section>
    </>
  );
}
