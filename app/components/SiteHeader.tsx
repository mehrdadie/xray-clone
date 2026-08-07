'use client';

import Image from 'next/image';
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

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo-xray.svg" alt="XRAY" width={120} height={28} priority />
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
        <Link
          href="#"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--foreground)]/90"
        >
          Book 15 Minutes Free
        </Link>
      </div>
    </header>
  );
}
