import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing for Education — Keep Students Engaged From Enrollment to Alumni | MailerSpark",
  description:
    "Automate student communications, course updates, event notifications, and alumni outreach. Trusted by 500+ institutions. Start free.",
};

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Email Marketing for Education
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)]">
            <span className="text-highlight">Keep Students Engaged From</span>  <span className="text-highlight">Enrollment to Alumni</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Automate every touchpoint of the student lifecycle — welcome emails,
            course updates, event invites, and alumni fundraising — from one platform.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">500+</span>
              <span className="text-gray-400 text-sm">Institutions</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">62%</span>
              <span className="text-gray-400 text-sm">Open Rate Avg.</span>
            </div>
            <div className="stat-glow text-center">
              <span className="block text-3xl font-bold text-white font-[family-name:var(--font-sora)]">3x</span>
              <span className="text-gray-400 text-sm">Event Attendance Lift</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link
              href="/signup"
              className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Free — No Card Needed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/contact-us"
              className="border border-gray-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Request a Demo
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Free forever plan available &middot; FERPA-friendly &middot; No credit card
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="trust-strip bg-surface py-4 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-muted text-sm">
          <span>Trusted by 500+ schools &amp; universities</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>FERPA &amp; GDPR compliant</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>99.9% uptime guarantee</span>
        </div>
      </div>

      {/* Student Communications */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Student Communications
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Personalized Messages That Drive Engagement
              </h2>
              <p className="text-foreground text-lg mb-6">
                Segment by department, year, interests, or enrollment status so
                every student receives content that matters to them.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Automated welcome sequences for new students
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Academic milestone and progress updates
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Campus life newsletters and announcements
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Segmentation by department, year, and interests
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-primary-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                62% Average Open Rate
              </p>
              <p className="text-foreground mt-2">
                Personalized comms that students actually read.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Updates */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="feature-card rounded-2xl p-10 text-center bg-white order-2 lg:order-1">
              <svg className="mx-auto mb-4 h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                Set It and Forget It
              </p>
              <p className="text-foreground mt-2">
                Instructors save 5+ hours per week on communications.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Course Updates
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Automated Reminders So Nothing Falls Through the Cracks
              </h2>
              <p className="text-foreground text-lg mb-6">
                Assignment deadlines, schedule changes, new materials — automate
                it all so instructors can focus on teaching.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Assignment deadline reminders
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Class schedule and room change alerts
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  New course material notifications
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Exam preparation tips and study resources
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Notifications */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
                Event Notifications
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
                Fill Every Seat at Every Event
              </h2>
              <p className="text-foreground text-lg mb-6">
                Promote open days, workshops, and seminars with beautiful
                email invitations, RSVP tracking, and automated follow-ups.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Event invitation templates with RSVP tracking
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Automated reminder sequences (7 days, 1 day, 1 hour)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Post-event feedback surveys
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Webinar and virtual event support
                </li>
              </ul>
            </div>
            <div className="feature-card rounded-2xl p-10 text-center bg-accent-light">
              <svg className="mx-auto mb-4 h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-heading font-semibold text-xl font-[family-name:var(--font-sora)]">
                3x Event Attendance
              </p>
              <p className="text-foreground mt-2">
                Targeted email campaigns consistently triple turnout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
              Alumni Engagement
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 font-[family-name:var(--font-sora)]">
              Turn Graduates Into Lifelong Advocates
            </h2>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Stay connected with alumni through newsletters, fundraising
              campaigns, reunion invitations, and career opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Alumni Newsletters",
                desc: "Share institution news, achievements, and updates with your global alumni network.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" /></svg>
                ),
              },
              {
                title: "Fundraising Campaigns",
                desc: "Run personalized donation appeals with progress tracking and automated thank-yous.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                ),
              },
              {
                title: "Career Opportunities",
                desc: "Connect alumni with job openings, mentorship programs, and networking events.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="feature-card rounded-2xl p-8 bg-white">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-heading mb-2 font-[family-name:var(--font-sora)]">
                  {item.title}
                </h3>
                <p className="text-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-mesh py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-[family-name:var(--font-sora)] text-highlight">
            Your Students Deserve Better Communication
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join 500+ educational institutions using MailerSpark to engage
            students, faculty, and alumni with automated, personalized email.
          </p>
          <Link
            href="/signup"
            className="cta-glow bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Free — No Card Needed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Free forever plan &middot; No credit card &middot; FERPA-friendly
          </p>
        </div>
      </section>
    </>
  );
}
