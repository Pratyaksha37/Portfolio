import { experience } from "@/lib/content";

export function ExperienceContent() {
  return (
    <div className="space-y-6">
      {experience.map((exp, i) => (
        <div key={i}>
          <div className="flex items-start gap-2">
            <span className="text-[var(--accent)] shrink-0">└─</span>
            <div>
              <div className="text-[var(--fg)] font-semibold">
                {exp.title}
                <span className="text-[var(--dim)] font-normal">
                  {" "}
                  @ {exp.company}
                </span>
              </div>
              <div className="text-[var(--dim)] text-xs">
                {exp.period} | {exp.location}
              </div>
              <ul className="mt-2 space-y-1">
                {exp.details.map((d, j) => (
                  <li key={j} className="text-[var(--dim)] flex gap-2">
                    <span className="text-[var(--accent)]">-</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
