import { socials } from "@/lib/content";

export function SocialContent() {
  return (
    <div className="space-y-1">
      {socials.map((s, i) => (
        <div key={i}>
          <span className="text-[var(--dim)]">{s.name}: </span>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link"
          >
            {s.url}
          </a>
        </div>
      ))}
    </div>
  );
}
