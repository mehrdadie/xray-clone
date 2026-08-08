'use client';

import Reveal from './components/Reveal';
import SmoothScroll from './components/SmoothScroll';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Link from 'next/link';
import Image from 'next/image';

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
    image: '/assets/testimonial-kelsey.svg',
  },
  {
    quote:
      "We had disconnected systems everywhere — CRM, marketing, payments, spreadsheets. DataLift built a central dashboard and automated the data flow. Our team now focuses on selling, not admin.",
    author: 'Sales Director',
    title: 'Education Company, UK',
    image: '/assets/testimonial-karan.svg',
  },
  {
    quote:
      'The dashboards DataLift built give us real-time visibility into bookings, revenue, and student progress — all pulled from Salesforce and Chargebee automatically. It changed how we make decisions.',
    author: 'Managing Director',
    title: 'Trading Education Company, London',
    image: '/assets/testimonial-michelle.svg',
  },
];

const toolImageMap: Record<string, string> = {
  Salesforce: '/assets/tool-salesforce.png',
  GoHighLevel: '/assets/tool-gohighlevel.png',
  Chargebee: '/assets/tool-chargebee.png',
  'Google Sheets': '/assets/tool-google-sheets.png',
  n8n: '/assets/tool-n8n.png',
  Stripe: '/assets/tool-stripe.png',
  Zapier: '/assets/tool-zapier.png',
  Mailchimp: '/assets/tool-mailchimp.png',
};

const toolFallbackMap: Record<string, string> = {
  Salesforce: '#1566B9',
  GoHighLevel: '#3b82f6',
  Chargebee: '#0d9488',
  'Google Sheets': '#16a34a',
  n8n: '#dc2626',
  Stripe: '#7c3aed',
  Zapier: '#ff4f00',
  Mailchimp: '#ffe01b',
};

const heroTools = ['Salesforce', 'GoHighLevel', 'Chargebee', 'Google Sheets', 'n8n', 'Stripe'];
const allTools = ['Salesforce', 'GoHighLevel', 'Chargebee', 'Google Sheets', 'n8n', 'Stripe', 'Zapier', 'Mailchimp'];

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

