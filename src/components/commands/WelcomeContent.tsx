import { welcomeLines } from "@/lib/content";

export function WelcomeContent() {
  return <div className="whitespace-pre-wrap">{welcomeLines[0]}</div>;
}
