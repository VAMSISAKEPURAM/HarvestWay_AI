"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Start `true` so SSR renders visible content (no flash of invisible page).
  // Once the client hydrates, we flip to `false` and let IntersectionObserver
  // animate each element in.
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mark as client-mounted so we can start hiding elements for animation.
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  // Before client JS mounts, render fully visible (SSR-safe).
  const isVisible = !mounted || show;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: mounted
          ? `opacity .9s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .9s cubic-bezier(.22,1,.36,1) ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
