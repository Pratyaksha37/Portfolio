"use client";

import { useEffect } from "react";
import Terminal from "@/components/Terminal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lanyard from "@/components/Lanyard/Lanyard";
import Particles from "@/components/Particles";

const DEPRECATION_FILTERS = [
  "THREE.Clock: This module has been deprecated",
  "using deprecated parameters for the initialization function",
];

export default function Home() {
  useEffect(() => {
    const warn = console.warn.bind(console);
    console.warn = (...args) => {
      if (
        typeof args[0] === "string" &&
        DEPRECATION_FILTERS.some((f) => args[0].includes(f))
      )
        return;
      warn(...args);
    };
    return () => {
      console.warn = warn;
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-[var(--bg)] overflow-hidden">
      <div className="scanline" />
      <Header />
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
        <aside className="hidden lg:flex lg:w-[40%] lg:flex-col relative lg:border-r border-[var(--border)] lg:h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[var(--bg)] to-[#050505]" />
          <Particles />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 w-full flex-1 min-h-0">
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              fov={25}
              transparent={true}
              // @ts-expect-error Lanyard JS prop types
              frontImage="/images/photo.png"
              // @ts-expect-error Lanyard JS prop types
              backImage="/images/avatar.svg"
            />
          </div>
        </aside>
        <main className="w-full lg:w-[60%] flex flex-col min-h-0">
          <Terminal />
        </main>
      </div>
      <Footer />
    </div>
  );
}
