import type { Metadata } from "next";
import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Pratyaksha Shastri | AI Engineer & Full-Stack Developer",
  description:
    "Interactive terminal portfolio of Pratyaksha Shastri — AI Engineer & Full-Stack Developer. Explore projects, skills, experience, and more via terminal commands.",
  openGraph: {
    title: "Pratyaksha Shastri | AI Engineer & Full-Stack Developer",
    description:
      "Interactive terminal portfolio of Pratyaksha Shastri — AI Engineer & Full-Stack Developer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratyaksha Shastri | AI Engineer & Full-Stack Developer",
    description:
      "Interactive terminal portfolio of Pratyaksha Shastri — AI Engineer & Full-Stack Developer.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(jetbrainsMono.variable, "font-sans", geist.variable)}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
