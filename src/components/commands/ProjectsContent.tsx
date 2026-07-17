import { projects } from "@/lib/content";

export function ProjectsContent({ args }: { args?: string }) {
  const idx = args ? parseInt(args, 10) : NaN;
  const detailIndex = isNaN(idx) ? -1 : idx;

  if (detailIndex > 0 && detailIndex <= projects.length) {
    const p = projects[detailIndex - 1];
    return (
      <div>
        <div className="text-[var(--fg)] font-semibold">
          #{detailIndex} {p.title}
        </div>
        {p.date && <div className="text-[var(--dim)] text-xs">({p.date})</div>}
        <p className="text-[var(--dim)] mt-2">{p.description}</p>
        <div className="mt-2 flex gap-3">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="terminal-link text-sm">
            GitHub &rarr;
          </a>
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="terminal-link text-sm">
            Demo &rarr;
          </a>
        </div>
        <div className="text-[var(--accent)] text-xs mt-2">Tech: {p.tech}</div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {projects.map((p, i) => (
        <div key={i}>
          <div className="text-[var(--fg)]">
            <span className="text-[var(--accent)]">{i + 1}.</span> {p.title}
          </div>
          <div className="text-[var(--dim)] text-xs">{p.description.slice(0, 120)}...</div>
          <div className="flex gap-3 text-xs mt-0.5">
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="terminal-link">
              GitHub
            </a>
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="terminal-link">
              Demo
            </a>
            <span className="text-[var(--dim)]">
              Tech: {p.tech.slice(0, 40)}...
            </span>
          </div>
        </div>
      ))}
      <div className="text-[var(--dim)] text-xs mt-2">
        Type &apos;projects &lt;n&gt;&apos; for full project details.
      </div>
    </div>
  );
}
