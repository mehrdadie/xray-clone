'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'property-training-essex',
    company: 'Property Training Company',
    location: 'Essex, UK',
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
    id: 'education-company-uk',
    company: 'Education Company',
    location: 'United Kingdom',
    industry: 'Online Education & Coaching',
    author: 'Sales Director',
    avatar: 'S',
    quote:
      "We had disconnected systems everywhere — CRM, marketing, payments, spreadsheets. DataLift built a central dashboard and automated the data flow. Our team now focuses on selling, not admin.",
    problem:
      "An education company offering online courses and coaching had a patchwork of disconnected tools: a CRM for leads, a separate marketing platform for email campaigns, a payment processor for course fees, and multiple Google Sheets tracking student progress. Data was inconsistent across systems — a student might show as 'paid' in one sheet but 'pending' in another. The sales director had no single view of revenue, pipeline, or student status. Monthly reporting took 3 days of manual spreadsheet work.",
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
    id: 'trading-education-london',
    company: 'Trading Education Company',
    location: 'London, UK',
    industry: 'Financial Trading Education',
    author: 'Managing Director',
    avatar: 'M',
    quote:
      "The dashboards DataLift built give us real-time visibility into bookings, revenue, and student progress — all pulled from Salesforce and Chargebee automatically. It changed how we make decisions.",
    problem:
      "A London-based trading education company offered live trading rooms, online courses, and in-person workshops. Their Salesforce CRM tracked leads and bookings, while Chargebee managed recurring subscriptions for their trading room access. But the managing director had no visibility into which courses were most profitable, how many active subscribers they had at any moment, or which marketing campaigns were driving the highest-value bookings. Decisions were made on gut feeling, not data. Finance spent a week each month manually reconciling Salesforce bookings with Chargebee subscriptions.",
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
  {
    id: 'property-events-chelmsford',
    company: 'Property Training & Events Company',
    location: 'Chelmsford, UK',
    industry: 'Property Education & Events',
    author: 'Event Coordinator',
    avatar: 'A',
    quote:
      "Our event bookings, follow-ups, and payment tracking used to live in three different places. DataLift connected everything so our team can see exactly who booked, who paid, and who needs a follow-up — all in one place.",
    problem:
      "This property training company ran large in-person events and webinars. Event registrations were tracked in a separate booking platform, payments in Stripe, and follow-up communications in a separate email tool. After every event, the team spent 2-3 days manually matching attendees with payments and uploading lists to the email tool for follow-up. Some attendees were missed, some were emailed twice, and there was no way to track which events generated the most revenue per attendee.",
    solution:
      "DataLift automated the entire event lifecycle. When someone registered, their record was created in Salesforce automatically. When they paid via Stripe, the payment status was synced instantly. After each event, the attendee list was automatically segmented in Salesforce and synced to the email platform for targeted follow-up sequences. A dashboard was built showing event revenue, attendance rate, cost per attendee, and follow-up conversion by event type.",
    results: [
      { metric: '2-3 days → 0', label: 'Manual post-event processing eliminated' },
      { metric: 'Zero', label: 'Missed or duplicate follow-ups' },
      { metric: '28%', label: 'Increase in post-event conversion' },
    ],
    tools: ['Salesforce', 'Stripe', 'Email Platform', 'n8n'],
    services: ['Event Automation', 'Revenue Dashboard', 'Follow-up Sequences', 'System Integration'],
  },
  {
    id: 'sales-training-reading',
    company: 'UK Sales Training Company',
    location: 'Reading, UK',
    industry: 'Sales Training & Coaching',
    author: 'Head of Operations',
    avatar: 'K',
    quote:
      "We deliver training to hundreds of delegates each month. DataLift built a system that tracks every delegate from booking to completion, automatically sends certificates, and gives us a dashboard of training impact per client. It saved us a full-time admin role.",
    problem:
      "A UK sales training company delivered open courses and in-house training to hundreds of delegates per month. Bookings were managed in a CRM, but delegate attendance, course completion, and certificate issuance were all tracked manually in spreadsheets. The team couldn't answer basic questions like 'what's our completion rate?' or 'which clients have pending training credits?' without spending days cross-referencing spreadsheets. Certificate issuance was manual and error-prone.",
    solution:
      "DataLift built an automated delegate tracking system connected to the CRM. When a delegate booked, a training record was auto-created. Attendance was tracked via a simple check-in form, and completion status automatically triggered certificate generation via an email automation. A dashboard showed live completion rates, training credits remaining per client, and revenue per training programme. Monthly admin work was reduced to near zero.",
    results: [
      { metric: '1 FTE', label: 'Admin role reallocated to higher-value work' },
      { metric: 'Auto', label: 'Certificate issuance (was manual)' },
      { metric: '95%', label: 'Course completion tracking accuracy' },
      { metric: '100+', label: 'Delegates auto-tracked per month' },
    ],
    tools: ['CRM', 'Google Sheets', 'Email Platform', 'n8n'],
    services: ['Delegate Tracking System', 'Certificate Automation', 'Training Dashboard', 'System Integration'],
  },
  {
    id: 'wealth-education-webinars',
    company: 'Wealth Education Company',
    location: 'UK-wide',
    industry: 'Wealth & Property Education',
    author: 'Marketing Manager',
    avatar: 'W',
    quote:
      "We run webinars every week, but we never knew which ones actually drove sales. DataLift connected our webinar platform to our CRM and payment system so we can finally see the full journey from attendee to paying customer.",
    problem:
      "This wealth education company ran weekly webinars to attract new customers. Webinar registrations were in Zoom, leads in Salesforce, and payments in Chargebee — but no system connected them. The marketing team couldn't answer 'which webinars produce the most paying customers?' or 'how long does it take from webinar attendance to purchase?' Budget was being spent on webinars with no visibility into ROI.",
    solution:
      "DataLift built a webinar-to-revenue pipeline. Webinar registrations from Zoom were automatically synced to Salesforce as leads. When a lead made a purchase through Chargebee, the system traced it back to the specific webinar they attended. A dashboard showed webinar attendance → purchase conversion rate, average time-to-purchase per webinar topic, and revenue attributed to each webinar. The marketing team could now see which topics drove the highest-value sales.",
    results: [
      { metric: 'Full funnel', label: 'Webinar-to-revenue attribution' },
      { metric: '3.2x', label: 'ROI on top-performing webinar topics' },
      { metric: '48 hrs', label: 'Average time from webinar to purchase (was unknown)' },
    ],
    tools: ['Zoom', 'Salesforce', 'Chargebee', 'n8n'],
    services: ['Webinar Attribution', 'Revenue Dashboard', 'Lead-to-Sale Tracking', 'System Integration'],
  },
  {
    id: 'telesales-consultancy-manchester',
    company: 'Telesales Consultancy',
    location: 'Manchester, UK',
    industry: 'Telesales & Sales Consultancy',
    author: 'Operations Lead',
    avatar: 'D',
    quote:
      "We coach telesales teams across the UK. DataLift connected our call tracking, CRM, and reporting so our consultants can see every client's call metrics, pipeline, and conversion rates in one dashboard instead of three different systems.",
    problem:
      "A telesales consultancy tracked client call activity in a call analytics platform, pipeline in Salesforce, and delivered weekly performance reports via manually compiled spreadsheets. Consultants spent 4+ hours per week per client building reports. Clients couldn't get real-time visibility into their telesales performance — they had to wait for a weekly emailed spreadsheet.",
    solution:
      "DataLift connected the call analytics platform to Salesforce and built a client-facing dashboard. Call volumes, conversion rates, and pipeline value were synced automatically. Each client got a personalised dashboard link showing live telesales performance. Consultants stopped building manual reports entirely — the dashboard became the reporting tool.",
    results: [
      { metric: '4 hrs → 0', label: 'Per-client weekly reporting time' },
      { metric: 'Real-time', label: 'Client access to performance data' },
      { metric: '15+', label: 'Clients on automated dashboards' },
    ],
    tools: ['Call Analytics', 'Salesforce', 'Google Sheets', 'n8n'],
    services: ['Client Dashboard', 'Call Tracking Integration', 'Automated Reporting', 'System Integration'],
  },
  {
    id: 'property-investment-coaching',
    company: 'Property Investment Education Company',
    location: 'UK-wide',
    industry: 'Property Investment Coaching',
    author: 'Client Success Manager',
    avatar: 'T',
    quote:
      "Our coaching students used to get lost between systems — booking in one, course access in another, support tickets elsewhere. DataLift created a single student journey so nothing falls through the cracks anymore.",
    problem:
      "A property investment education company offered coaching programmes with multiple stages: initial consultation, course enrollment, module access, coaching calls, and ongoing support. Each stage lived in a different system: consultations booked in Calendly, course access in an LMS, coaching calls tracked in a spreadsheet, and support in a helpdesk tool. Students frequently fell through the gaps — some paid but never got course access, others booked coaching calls but the consultant had no context.",
    solution:
      "DataLift built a unified student journey system. When a consultation was booked in Calendly, a complete student record was created in Salesforce with a stage tracker. Payment triggered automatic LMS enrollment. Coaching call bookings were synced to the consultant's calendar with full student context attached. A dashboard showed every student's current stage, flagged those stuck between stages for more than 7 days, and tracked overall programme completion rates.",
    results: [
      { metric: 'Zero', label: 'Students lost between systems' },
      { metric: '7-day alert', label: 'Automatic flag for stuck students' },
      { metric: '42%', label: 'Improvement in programme completion rate' },
    ],
    tools: ['Calendly', 'Salesforce', 'LMS', 'Helpdesk', 'n8n'],
    services: ['Student Journey Automation', 'Stage Tracking Dashboard', 'Alert System', 'System Integration'],
  },
];

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Case Studies"
      subtitle="Real results from UK businesses we've helped — measured in hours saved, errors removed, and decisions made faster."
    >
      {/* Hero stats bar */}
      <section className="pb-6 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 rounded-3xl bg-white/70 border border-black/5 p-4 sm:p-5 md:p-8 shadow-sm">
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-[var(--accent)]">8+</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">UK Businesses Served</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-[var(--accent)]">10k+</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">Hours Automated</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-[var(--accent)]">50+</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">Systems Connected</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-[var(--accent)]">99.9%</div>
                <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1">Uptime Maintained</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case study cards */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-8 md:space-y-12">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.05}>
              <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 shadow-sm overflow-hidden">
                {/* Top: Company header */}
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-5 sm:px-8 md:px-12 py-5 md:py-8 border-b border-blue-100/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">
                          {cs.industry}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                        {cs.company}
                      </h2>
                      <p className="text-sm text-[var(--foreground)]/60 mt-1">📍 {cs.location}</p>
                    </div>
                    {/* Tools used */}
                    <div className="flex flex-wrap gap-2">
                      {cs.tools.map((tool) => (
                        <span key={tool} className="inline-block rounded-xl bg-white px-3 py-1.5 text-xs font-medium shadow-sm border border-black/5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="px-5 sm:px-8 md:px-12 py-5 md:py-8 bg-white/60">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-sm">
                      {cs.avatar}
                    </div>
                    <div>
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-[var(--foreground)]/90 italic">
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                      <div className="mt-2 text-sm text-[var(--foreground)]/60">
                        <span className="font-semibold">{cs.author}</span> — {cs.company}, {cs.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem + Solution */}
                <div className="px-5 sm:px-8 md:px-12 py-5 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4M12 16h.01" />
                        </svg>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold">The Problem</h3>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--foreground)]/70">{cs.problem}</p>
                  </div>
                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold">Our Solution</h3>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--foreground)]/70">{cs.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="px-5 sm:px-8 md:px-12 py-5 md:py-8 bg-gradient-to-b from-transparent to-blue-50/30 border-t border-black/5">
                  <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 flex items-center gap-2">
                    <span className="text-blue-600">📈</span> Results
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="rounded-2xl bg-white border border-black/5 p-3 md:p-5 text-center shadow-sm">
                        <div className="text-lg md:text-2xl font-bold text-[var(--accent)]">{r.metric}</div>
                        <div className="text-xs md:text-sm text-[var(--foreground)]/60 mt-1 md:mt-2 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Services used */}
                  <div className="mt-5 md:mt-6 flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-[var(--foreground)]/50 mr-1">Services:</span>
                    {cs.services.map((s) => (
                      <span key={s} className="inline-block rounded-lg bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100/50 px-6 md:px-12 py-8 md:py-12 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Want results like these?
              </h2>
              <p className="text-sm md:text-base text-[var(--foreground)]/70 max-w-2xl mx-auto mb-5 md:mb-6">
                Book a free 30-minute consultation. We'll look at your systems and show you exactly where data and automation can save you time.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90 transition shadow-sm"
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
