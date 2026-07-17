import { skills } from "@/lib/content";

const categories: [string, string[]][] = [
  ["Languages", skills.languages],
  ["Frameworks & Libraries", skills.frameworks],
  ["AI/ML", skills.aiMl],
  ["Core CS", skills.coreCs],
  ["Cloud & DevOps", skills.cloudDevOps],
  ["Tools", skills.tools],
];

export function SkillsContent() {
  return (
    <div className="space-y-4">
      {categories.map(([cat, items]) => (
        <div key={cat}>
          <div className="text-[var(--fg)] font-semibold mb-1">[{cat}]</div>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-0.5 border border-[var(--border)] text-[var(--dim)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
