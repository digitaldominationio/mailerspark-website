import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MailerSpark",
  description:
    "Learn how MailerSpark collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-sm text-foreground">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-heading font-[family-name:var(--font-sora)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted text-lg">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-12">
          <p className="text-foreground leading-relaxed mb-6">
            MailerSpark (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
            operated by Trackepay Fintech, is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our email marketing
            platform and related services.
          </p>

          {/* 1. Information We Collect */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            1. Information We Collect
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            We collect information that you provide directly to us, as well as
            information collected automatically when you use our services:
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Account Information:</strong> Name, email address, phone
                number, company name, and billing details when you create an
                account or subscribe to our services.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Contact Lists:</strong> Email addresses and associated
                data that you upload or import into your MailerSpark account for
                the purpose of sending email campaigns.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Usage Data:</strong> Information about how you interact
                with our platform, including pages visited, features used,
                campaign performance metrics, and session duration.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Device &amp; Technical Data:</strong> IP address, browser
                type, operating system, device identifiers, and referring URLs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Communication Data:</strong> Records of your
                correspondence with our support team, feedback, and survey
                responses.
              </span>
            </li>
          </ul>

          {/* 2. How We Use Your Information */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            2. How We Use Your Information
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                To provide, maintain, and improve our email marketing platform
                and services.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                To process your transactions, manage your subscription, and send
                you billing-related communications.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                To personalize your experience and deliver content and features
                relevant to your interests.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                To send you important updates about service changes, security
                alerts, and administrative messages.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                To monitor and analyze usage trends, troubleshoot technical
                issues, and enhance platform security.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                To comply with legal obligations and enforce our Terms &amp;
                Conditions.
              </span>
            </li>
          </ul>

          {/* 3. Data Sharing */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            3. Data Sharing
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            We do not sell your personal information. We may share your data in
            the following circumstances:
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Service Providers:</strong> We work with trusted
                third-party vendors who assist us in operating our platform,
                processing payments, and delivering emails. These providers are
                contractually obligated to protect your data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Legal Compliance:</strong> We may disclose your
                information if required by law, regulation, legal process, or
                governmental request.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of the transaction.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>With Your Consent:</strong> We may share your information
                for any other purpose with your explicit consent.
              </span>
            </li>
          </ul>

          {/* 4. Cookies */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            4. Cookies
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            We use cookies and similar tracking technologies to enhance your
            experience on our platform. Cookies help us remember your
            preferences, understand how you use our services, and improve
            performance. You can manage your cookie preferences through your
            browser settings. For more details, please refer to our{" "}
            <Link
              href="/cookies-policy"
              className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
            >
              Cookies Policy
            </Link>
            .
          </p>

          {/* 5. Data Retention */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            5. Data Retention
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            We retain your personal information for as long as your account is
            active or as needed to provide you with our services. If you close
            your account, we will delete or anonymize your data within 90 days,
            unless we are required to retain it for legal, regulatory, or
            legitimate business purposes. Campaign analytics and aggregated
            usage data may be retained in anonymized form indefinitely.
          </p>

          {/* 6. Your Rights */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            6. Your Rights
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Rectification:</strong> Request correction of any
                inaccurate or incomplete data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Erasure:</strong> Request deletion of your personal data,
                subject to legal retention requirements.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Data Portability:</strong> Request your data in a
                structured, machine-readable format.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Objection:</strong> Object to the processing of your
                data for certain purposes, including direct marketing.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Withdraw Consent:</strong> Where processing is based on
                consent, you may withdraw it at any time without affecting prior
                processing.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            To exercise any of these rights, please contact us using the details
            below.
          </p>

          {/* 7. Contact Us */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            7. Contact Us
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Company:</strong> Trackepay Fintech (operating as
                MailerSpark)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@mailerspark.com"
                  className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  support@mailerspark.com
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Website:</strong>{" "}
                <a
                  href="https://mailerspark.com"
                  className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  https://mailerspark.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
