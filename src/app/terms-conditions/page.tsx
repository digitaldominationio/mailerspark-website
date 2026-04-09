import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | MailerSpark",
  description:
    "Read the terms and conditions governing the use of MailerSpark's email marketing platform and services.",
};

export default function TermsConditionsPage() {
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
            <span className="text-sm text-foreground">
              Terms &amp; Conditions
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-heading font-[family-name:var(--font-sora)] mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted text-lg">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-12">
          <p className="text-foreground leading-relaxed mb-6">
            Welcome to MailerSpark, operated by Trackepay Fintech. These Terms
            &amp; Conditions (&quot;Terms&quot;) govern your access to and use
            of our email marketing platform, website, and related services
            (collectively, the &quot;Service&quot;). By accessing or using the
            Service, you agree to be bound by these Terms.
          </p>

          {/* 1. Acceptance of Terms */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            By creating an account or using any part of the Service, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and our Privacy Policy. If you do not agree with any
            part of these Terms, you must not use the Service. We reserve the
            right to update or modify these Terms at any time, and your
            continued use of the Service after such changes constitutes
            acceptance of the updated Terms.
          </p>

          {/* 2. Account Registration */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            2. Account Registration
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            To use certain features of the Service, you must register for an
            account. When registering, you agree to:
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                Provide accurate, current, and complete information during the
                registration process.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                Maintain and promptly update your account information to keep it
                accurate and complete.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                Keep your password secure and confidential. You are responsible
                for all activity that occurs under your account.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                Notify us immediately of any unauthorized use of your account or
                any other security breach.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                Be at least 18 years of age or the age of majority in your
                jurisdiction to create an account.
              </span>
            </li>
          </ul>

          {/* 3. Acceptable Use */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            3. Acceptable Use
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            You agree to use the Service only for lawful purposes and in
            accordance with these Terms. You shall not:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1 shrink-0">&times;</span>
              <span>
                Send unsolicited bulk emails (spam) or emails that violate the
                CAN-SPAM Act, GDPR, or any other applicable anti-spam
                legislation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1 shrink-0">&times;</span>
              <span>
                Upload or transmit any content that is unlawful, harmful,
                threatening, abusive, defamatory, or otherwise objectionable.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1 shrink-0">&times;</span>
              <span>
                Use the Service to distribute malware, phishing emails, or any
                form of malicious content.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1 shrink-0">&times;</span>
              <span>
                Attempt to gain unauthorized access to any part of the Service,
                other accounts, or systems connected to the Service.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1 shrink-0">&times;</span>
              <span>
                Use the Service in any manner that could disable, overburden, or
                impair the Service or interfere with other users&apos; use.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1 shrink-0">&times;</span>
              <span>
                Resell, sublicense, or redistribute access to the Service
                without our prior written consent.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            We reserve the right to suspend or terminate your account if we
            determine, in our sole discretion, that you have violated these
            acceptable use policies.
          </p>

          {/* 4. Intellectual Property */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            4. Intellectual Property
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            The Service and all its original content, features, and
            functionality are owned by Trackepay Fintech and are protected by
            international copyright, trademark, patent, trade secret, and other
            intellectual property laws. The MailerSpark name, logo, and all
            related names, logos, product and service names, designs, and
            slogans are trademarks of Trackepay Fintech.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            You retain ownership of any content you upload to the Service,
            including email templates, contact lists, and campaign content.
            However, by uploading content, you grant us a limited,
            non-exclusive license to use, process, and store that content solely
            for the purpose of providing the Service to you.
          </p>

          {/* 5. Limitation of Liability */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            5. Limitation of Liability
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            To the fullest extent permitted by applicable law, MailerSpark and
            Trackepay Fintech shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, including but not
            limited to:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-muted mt-1 shrink-0">&bull;</span>
              <span>
                Loss of profits, revenue, data, or business opportunities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted mt-1 shrink-0">&bull;</span>
              <span>
                Service interruptions, delays, or failures caused by factors
                beyond our reasonable control.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted mt-1 shrink-0">&bull;</span>
              <span>
                Unauthorized access to or alteration of your data or
                transmissions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted mt-1 shrink-0">&bull;</span>
              <span>
                Any third-party conduct or content accessed through the Service.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Our total liability for any claim arising out of or relating to
            these Terms or the Service shall not exceed the amount you paid to
            us in the twelve (12) months preceding the claim.
          </p>

          {/* 6. Termination */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            6. Termination
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            You may terminate your account at any time by contacting our support
            team or through your account settings. We may suspend or terminate
            your access to the Service immediately, without prior notice or
            liability, for any reason, including if you breach these Terms.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Upon termination, your right to use the Service will cease
            immediately. We may retain and use your data as necessary to comply
            with our legal obligations, resolve disputes, and enforce our
            agreements. All provisions of these Terms which by their nature
            should survive termination shall survive, including ownership
            provisions, warranty disclaimers, and limitations of liability.
          </p>

          {/* 7. Governing Law */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            7. Governing Law
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to its conflict of law provisions.
            Any disputes arising out of or in connection with these Terms shall
            be subject to the exclusive jurisdiction of the courts located in
            India.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions will remain in full force
            and effect. Our failure to enforce any right or provision of these
            Terms shall not constitute a waiver of such right or provision.
          </p>
          <p className="text-foreground leading-relaxed">
            For any questions regarding these Terms, please contact us at{" "}
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
