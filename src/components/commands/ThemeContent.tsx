import { themeNames } from "@/lib/themes";

export function ThemeContent({ args }: { args?: string }) {
  if (!args || args === "list") {
    return (
      <div>
        <div className="text-[var(--dim)] mb-1">Available themes:</div>
        {themeNames.map((t) => (
          <div key={t} className="text-[var(--fg)]">
            <span className="text-[var(--accent)]">&gt;</span> {t}
          </div>
        ))}
        <div className="text-[var(--dim)] text-xs mt-1">
          Usage: theme &lt;name&gt;
        </div>
      </div>
    );
  }

  const lower = args.toLowerCase();
  const match = themeNames.includes(lower);
  if (!match) {
    return (
      <span className="text-[var(--dim)]">
        Unknown theme: {args}. Available: {themeNames.join(", ")}
      </span>
    );
  }

  return (
    <span>
      Theme changed to <span className="text-[var(--accent)]">{lower}</span>.
    </span>
  );
}
