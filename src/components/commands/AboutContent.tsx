import { aboutLines } from "@/lib/content";

export function AboutContent() {
  return <div className="whitespace-pre-wrap">{aboutLines.join("\n")}</div>;
}
