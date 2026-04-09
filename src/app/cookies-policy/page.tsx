import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | MailerSpark",
  description:
    "Understand how MailerSpark uses cookies and similar technologies to improve your experience on our platform.",
};

export default function CookiesPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="mb-6">
            <Link
              href="/"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-muted mx-2">/</span>
            <span className="text-sm text-foreground">Cookies Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-heading font-[family-name:var(--font-sora)] mb-4">
            Cookies Policy
          </h1>
          <p className="text-muted text-lg">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-12">
          <p className="text-foreground leading-relaxed mb-6">
            MailerSpark, operated by Trackepay Fintech, uses cookies and similar
            tracking technologies on our website and platform. This Cookies
            Policy explains what cookies are, how we use them, and how you can
            manage your preferences.
          </p>

          {/* 1. What Are Cookies */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            1. What Are Cookies
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Cookies are small text files that are stored on your device
            (computer, tablet, or mobile phone) when you visit a website. They
            are widely used to make websites work more efficiently, provide a
            better user experience, and supply information to website owners.
            Cookies can be &quot;persistent&quot; (remaining on your device
            until they expire or are deleted) or &quot;session&quot; cookies
            (deleted when you close your browser).
          </p>

          {/* 2. Types of Cookies We Use */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            2. Types of Cookies We Use
          </h2>

          <h3 className="text-lg font-semibold text-heading mb-3 mt-6 font-[family-name:var(--font-sora)]">
            Necessary Cookies
          </h3>
          <p className="text-foreground leading-relaxed mb-4">
            These cookies are essential for the operation of our website and
            platform. They enable core functionality such as security,
            authentication, and session management. Without these cookies, the
            Service cannot function properly. These cookies do not require your
            consent as they are strictly necessary.
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>User authentication and session tokens</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Security and fraud prevention</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Load balancing and server routing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Cookie consent preferences</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-heading mb-3 mt-6 font-[family-name:var(--font-sora)]">
            Analytics Cookies
          </h3>
          <p className="text-foreground leading-relaxed mb-4">
            These cookies help us understand how visitors interact with our
            website by collecting and reporting information anonymously. They
            allow us to measure and improve the performance of our platform.
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Page views and navigation patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Feature usage and engagement metrics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Error tracking and performance monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>A/B testing and platform optimization</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-heading mb-3 mt-6 font-[family-name:var(--font-sora)]">
            Marketing Cookies
          </h3>
          <p className="text-foreground leading-relaxed mb-4">
            These cookies are used to track visitors across websites and display
            ads that are relevant and engaging. They may also be used to limit
            the number of times you see an advertisement and to measure the
            effectiveness of advertising campaigns.
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Retargeting and remarketing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Social media sharing and integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Conversion tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>Personalized advertising preferences</span>
            </li>
          </ul>

          {/* 3. Managing Cookies */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            3. Managing Cookies
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            You have the right to decide whether to accept or reject cookies.
            You can manage your cookie preferences in the following ways:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Browser Settings:</strong> Most web browsers allow you
                to control cookies through their settings. You can set your
                browser to refuse cookies, delete existing cookies, or alert you
                when a cookie is being set. Note that disabling cookies may
                affect the functionality of our Service.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Cookie Consent Banner:</strong> When you first visit our
                website, you will see a cookie consent banner that allows you to
                accept or customize your cookie preferences.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Opt-Out Links:</strong> For analytics and marketing
                cookies, you can use opt-out mechanisms provided by third-party
                services such as Google Analytics Opt-Out Browser Add-On.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Please note that if you choose to disable cookies, some features of
            our platform may not work as intended.
          </p>

          {/* 4. Third-Party Cookies */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            4. Third-Party Cookies
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            In addition to our own cookies, we may also use cookies set by third
            parties to help us analyze website traffic, understand user
            behavior, and deliver relevant advertisements. These third parties
            include:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Google Analytics:</strong> Used to collect anonymized
                data about website usage and visitor behavior.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Payment Processors:</strong> Used to facilitate secure
                payment transactions and fraud detection.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Social Media Platforms:</strong> Used to enable social
                sharing features and track referral traffic.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Advertising Networks:</strong> Used for remarketing and
                displaying relevant advertisements across the web.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            These third parties have their own privacy and cookie policies, and
            we encourage you to review them. We do not have control over
            third-party cookies.
          </p>
          <p className="text-foreground leading-relaxed">
            If you have any questions about our use of cookies, please contact
            us at{" "}
            <a
              href="mailto:support@mailerspark.com"
              className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
            >
              support@mailerspark.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
