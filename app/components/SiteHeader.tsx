'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/resources', label: 'Resources' },
  { href: '/about-us', label: 'About Us' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="text-xl font-bold tracking-tight">DataLift</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--foreground)]/80">
            {nav.map((item) => {
              const active = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${active ? 'text-[var(--foreground)]' : 'hover:text-[var(--foreground)]'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--foreground)]/90"
          >
            Book a Free Consultation
          </Link>
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-black/5 transition-colors active:bg-black/10"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 top-14 bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="md:hidden fixed top-14 left-0 right-0 z-50 bg-[var(--background)] border-b border-black/5 shadow-lg max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <nav className="px-4 pt-3 pb-6 flex flex-col gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || pathname?.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${active ? 'bg-black/5 text-[var(--foreground)]' : 'text-[var(--foreground)]/80 hover:bg-black/5'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90"
              >
                Book a Free Consultation
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