function ToolBadge({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' }) {
  const imgSrc = toolImageMap[name];
  const bg = toolFallbackMap[name] || '#0E1C2D';
  const isSmall = size === 'sm';
  return (
    <div
      className={`reveal visible rounded-2xl bg-white/90 border border-black/5 p-3 md:p-5 text-center shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5`}
      style={{ transitionDelay: `${heroTools.indexOf(name) * 40}ms` }}
    >
      <div className={`mx-auto flex items-center justify-center ${isSmall ? 'h-8 w-8' : 'h-10 w-10 md:h-12 md:w-12'} rounded-xl bg-white border border-black/5 shadow-sm overflow-hidden mb-2 md:mb-3`}>
        {imgSrc ? (
          <Image src={imgSrc} alt={name} width={isSmall ? 32 : 48} height={isSmall ? 32 : 48} className="h-full w-full object-contain p-1" />
        ) : (
          <span className="text-xs md:text-sm font-semibold" style={{ color: bg }}>{name[0]}</span>
        )}
      </div>
      <div className={`font-semibold ${isSmall ? 'text-xs md:text-sm' : 'text-xs md:text-sm'}`}>{name}</div>
    </div>
  );
}

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl animate-[gradientShift_10s_ease-in-out_infinite]" />
              <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl animate-[gradientShift_12s_ease-in-out_infinite]" />
              <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-10 md:pt-28 md:pb-14 lg:pt-36 lg:pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="max-w-xl">
                  <Reveal>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                      Your systems disconnected?
                      <span className="block gradient-text mt-2">Let&apos;s fix that.</span>
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)]/65">
                      We connect your CRM, sales, marketing, and payment systems so your data flows automatically.
                      Build dashboards that show what matters. Use AI tools that actually save time. All with the systems you already use.
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a
                        href="#"
                        className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 sm:py-4 text-sm font-medium shadow-glow"
                      >
                        Book a Free Consultation
                      </a>
                      <a
                        href="/assessments"
                        className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)]/15 bg-white/60 backdrop-blur px-6 py-3.5 sm:py-4 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/80 shadow-card hover:shadow-card-hover"
                      >
                        Free System Assessment
                      </a>
                    </div>
                  </Reveal>
                </div>
                <Reveal delay={0.15}>
                  <div className="relative">
                    <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 p-6 md:p-10 lg:p-12 shadow-card relative overflow-hidden">
                      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-200/20 blur-2xl pointer-events-none" />
                      <div className="relative grid grid-cols-2 gap-3 md:gap-4">
                        {heroTools.map((tool) => (
                          <ToolBadge key={tool} name={tool} size="md" />
                        ))}
                      </div>
                      <div className="mt-5 md:mt-6 rounded-2xl animated-gradient p-4 md:p-5 text-center text-white text-sm md:text-base font-medium shadow-lg">
                        → One Connected Dashboard
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.05}>
                  <div className="text-center md:text-left">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">{m.value}</div>
                    <div className="mt-1.5 md:mt-2 text-xs sm:text-sm font-medium text-[var(--foreground)]/55">{m.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </section>

          {/* Tools We Work With */}
          <section className="py-12 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-5">
                  We work with the tools you already use
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[var(--foreground)]/65">
                  No rip-and-replace. We connect your existing CRM, marketing, sales, and payment platforms so everything works together.
                  If you&apos;re using Salesforce, GoHighLevel, Chargebee, or Google Sheets — we make them talk to each other.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 stagger">
                  {allTools.map((tool) => (
                    <ToolBadge key={tool} name={tool} size="sm" />
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Client Stories */}
          <section className="py-12 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <div className="text-center mb-10 md:mb-16">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-100/60">
                    Testimonials
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Client stories.
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-[var(--foreground)]/60 max-w-2xl mx-auto">
                    Real results from UK businesses we&apos;ve helped connect, automate, and grow.
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {testimonials.map((t, i) => (
                  <Reveal key={t.author} delay={i * 0.1}>
                    <div className="group relative rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col h-full">
                      <div className="absolute top-6 right-6 text-6xl md:text-7xl leading-none font-serif text-blue-100 select-none transition group-hover:text-blue-200">
                        &rdquo;
                      </div>
                      <div className="relative z-10 mb-5">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 border border-black/5 shadow-sm">
                          <img src={t.image} alt={t.author} className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <p className="text-sm md:text-base leading-relaxed text-[var(--foreground)]/80 flex-1 relative z-10">
                        {t.quote}
                      </p>
                      <div className="my-5 md:my-6 h-px bg-gradient-to-r from-blue-100 via-blue-50 to-transparent" />
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                          {t.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-sm md:text-base text-[var(--foreground)]">{t.author}</div>
                          <div className="text-xs md:text-sm text-[var(--foreground)]/50">{t.title}</div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.3}>
                <div className="text-center mt-8 md:mt-12">
                  <Link
                    href="/case-studies"
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-glow"
                  >
                    View All Case Studies
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* How We Work */}
          <section className="py-12 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">How We Work</h2>
                <p className="mb-8 md:mb-12 max-w-3xl text-base md:text-lg text-[var(--foreground)]/65">
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
                    <div className="group flex gap-5 rounded-3xl bg-white/70 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-2xl md:text-3xl shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm md:text-base text-[var(--foreground)]/65 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Models */}
          <section className="py-12 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-5">Two Ways to Work With Us</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[var(--foreground)]/65">
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
                    recommended: true,
                  },
                ].map((plan, i) => (
                  <Reveal key={plan.name} delay={i * 0.08}>
                    <div
                      className={`rounded-3xl bg-white/80 backdrop-blur border p-6 sm:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 flex flex-col h-full relative ${
                        plan.recommended ? 'border-blue-200 shadow-[0_8px_32px_rgba(21,102,185,0.12)]' : 'border-black/5'
                      }`}
                    >
                      {plan.recommended && (
                        <span className="absolute -top-3 left-6 px-3 py-1 rounded-full animated-gradient text-white text-xs font-semibold shadow-md">
                          Recommended
                        </span>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-[var(--accent)]">DataLift</span>
                        <span className="text-lg font-semibold">{plan.name}</span>
                      </div>
                      <div className="h-40 md:h-44 w-full flex items-center justify-center mt-4">
                        <img src={plan.image} alt={`DataLift ${plan.name}`} className="h-full w-full object-contain" />
                      </div>
                      <p className="mt-5 text-sm md:text-base text-[var(--foreground)]/65">{plan.desc}</p>
                      <ul className="mt-5 md:mt-6 space-y-3">
                        {plan.features.map((f) => (
                          <li key={f} className="flex gap-3 text-sm leading-relaxed text-[var(--foreground)]/85">
                            <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span dangerouslySetInnerHTML={{ __html: f.replace(/^.+?: /, '<strong>$&</strong>') }} />
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 md:mt-8 flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                        <span className="text-sm md:text-base text-[var(--foreground)]/55">{plan.sub}</span>
                      </div>
                      <Link
                        href={plan.name === 'Hourly' ? '/datalift-hourly' : '/datalift-monthly'}
                        className={`mt-5 md:mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition shadow-sm ${
                          plan.recommended
                            ? 'animated-gradient text-white hover:opacity-90 shadow-glow'
                            : 'btn-primary'
                        }`}
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
                  className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)]/15 bg-white/60 backdrop-blur px-6 py-3.5 text-sm font-medium transition hover:bg-white/80 shadow-card hover:shadow-card-hover"
                >
                  Explore Our Team Workshops & Training
                </Link>
              </Reveal>
            </div>
          </section>

          {/* Blog */}
          <section className="py-12 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 md:mb-10 gap-4">
                <Reveal>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Blog</h2>
                </Reveal>
                <Link
                  href="/blog"
                  className="inline-flex rounded-full border border-[var(--foreground)]/15 bg-white/60 backdrop-blur px-5 py-2.5 text-sm font-medium transition hover:bg-white/80 shadow-card self-start sm:self-auto"
                >
                  View All Articles
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {blogPosts.map((post, i) => (
                  <Reveal key={post.title} delay={i * 0.08}>
                    <div className="group rounded-3xl bg-white/80 backdrop-blur border border-black/5 overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 relative">
                        <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-5 md:p-6">
                        <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium mb-3">{post.tag}</span>
                        <h3 className="text-base md:text-lg font-semibold leading-snug">{post.title}</h3>
                        <p className="mt-2 text-sm text-[var(--foreground)]/65 leading-relaxed">{post.desc}</p>
                        <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] group/link">
                          Read Article
                          <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent -z-10" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <Reveal>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">Ready to lift your business?</h2>
                  <p className="mt-4 md:mt-6 max-w-xl text-base md:text-lg text-[var(--foreground)]/65 leading-relaxed">
                    Book a free 30-minute consultation. We&apos;ll look at your systems and show you exactly where data and automation can save you time.
                  </p>
                  <a
                    href="#"
                    className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 sm:py-4 text-sm font-medium shadow-glow mt-6 md:mt-8"
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
                    className="h-64 md:h-80 lg:h-96 w-full object-contain relative z-10"
                  />
                  <div className="absolute -inset-8 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 blur-2xl -z-10" />
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
