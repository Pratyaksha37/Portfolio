"use client";

import { useState, useEffect } from "react";

export default function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = Array.from({ length: 60 }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 10 + Math.random() * 14,
    delay: -(Math.random() * 10),
    size: 2 + Math.random() * 3,
    opacity: 0.2 + Math.random() * 0.4,
  }));

  return (
    <>
      {items.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "var(--fg)",
            pointerEvents: "none",
            willChange: "transform",
            animationName: "particle-up",
            animationDuration: `${p.duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </>
  );
}
