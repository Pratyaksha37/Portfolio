import { certifications } from "@/lib/content";

export function CertificationsContent() {
  return (
    <div className="space-y-4">
      {certifications.map((c, i) => (
        <div key={i}>
          <div className="text-[var(--fg)] font-semibold">[{c.title}]</div>
          <div className="text-[var(--dim)] text-sm">
            {c.issuer} — {c.date}
          </div>
          <p className="text-[var(--dim)] mt-1">{c.description}</p>
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link text-sm"
          >
            View Certificate &rarr;
          </a>
        </div>
      ))}
    </div>
  );
}
