import { ReactNode } from "react";
import {
  WelcomeContent,
  HelpContent,
  AboutContent,
  ProjectsContent,
  SkillsContent,
  ExperienceContent,
  EducationContent,
  ContactContent,
  CertificationsContent,
  SocialContent,
  AsciiContent,
  ThemeContent,
} from "@/components/commands";

export type CommandHandler = (args?: string) => ReactNode;

const commandModules: Record<string, CommandHandler> = {
  welcome: () => <WelcomeContent />,
  help: () => <HelpContent />,
  about: () => <AboutContent />,
  projects: (args?: string) => <ProjectsContent args={args} />,
  skills: () => <SkillsContent />,
  experience: () => <ExperienceContent />,
  education: () => <EducationContent />,
  contact: () => <ContactContent />,
  certifications: () => <CertificationsContent />,
  social: () => <SocialContent />,
  ascii: () => <AsciiContent />,
  theme: (args?: string) => <ThemeContent args={args} />,
  resume: () => (
    <span>
      Resume download is not available yet.
      <br />
      Use <span className="text-[var(--accent)]">contact</span> to get in touch for a copy.
    </span>
  ),
  sudo: (args?: string) => {
    if (args === "hire-me") {
      return (
        <span>
          Permission granted.
          <br />
          Opening contact...<br />
          <br />
          <span className="text-[var(--accent)]">
            Email: pratyaksha.shastri2024@nst.rishihood.edu.in
          </span>
        </span>
      );
    }
    const responses = [
      "Permission denied. This incident will be reported.",
      "nice try. you don't have sudo access on this terminal.",
      "You need to be root to do that. (You're not root.)",
      "Nice try! But I'm afraid you don't have the privileges for that.",
      "sudo: effective uid is not 0, are you root? (you're not.)",
    ];
    return <span>{responses[Math.floor(Math.random() * responses.length)]}</span>;
  },
};

export const commandList = Object.keys(commandModules).sort();

export function getCommand(name: string): { handler: CommandHandler; args?: string } | undefined {
  if (name in commandModules) {
    return { handler: commandModules[name] };
  }

  const parts = name.split(/\s+/);
  const base = parts[0];
  if (base in commandModules) {
    return { handler: commandModules[base], args: parts.slice(1).join(" ") };
  }

  return undefined;
}

export function handleUnknown(input: string): ReactNode {
  return (
    <span>
      Command not found.
      <br />
      Type &quot;help&quot; to view available commands.
    </span>
  );
}
