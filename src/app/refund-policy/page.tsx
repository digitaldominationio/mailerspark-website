import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | MailerSpark",
  description:
    "Learn about MailerSpark's refund policy for subscription and lifetime plans, including eligibility and how to request a refund.",
};

export default function RefundPolicyPage() {
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
            <span className="text-sm text-foreground">Refund Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-heading font-[family-name:var(--font-sora)] mb-4">
            Refund Policy
          </h1>
          <p className="text-muted text-lg">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-12">
          <p className="text-foreground leading-relaxed mb-6">
            At MailerSpark, operated by Trackepay Fintech, we strive to deliver
            the best email marketing experience. We understand that sometimes a
            product may not meet your expectations, and we want to make the
            refund process as straightforward as possible.
          </p>

          {/* 1. Subscription Plan Refunds */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            1. Subscription Plan Refunds
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            If you are on a monthly or annual subscription plan and are not
            satisfied with our Service, you may request a refund within 30 days
            of your payment. Refunds for subscription plans are handled as
            follows:
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Pro-Rated Refunds:</strong> If you request a refund
                within 30 days of your billing date, you will receive a
                pro-rated refund for the unused portion of your subscription
                period.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Calculation:</strong> The refund amount is calculated
                based on the number of remaining days in your current billing
                cycle, excluding any emails already sent or resources consumed
                during the active period.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Annual Plans:</strong> For annual subscriptions,
                pro-rated refunds are calculated on a monthly basis for the
                remaining full months of your plan.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>After 30 Days:</strong> Refund requests submitted after
                30 days from the billing date are not eligible for a refund.
                However, you may cancel your subscription at any time to prevent
                future charges.
              </span>
            </li>
          </ul>

          {/* 2. Lifetime Plan Refunds */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            2. Lifetime Plan Refunds
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            We offer a 14-day money-back guarantee on all lifetime plan
            purchases. If you are not completely satisfied with your lifetime
            plan, you may request a full refund within 14 days of your purchase
            date.
          </p>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Full Refund:</strong> Lifetime plan refund requests made
                within 14 days of purchase will receive a complete refund of the
                purchase price.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>No Partial Refunds:</strong> After the 14-day period,
                lifetime plans are non-refundable as they provide indefinite
                access to the Service.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>Account Access:</strong> Upon processing a refund for a
                lifetime plan, your account will be downgraded to the free tier,
                and access to premium features will be revoked.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">&#10003;</span>
              <span>
                <strong>One-Time Policy:</strong> The 14-day money-back
                guarantee applies once per customer. Repeat purchases and refund
                requests may not be eligible.
              </span>
            </li>
          </ul>

          {/* 3. How to Request a Refund */}
          <h2 className="text-xl font-bold text-heading mb-4 mt-8 font-[family-name:var(--font-sora)] border-l-4 border-primary pl-4">
            3. How to Request a Refund
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            To request a refund, please follow these steps:
          </p>
          <ol className="space-y-3 text-foreground mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <span>
                Send an email to{" "}
                <a
                  href="mailto:support@mailerspark.com"
                  className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  support@mailerspark.com
                </a>{" "}
                with the subject line &quot;Refund Request.&quot;
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <span>
                Include your account email address, the plan you purchased, the
                date of purchase, and the reason for your refund request.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <span>
                Our billing team will review your request and respond within
                3&ndash;5 business days.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <span>
                If approved, refunds will be processed to your original payment
                method within 7&ndash;10 business days.
              </span>
            </li>
          </ol>
          <p className="text-foreground leading-relaxed mb-4">
            Please note that refunds are subject to review, and we reserve the
            right to deny refund requests in cases of abuse, excessive usage, or
            violation of our Terms &amp; Conditions.
          </p>
          <p className="text-foreground leading-relaxed">
            If you have any questions about our refund policy, please contact
            our support team at{" "}
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
