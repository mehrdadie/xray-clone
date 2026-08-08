'use client';

import Reveal from './components/Reveal';
import SmoothScroll from './components/SmoothScroll';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const metrics = [
  { value: '50+', label: 'Systems Connected' },
  { value: '10k+', label: 'Hours Automated' },
  { value: '8', label: 'UK Businesses Served' },
  { value: '99.9%', label: 'Uptime Maintained' },
];

const testimonials = [
  {
    quote:
      "DataLift connected our Salesforce, GoHighLevel, and Chargebee so everything just works. Our sales team no longer wastes hours copying data between systems. It's all automated, and we can see everything on one dashboard.",
    author: 'Operations Manager',
    title: 'Property Training Company, Essex',
  },
  {
    quote:
      "We had disconnected systems everywhere — CRM, marketing, payments, spreadsheets. DataLift built a central dashboard and automated the data flow. Our team now focuses on selling, not admin.",
    author: 'Sales Director',
    title: 'Education Company, UK',
  },
  {
    quote:
      "The dashboards DataLift built give us real-time visibility into bookings, revenue, and student progress — all pulled from Salesforce and Chargebee automatically. It changed how we make decisions.",
    author: 'Managing Director',
    title: 'Trading Education Company, London',
  },
];

const blogPosts = [
  {
    title: 'How to Connect Salesforce With Your Marketing Tools (Without a Developer)',
    tag: 'Integration',
    image: '/assets/blog-1.svg',
    desc: 'A practical guide to syncing Salesforce with GoHighLevel, Mailchimp, and other marketing platforms — no code required.',
  },
  {
    title: 'Why Your CRM and Payment System Should Talk to Each Other',
    tag: 'Automation',
    image: '/assets/blog-2.svg',
    desc: "Disconnected CRM and billing means lost revenue and wasted hours. Here's how to fix it with tools you already have.",
  },
  {
    title: 'Building AI Dashboards for Non-Technical Teams',
    tag: 'AI',
    image: '/assets/blog-3.svg',
    desc: 'How UK businesses use AI-powered dashboards to turn raw data from multiple systems into clear, actionable decisions.',
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-8 md:pt-20 md:pb-12 lg:pt-28 lg:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="max-w-xl">
                  <Reveal>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                      Your systems disconnected?
                      <span className="block text-[var(--accent)]">Let's fix that.</span>
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-5 text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)]/70">
                      We connect your CRM, sales, marketing, and payment systems so your data flows automatically.
                      Build dashboards that show what matters. Use AI tools that actually save time. All with the systems you already use.
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 sm:py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--foreground)]/90 shadow-sm"
                      >
                        Book a Free Consultation
                      </a>
                      <a
                        href="/assessments"
                        className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)]/20 px-6 py-3 sm:py-3.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/5"
                      >
                        Free System Assessment
                      </a>
                    </div>
                  </Reveal>
                </div>
                <Reveal delay={0.15}>
                  <div className="relative">
                    <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 md:p-10 lg:p-12 border border-blue-100/50 shadow-sm">
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {['Salesforce', 'GoHighLevel', 'Chargebee', 'Google Sheets', 'n8n', 'Stripe'].map((tool, i) => (
                          <div
                            key={tool}
                            className="rounded-2xl bg-white p-3 md:p-5 text-center text-xs md:text-sm font-semibold shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                            style={{ transitionDelay: `${i * 30}ms` }}
                          >
                            {tool}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 md:mt-6 rounded-2xl bg-[var(--foreground)] p-4 md:p-5 text-center text-white text-sm md:text-base font-medium shadow-md">
                        → One Connected Dashboard
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="border-y border-black/5 bg-white/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.05}>
                  <div className="text-center md:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">{m.value}</div>
                    <div className="block text-xs sm:text-sm font-medium text-[var(--foreground)]/60 mt-1 md:mt-2">{m.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Tools We Work With */}
          <section className="py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  We work with the tools you already use
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[var(--foreground)]/70">
                  No rip-and-replace. We connect your existing CRM, marketing, sales, and payment platforms so everything works together.
                  If you're using Salesforce, GoHighLevel, Chargebee, or Google Sheets — we make them talk to each other.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6">
                  {['Salesforce', 'GoHighLevel', 'Chargebee', 'Google Sheets', 'n8n', 'Stripe', 'Zapier', 'Mailchimp'].map((tool) => (
                    <div
                      key={tool}
                      className="rounded-2xl bg-white/70 border border-black/5 p-4 md:p-8 text-center text-sm md:text-base font-medium shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Client Stories */}
          <section className="py-12 md:py-20 bg-white/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 md:mb-10 gap-4">
                <div className="flex-1">
                  <Reveal>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Client stories.</h2>
                    <p className="mt-2 text-sm md:text-base text-[var(--foreground)]/70">Real results from UK businesses we've helped.</p>
                  </Reveal>
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex rounded-full border border-[var(--foreground)]/20 px-5 py-2.5 text-sm font-medium hover:bg-[var(--foreground)]/5 self-start sm:self-auto"
                >
                  View All Case Studies
                </Link>
              </div>
              <Reveal delay={0.1}>
                <div className="relative">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    className="overflow-visible"
                  >
                    {testimonials.map((t) => (
                      <SwiperSlide key={t.author}>
                        <div className="rounded-3xl bg-white border border-black/5 p-6 sm:p-8 md:p-12 shadow-sm flex flex-col gap-6">
                          <div>
                            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-[var(--foreground)]">
                              &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="mt-5 md:mt-6 flex items-center gap-3">
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-blue-600 font-bold text-sm md:text-base">
                                {t.author.charAt(0)}
                              </div>
                              <div>
                                <div className="font-semibold text-sm md:text-base">{t.author}</div>
                                <div className="text-xs md:text-sm text-[var(--foreground)]/60">{t.title}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Reveal>
            </div>
          </section>

          {/* How We Work */}
          <section className="py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">How We Work</h2>
                <p className="mb-8 md:mb-12 max-w-3xl text-base md:text-lg text-[var(--foreground)]/70">
                  At DataLift, everything we do is guided by one principle: make your data work for you, not the other way around.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {[
                  { num: '1', title: 'Connect First:', desc: 'We start by connecting your disconnected systems — CRM, sales, marketing, payments — so data flows automatically.', icon: '🔗' },
                  { num: '2', title: 'Dashboards That Matter:', desc: 'We build clear, real-time dashboards that show revenue, bookings, and performance — all in one place.', icon: '📊' },
                  { num: '3', title: 'Automate the Boring Stuff:', desc: 'We use automation tools like n8n to remove manual data entry, copy-paste, and spreadsheet errors.', icon: '⚙️' },
                  { num: '4', title: 'AI That Actually Helps:', desc: 'We build practical AI tools — smart summaries, lead scoring, predictive insights — that your non-technical team can use.', icon: '🤖' },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="flex gap-5 rounded-3xl bg-white/70 border border-black/5 p-5 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md">
                      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-2xl md:text-3xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm md:text-base text-[var(--foreground)]/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Models */}
          <section className="py-12 md:py-20 bg-white/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">Two Ways to Work With Us</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[var(--foreground)]/70">
                  Whether you need a quick fix or a full systems overhaul, we offer transparent hourly and monthly packages — designed for UK businesses.
                </p>
              </Reveal>
              <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                {[
                  {
                    name: 'Hourly',
                    price: '£150',
                    sub: '/hr',
                    image: '/assets/illus-hourly.svg',
                    desc: 'For businesses that need expert help connecting systems or fixing automation issues — right away.',
                    features: [
                      'Flexible, hourly, as-needed billing with no long-term commitment.',
                      'Hands-on support: Work side-by-side with a data and automation expert on a live call.',
                      'Transparent tracking: All sessions logged with notes and outcomes.',
                    ],
                  },
                  {
                    name: 'Monthly',
                    price: '£4,000',
                    sub: '/mo',
                    image: '/assets/illus-monthly.svg',
                    desc: 'For businesses ready to connect all their systems and build a unified data and automation platform.',
                    features: [
                      'Dedicated support: A dedicated automation specialist and project manager.',
                      'Proactive partnership: Fixed monthly billing with ongoing monitoring and improvements.',
                      'Full platform: Connected systems, live dashboards, automated workflows, and AI tools.',
                    ],
                  },
                ].map((plan, i) => (
                  <Reveal key={plan.name} delay={i * 0.08}>
                    <div className="rounded-3xl bg-white border border-black/5 p-6 sm:p-8 shadow-sm flex flex-col transition hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-[var(--accent)]">DataLift</span>
                        <span className="text-lg font-semibold">{plan.name}</span>
                      </div>
                      <div className="h-40 md:h-44 w-full flex items-center justify-center">
                        <img src={plan.image} alt={`DataLift ${plan.name}`} className="h-full w-full object-contain" />
                      </div>
                      <p className="mt-5 text-sm md:text-base text-[var(--foreground)]/70">{plan.desc}</p>
                      <ul className="mt-5 md:mt-6 space-y-3">
                        {plan.features.map((f) => (
                          <li key={f} className="flex gap-3 text-sm leading-relaxed text-[var(--foreground)]/90">
                            <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span dangerouslySetInnerHTML={{ __html: f.replace(/^.+?: /, '<strong>$&</strong>') }} />
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 md:mt-8 flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                        <span className="text-sm md:text-base text-[var(--foreground)]/60">{plan.sub}</span>
                      </div>
                      <Link
                        href={plan.name === 'Hourly' ? '/datalift-hourly' : '/datalift-monthly'}
                        className="mt-5 md:mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90 transition"
                      >
                        Learn More About DataLift {plan.name}
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Workshops Link */}
          <section className="py-8 md:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
              <Reveal>
                <Link
                  href="/datalift-workshops"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)]/20 px-6 py-3.5 text-sm font-medium hover:bg-[var(--foreground)]/5 transition"
                >
                  Explore Our Team Workshops & Training
                </Link>
              </Reveal>
            </div>
          </section>

          {/* Blog */}
          <section className="py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 md:mb-10 gap-4">
                <Reveal>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Blog</h2>
                </Reveal>
                <Link
                  href="/blog"
                  className="inline-flex rounded-full border border-[var(--foreground)]/20 px-5 py-2.5 text-sm font-medium hover:bg-[var(--foreground)]/5 self-start sm:self-auto"
                >
                  View All Articles
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {blogPosts.map((post, i) => (
                  <Reveal key={post.title} delay={i * 0.08}>
                    <div className="group rounded-3xl bg-white border border-black/5 p-4 shadow-sm transition hover:shadow-md">
                      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
                        <img src={post.image} alt={post.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                      </div>
                      <div className="mt-4">
                        <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium">{post.tag}</span>
                      </div>
                      <h3 className="mt-3 text-base md:text-lg font-semibold leading-snug">{post.title}</h3>
                      <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">{post.desc}</p>
                      <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                        Read Article <span>→</span>
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden bg-white/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <Reveal>
                <div>
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to lift your business?</h2>
                  <p className="mt-4 max-w-xl text-base md:text-lg text-[var(--foreground)]/70">
                    Book a free 30-minute consultation. We'll look at your systems and show you exactly where data and automation can save you time.
                  </p>
                  <a
                    href="#"
                    className="mt-6 md:mt-8 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[var(--foreground)]/90 shadow-sm transition"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative">
                  <img
                    src="/assets/cta-illustration.png"
                    alt="DataLift illustration"
                    className="h-64 md:h-80 w-full object-contain"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </SmoothScroll>
  );
}
