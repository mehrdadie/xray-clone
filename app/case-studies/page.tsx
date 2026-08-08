'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'property-training-toronto',
    company: 'Property Training Company',
    location: 'Toronto, Canada',
    industry: 'Property Education & Training',
    author: 'Operations Manager',
    avatar: 'O',
    quote:
      "DataLift connected our Salesforce, GoHighLevel, and Chargebee so everything just works. Our sales team no longer wastes hours copying data between systems. It's all automated, and we can see everything on one dashboard.",
    problem:
      "This property training company ran events and webinars for aspiring investors. Their sales pipeline lived in Salesforce, marketing campaigns in GoHighLevel, and recurring course payments in Chargebee — but none of these systems talked to each other. The sales team spent 15+ hours per week manually copying booking data between platforms, reconciling payments with spreadsheets, and chasing missing customer records. Lead follow-up was slow because the team couldn't see which prospects had already paid or attended previous events.",
    solution:
      "DataLift connected Salesforce, GoHighLevel, and Chargebee into a single automated data flow. When a lead registered for an event in GoHighLevel, their record was automatically created or updated in Salesforce. When a payment was processed in Chargebee, the booking status was synced to Salesforce in real time. A central dashboard was built showing live event bookings, revenue, and attendee numbers — all pulled automatically from the connected systems.",
    results: [
      { metric: '15+ hrs', label: 'Saved per week on manual data entry' },
      { metric: '100%', label: 'Payment-to-CRM sync accuracy' },
      { metric: '3x', label: 'Faster lead follow-up with unified view' },
    ],
    tools: ['Salesforce', 'GoHighLevel', 'Chargebee'],
    services: ['System Connection', 'Real-time Dashboard', 'Workflow Automation'],
  },
  {
    id: 'elearning-sydney',
    company: 'E-Learning Platform',
    location: 'Sydney, Australia',
    industry: 'Online Education & E-Learning',
    author: 'Sales Director',
    avatar: 'S',
    quote:
      "We had disconnected systems everywhere — CRM, marketing, payments, spreadsheets. DataLift built a central dashboard and automated the data flow. Our team now focuses on selling, not admin.",
    problem:
      "An online education company offering courses and certifications had a patchwork of disconnected tools: a CRM for leads, a separate marketing platform for email campaigns, a payment processor for course fees, and multiple Google Sheets tracking student progress. Data was inconsistent across systems — a student might show as 'paid' in one sheet but 'pending' in another. The sales director had no single view of revenue, pipeline, or student status. Monthly reporting took 3 days of manual spreadsheet work.",
    solution:
      "DataLift built a unified data platform by connecting all their systems through n8n automation workflows. Lead data from the CRM was automatically enriched with payment status from the billing system and course progress from the LMS. A real-time dashboard was created showing pipeline value, monthly recurring revenue, student enrollment numbers, and course completion rates — all updated automatically. Monthly reporting was reduced from 3 days to 15 minutes of reviewing the dashboard.",
    results: [
      { metric: '3 days → 15 min', label: 'Monthly reporting time' },
      { metric: 'Zero', label: 'Data inconsistencies across systems' },
      { metric: '40+', label: 'Automated workflows deployed' },
    ],
    tools: ['CRM', 'Marketing Platform', 'Payment Processor', 'Google Sheets', 'n8n'],
    services: ['Data Platform Build', 'Real-time Dashboard', 'Workflow Automation', 'System Integration'],
  },
  {
    id: 'trading-education-dubai',
    company: 'Trading Education Company',
    location: 'Dubai, UAE',
    industry: 'Financial Trading Education',
    author: 'Managing Director',
    avatar: 'M',
    quote:
      'The dashboards DataLift built give us real-time visibility into bookings, revenue, and student progress — all pulled from Salesforce and Chargebee automatically. It changed how we make decisions.',
    problem:
      "A trading education company offered live trading rooms, online courses, and in-person workshops. Their Salesforce CRM tracked leads and bookings, while Chargebee managed recurring subscriptions for their trading room access. But the managing director had no visibility into which courses were most profitable, how many active subscribers they had at any moment, or which marketing campaigns were driving the highest-value bookings. Decisions were made on gut feeling, not data. Finance spent a week each month manually reconciling Salesforce bookings with Chargebee subscriptions.",
    solution:
      "DataLift built a suite of real-time dashboards pulling data from both Salesforce and Chargebee automatically. The main dashboard showed live revenue (one-off course sales + recurring subscriptions), active subscriber count, booking funnel (leads → registered → paid → attended), and marketing ROI by campaign channel. A second dashboard tracked student progress and course completion rates. Automated alerts were set up for churn risk — if a subscription was cancelled in Chargebee, the CRM record was flagged automatically for the team to follow up.",
    results: [
      { metric: 'Real-time', label: 'Revenue visibility (was monthly)' },
      { metric: '1 week → 0', label: 'Monthly reconciliation eliminated' },
      { metric: '5', label: 'Live dashboards deployed' },
      { metric: '35%', label: 'Reduction in subscription churn' },
    ],
    tools: ['Salesforce', 'Chargebee', 'n8n'],
    services: ['Real-time Dashboards', 'Revenue Analytics', 'Churn Alert Automation', 'System Integration'],
  },
];

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Case Studies"
      subtitle="Real results from businesses we've helped — measured in hours saved, errors removed, and decisions made faster."
    >
      <section className="pb-6 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-4 sm:p-5 md:p-8 shadow-card">
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold gradient-text">8+</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">Businesses Served</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold gradient-text">10k+</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">Hours Automated</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold gradient-text">50+</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">Systems Connected</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold gradient-text">99.9%</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">Uptime Maintained</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-6 md:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-4 sm:p-6 md:p-8 shadow-card">
              <p className="text-sm md:text-base leading-relaxed text-[var(--foreground)]/70">
                DataLift specialises in <strong>CRM integration, marketing automation, and real-time business dashboards</strong> for
                growing companies. Our case studies show how we connect disconnected systems — Salesforce, GoHighLevel, Chargebee,
                Stripe, and more — to automate data flow, eliminate manual reporting, and give teams a single source of truth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-6 md:space-y-10">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={Math.min(i * 0.05, 0.2)}>
              <article className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 shadow-card overflow-hidden">
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-8 border-b border-blue-100/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--foreground)] mt-1">
                        {cs.company}
                      </h2>
                      <p className="text-xs sm:text-sm text-[var(--foreground)]/60 mt-1">📍 {cs.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.tools.map((tool) => (
                        <span key={tool} className="inline-block rounded-xl bg-white px-2.5 sm:px-3 py-1.5 text-xs font-medium shadow-sm border border-black/5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-8 bg-white/60">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base md:text-lg shrink-0 shadow-sm">
                      {cs.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium text-[var(--foreground)]/90 italic">
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                      <div className="mt-2 text-xs sm:text-sm text-[var(--foreground)]/60">
                        <span className="font-semibold">{cs.author}</span> — {cs.company}, {cs.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4M12 16h.01" />
                        </svg>
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold">The Problem</h3>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--foreground)]/70">{cs.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold">Our Solution</h3>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--foreground)]/70">{cs.solution}</p>
                  </div>
                </div>

                <div className="px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-8 bg-gradient-to-b from-transparent to-blue-50/30 border-t border-black/5">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 md:mb-6 flex items-center gap-2">
                    <span className="text-blue-600">📈</span> Results
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 p-2.5 sm:p-3 md:p-5 text-center shadow-sm">
                        <div className="text-base sm:text-lg md:text-2xl font-bold gradient-text">{r.metric}</div>
                        <div className="text-[11px] sm:text-xs md:text-sm text-[var(--foreground)]/60 mt-1 md:mt-2 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap gap-2">
                    <span className="text-[11px] sm:text-xs font-medium text-[var(--foreground)]/50 mr-1 self-center">Services:</span>
                    {cs.services.map((s) => (
                      <span key={s} className="inline-block rounded-lg bg-blue-50 text-blue-700 px-2.5 py-1 text-[11px] sm:text-xs font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100/50 px-5 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 md:mb-3">
                Want results like these?
              </h2>
              <p className="text-sm md:text-base text-[var(--foreground)]/70 max-w-2xl mx-auto mb-4 md:mb-6">
                Book a free 30-minute consultation. We'll look at your systems and show you exactly where data and automation can save you time.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium shadow-glow"
              >
                Book a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
