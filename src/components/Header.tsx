"use client";

export default function Header() {
  return (
    <header className="h-10 md:h-12 shrink-0 flex items-center justify-between px-4 md:px-6 border-b border-[var(--border)] bg-[var(--bg)] z-20">
      <div className="flex items-center gap-3">
        <span className="text-sm md:text-base font-semibold text-[var(--header-fg)]">
          Pratyaksha Shastri
        </span>
        <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-[var(--dim)]">
          AI Engineer | Full Stack Developer
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--fg)] animate-pulse" />
        <span className="text-[10px] md:text-xs text-[var(--fg)] font-medium">
          Available for Hire
        </span>
      </div>
    </header>
  );
}
