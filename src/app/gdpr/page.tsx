import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Compliance | MailerSpark",
  description:
    "Learn about MailerSpark's commitment to GDPR compliance and how we protect your data rights as a user.",
};

export default function GDPRPage() {
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
            <span className="text-sm text-foreground">GDPR Compliance</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-heading font-[family-name:var(--font-sora)] mb-4">
            GDPR Compliance
          </h1>
          <p className="text-muted text-lg">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-12">
          <p className="text-foreground leading-relaxed mb-6">
            MailerSpark, operated by Trackepay Fintech, is committed to
            complying with the European Union&apos;s General Data Protection
            Regulation (GDPR). This page outlines how we protect the personal
            data of individuals in the European Economic Area (EEA) and the
            rights available to data subjects under the GDPR.
          </p>

          {/* 1. Our Commitment */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            1. Our Commitment
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            We take data protection seriously and have implemented comprehensive
            measures to ensure GDPR compliance across our platform:
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Privacy by Design:</strong> Data protection is built
                into every aspect of our platform, from product development to
                data processing operations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Data Minimization:</strong> We only collect and process
                personal data that is necessary for the specific purposes
                outlined in our Privacy Policy.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Transparency:</strong> We provide clear and accessible
                information about how personal data is collected, used, and
                shared.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Security:</strong> We employ industry-standard security
                measures including encryption, access controls, and regular
                security audits to protect personal data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Accountability:</strong> We maintain detailed records of
                our data processing activities and conduct regular compliance
                reviews.
              </span>
            </li>
          </ul>

          {/* 2. Data Processing */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            2. Data Processing
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            MailerSpark acts as both a data controller and a data processor,
            depending on the context:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>As a Data Controller:</strong> We determine the purposes
                and means of processing personal data related to our customers
                (account information, billing data, and usage analytics).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>As a Data Processor:</strong> When our customers use
                MailerSpark to manage their email subscriber lists and send
                campaigns, we process personal data on their behalf according to
                their instructions.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            We process personal data based on the following lawful bases under
            Article 6 of the GDPR:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Contractual Necessity:</strong> Processing required to
                perform our contractual obligations to you.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Legitimate Interest:</strong> Processing necessary for
                our legitimate business interests, such as improving our
                services and preventing fraud.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Consent:</strong> Processing based on your explicit
                consent, which you may withdraw at any time.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Legal Obligation:</strong> Processing required to comply
                with applicable laws and regulations.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            We offer a Data Processing Agreement (DPA) to all customers who
            require one. Please contact us to request a copy.
          </p>

          {/* 3. Your Rights Under the GDPR */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            3. Your Rights Under the GDPR
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            If you are located in the EEA, you have the following rights
            regarding your personal data:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Right of Access (Article 15):</strong> You have the
                right to request a copy of the personal data we hold about you,
                along with information about how it is being processed.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Right to Rectification (Article 16):</strong> You have
                the right to request the correction of inaccurate personal data
                or the completion of incomplete data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Right to Erasure (Article 17):</strong> You have the
                right to request the deletion of your personal data when it is
                no longer necessary for the purposes for which it was collected,
                or when you withdraw your consent.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Right to Data Portability (Article 20):</strong> You
                have the right to receive your personal data in a structured,
                commonly used, and machine-readable format, and to transmit it
                to another controller.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Right to Restrict Processing (Article 18):</strong> You
                have the right to request the restriction of processing of your
                personal data under certain conditions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Right to Object (Article 21):</strong> You have the
                right to object to the processing of your personal data for
                direct marketing purposes or processing based on legitimate
                interests.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Right to Withdraw Consent:</strong> Where processing is
                based on consent, you may withdraw your consent at any time
                without affecting the lawfulness of processing carried out prior
                to withdrawal.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            To exercise any of these rights, please contact our Data Protection
            Officer using the details below. We will respond to your request
            within 30 days as required by the GDPR.
          </p>

          {/* 4. Data Protection Officer */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            4. Data Protection Officer (DPO)
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            We have appointed a Data Protection Officer to oversee our GDPR
            compliance efforts. You can contact our DPO for any data
            protection-related inquiries:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
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
                <strong>Company:</strong> Trackepay Fintech (operating as
                MailerSpark)
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            You also have the right to lodge a complaint with a supervisory
            authority in your country of residence if you believe that our
            processing of your personal data violates the GDPR.
          </p>

          {/* 5. International Data Transfers */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            5. International Data Transfers
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            As a global platform, we may transfer personal data outside of the
            EEA. When we do, we ensure that appropriate safeguards are in place
            to protect your data in accordance with the GDPR:
          </p>
          <ul className="space-y-2 text-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Standard Contractual Clauses (SCCs):</strong> We use
                EU-approved Standard Contractual Clauses when transferring
                personal data to countries that have not received an adequacy
                decision from the European Commission.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Adequacy Decisions:</strong> Where possible, we transfer
                data to countries that the European Commission has recognized as
                providing an adequate level of data protection.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Technical Safeguards:</strong> All data transfers are
                protected with encryption in transit and at rest, ensuring the
                security and integrity of your personal data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Sub-Processor Agreements:</strong> We maintain
                agreements with all sub-processors that require them to comply
                with equivalent data protection standards.
              </span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed">
            For more information about our data protection practices or to
            request a copy of the safeguards we use for international transfers,
            please contact us at{" "}
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
