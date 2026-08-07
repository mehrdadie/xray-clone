'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a timeout to ensure elements are visible even if ScrollTrigger doesn't fire
    const fallbackTimer = setTimeout(() => {
      gsap.set(el, { opacity: 1, y: 0 });
    }, 2000);

    gsap.fromTo(
      el,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          once: true,
        },
      }
    );

    return () => {
      clearTimeout(fallbackTimer);
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [delay]);

  // Default visible state — GSAP will animate from opacity 0
  return <div ref={ref} style={{ opacity: 1 }}>{children}</div>;
}
