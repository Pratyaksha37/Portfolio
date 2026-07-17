"use client";

import { useState, useEffect } from "react";

export default function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = Array.from({ length: 20 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = 6 + Math.random() * 10;
    const delay = Math.random() * 8;
    const size = 1 + Math.random() * 2;
    const opacity = 0.1 + Math.random() * 0.3;
    return { left, top, duration, delay, size, opacity };
  });

  return (
    <>
      {items.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `particle-drift ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
        />
      ))}
    </>
  );
}
