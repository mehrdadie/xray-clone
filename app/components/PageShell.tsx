'use client';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import SmoothScroll from './SmoothScroll';
import Reveal from './Reveal';

export default function PageShell({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <section className="pt-8 pb-6 md:pt-16 md:pb-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h1 className="text-2xl md:text-5xl font-bold tracking-tight">{title}</h1>
              </Reveal>
              {subtitle ? (
                <Reveal delay={0.1}>
                  <p className="mt-4 max-w-3xl text-base md:text-lg text-[var(--foreground)]/80">{subtitle}</p>
                </Reveal>
              ) : null}
            </div>
          </section>
          {children}
        </main>
        <SiteFooter />
      </div>
    </SmoothScroll>
  );
}
