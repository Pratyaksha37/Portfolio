import { education } from "@/lib/content";

export function EducationContent() {
  return (
    <div className="space-y-4">
      {education.map((e, i) => (
        <div key={i}>
          <div className="text-[var(--fg)] font-semibold">[{e.degree}]</div>
          <div className="text-[var(--dim)]">
            {e.institution}, {e.location}
          </div>
          <div className="text-[var(--dim)] text-sm">
            {e.period} | {e.score}
          </div>
        </div>
      ))}
    </div>
  );
}
