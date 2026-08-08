'use client';

// SmoothScroll wrapper — Lenis removed to fix flashy scrolling.
// Native browser scrolling is used instead (no jank, no animation conflicts).

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
