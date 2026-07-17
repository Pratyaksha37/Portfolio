import { asciiArt } from "@/lib/content";

export function AsciiContent() {
  return (
    <pre className="text-[var(--fg)] leading-tight" style={{ fontSize: "10px" }}>
      {asciiArt.join("\n")}
    </pre>
  );
}
