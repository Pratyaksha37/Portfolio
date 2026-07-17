"use client";

import LiveClock from "./LiveClock";
import { personalInfo } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="h-8 shrink-0 flex items-center justify-between px-4 md:px-6 border-t border-[var(--border)] bg-[var(--bg)] z-20">
      <span className="text-[10px] md:text-xs text-[#58a6ff] font-mono">
        {personalInfo.prompt}
      </span>
      <LiveClock />
    </footer>
  );
}
