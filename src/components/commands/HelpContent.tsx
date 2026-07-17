import { helpLines } from "@/lib/content";

export function HelpContent() {
  return <div className="whitespace-pre-wrap">{helpLines.join("\n")}</div>;
}
