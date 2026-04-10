"use client";

import { useState } from "react";
import Link from "next/link";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is MailerSpark?",
        answer:
          "MailerSpark is a powerful and affordable email marketing and automation platform. It allows you to send email campaigns, build automated workflows, manage subscribers, and track performance -- all from one dashboard. Unlike traditional tools, MailerSpark also lets you bring your own SMTP or Amazon SES to dramatically cut your sending costs.",
      },
      {
        question: "How do I get started with MailerSpark?",
        answer:
          "Sign up for a free account (no credit card required), import your contacts via CSV or migrate from another platform, and send your first campaign in minutes. Our onboarding wizard walks you through everything step by step.",
      },
      {
        question: "Do you offer a free trial?",
        answer:
          "Yes. Our Free plan is available forever with up to 1,000 contacts and 5,000 emails per month -- no credit card required. You can also try our Growth and Pro plans with a 14-day free trial to experience all premium features before committing.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        question: "How does MailerSpark pricing work?",
        answer:
          "We offer a free forever plan with up to 1,000 contacts and 5,000 emails per month. Paid plans start at $29/mo (Growth: 25,000 contacts, 100,000 emails) and $79/mo (Pro: unlimited contacts and emails). We also offer lifetime deals starting at $129 for a one-time payment with no recurring fees.",
      },
      {
        question: "What happens if I exceed my plan limits?",
        answer:
          "We will notify you well before you reach your limit so you can upgrade seamlessly. We never cut off your service unexpectedly. You can upgrade or downgrade your plan at any time from your dashboard.",
      },
      {
        question: "Is there a money-back guarantee?",
        answer:
          "Absolutely. All paid plans and lifetime deals come with a 30-day money-back guarantee. If MailerSpark is not the right fit for your business, contact us within 30 days for a full refund -- no questions asked.",
      },
      {
        question: "Do you offer annual billing or discounts?",
        answer:
          "Yes. Save 20% with annual billing on any paid plan. That brings the Growth plan down to $23/mo and the Pro plan to $63/mo. We also offer lifetime deals for a one-time payment with no recurring fees.",
      },
    ],
  },
  {
    category: "SMTP & Technical",
    questions: [
      {
        question: "Can I use my own SMTP server or Amazon SES?",
        answer:
          "Yes. MailerSpark supports Bring Your Own SMTP (BYOS) on Growth and Pro plans. Connect your own SMTP server, Amazon SES, SendGrid, Mailgun, or any other SMTP provider to send emails at your own infrastructure cost -- as low as $0.10 per 1,000 emails with Amazon SES.",
      },
      {
        question: "What is Amazon SES and how does it integrate with MailerSpark?",
        answer:
          "Amazon SES (Simple Email Service) is a cloud-based email sending service by AWS. MailerSpark integrates directly with Amazon SES, allowing you to leverage its high deliverability and extremely low cost while using our intuitive campaign builder, automation tools, and analytics dashboard.",
      },
      {
        question: "Do you provide email deliverability support?",
        answer:
          "Yes. We provide deliverability guidance including SPF, DKIM, and DMARC setup assistance, dedicated IP options on Pro plans, inbox placement testing, and best practice recommendations to ensure your emails reach the inbox consistently.",
      },
    ],
  },
  {
    category: "Security & Migration",
    questions: [
      {
        question: "Is my data secure with MailerSpark?",
        answer:
          "Absolutely. We take data security very seriously. All data is encrypted in transit (TLS/SSL) and at rest (AES-256). We are SOC 2 compliant, GDPR compliant, and never sell or share your data with third parties. Our infrastructure is hosted on enterprise-grade cloud providers with 99.9% uptime.",
      },
      {
        question: "Can I import my existing contacts from another platform?",
        answer:
          "Yes. You can easily import contacts from CSV files or migrate directly from platforms like Mailchimp, Constant Contact, ConvertKit, and more. Our import wizard maps fields automatically and guides you through the process step by step. Most migrations take under 10 minutes.",
      },
      {
        question: "What integrations does MailerSpark support?",
        answer:
          "MailerSpark integrates with popular tools including Zapier (5,000+ apps), Pabbly Connect, WooCommerce, WordPress, Shopify, and more. Our REST API also allows custom integrations with any platform. We are continuously adding new native integrations based on customer feedback.",
      },
      {
        question: "Does MailerSpark support marketing automation?",
        answer:
          "Yes. MailerSpark includes a powerful visual automation builder. Create drip campaigns, welcome sequences, abandoned cart workflows, re-engagement campaigns, and more. Set triggers based on user actions, time delays, and conditions to send the right message at the right time.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-heading group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-primary text-white rotate-180"
              : "bg-primary-light text-primary"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] pb-5 px-2" : "max-h-0"
        }`}
      >
        <p className="text-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            FAQs
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] text-heading leading-tight mb-6">
            Got questions?{" "}
            <span className="text-highlight">We have got answers.</span>
          </h1>
          <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
            Everything you need to know about MailerSpark -- from pricing and
            setup to security and migrations. Cannot find what you are looking
            for? Our support team is just a click away.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-foreground"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat, catIndex) => (
            <div
              key={cat.category}
              id={cat.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
            >
              <h2 className="text-2xl font-bold font-[family-name:var(--font-sora)] text-heading mb-6">
                {cat.category}
              </h2>
              <div className="bg-white rounded-2xl shadow-lg border border-border">
                <div className="p-6 md:p-8">
                  {cat.questions.map((faq, qIndex) => {
                    const key = `${catIndex}-${qIndex}`;
                    return (
                      <AccordionItem
                        key={key}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === key}
                        onToggle={() =>
                          setOpenIndex(openIndex === key ? null : key)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] text-white mb-6 text-highlight">
            Still have questions?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Our support team typically responds within 2 hours. We are here to
            help you get the most out of MailerSpark.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact Support
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/support"
              className="border border-gray-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
