"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/content";
import { getCommand, handleUnknown, commandList } from "@/lib/commands";
import { applyTheme } from "@/lib/themes";
import type { ReactNode } from "react";

interface LogEntry {
  id: string;
  type: "command" | "output";
  content: ReactNode;
}

function TypeWriter({ content, speed = 20, onDone }: { content: ReactNode; speed?: number; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const fullRef = useRef<HTMLDivElement>(null);
  const fullText = useRef("");
  const calledRef = useRef(false);

  useEffect(() => {
    if (fullRef.current) {
      fullText.current = fullRef.current.textContent || "";
    }
  }, []);

  useEffect(() => {
    if (done) return;
    const full = fullText.current;
    if (displayed.length < full.length) {
      const t = setTimeout(() => {
        setDisplayed(full.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [displayed, speed, done]);

  useEffect(() => {
    if (done && onDone && !calledRef.current) {
      calledRef.current = true;
      onDone();
    }
  }, [done, onDone]);

  if (done) {
    return <>{content}</>;
  }

  return (
    <div className="relative">
      <div ref={fullRef} className="absolute opacity-0 pointer-events-none" aria-hidden>
        {content}
      </div>
      <span>{displayed}</span>
      <span className="cursor-blink">▊</span>
    </div>
  );
}

export default function Terminal() {
  const welcomeHandler = getCommand("welcome");
  const initialOutput = welcomeHandler ? welcomeHandler.handler() : null;
  const initialLogs: LogEntry[] = welcomeHandler
    ? [
        { id: `log-1-init`, type: "command", content: "welcome" },
        { id: `log-2-init`, type: "output", content: initialOutput! },
      ]
    : [];

  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);
  const suggestRef = useRef<HTMLDivElement>(null);
  const logIdRef = useRef(2);

  const addLog = useCallback(
    (type: "command" | "output", content: ReactNode) => {
      const id = `log-${++logIdRef.current}-${Date.now()}`;
      setLogs((prev) => [...prev, { id, type, content }]);
    },
    [],
  );

  const runCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      addLog("command", trimmed);

      if (trimmed.toLowerCase() === "clear") {
        setLogs([]);
        setIsAnimating(false);
        return;
      }

      const parsed = getCommand(trimmed);
      if (parsed) {
        const { handler, args } = parsed;

        if (trimmed.split(/\s+/)[0] === "theme" && args) {
          const ok = applyTheme(args);
          if (!ok && args !== "list") {
            addLog("output", handleUnknown(trimmed));
            return;
          }
        }

        const output = handler(args);
        addLog("output", output);
        setIsAnimating(true);
      } else if (trimmed) {
        addLog("output", handleUnknown(trimmed));
        setIsAnimating(true);
      }
    },
    [addLog],
  );

  useEffect(() => {
    const handler = (e: Event) => {
      const cmd = (e as CustomEvent).detail;
      if (typeof cmd === "string") {
        setInput(cmd);
        inputRef.current?.focus();
      }
    };
    window.addEventListener("terminal-set-input", handler);
    return () => window.removeEventListener("terminal-set-input", handler);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  useEffect(() => {
    if (input.trim()) {
      const matches = commandList.filter((c) =>
        c.startsWith(input.trim().toLowerCase()),
      );
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0 && matches.length < 20);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [input]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (suggestRef.current && !suggestRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;
    setHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);
    runCommand(cmd);
    setInput("");
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const idx =
        historyIdx === -1
          ? history.length - 1
          : Math.max(0, historyIdx - 1);
      setHistoryIdx(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      const idx = historyIdx + 1;
      if (idx >= history.length) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length === 1) {
        setInput(suggestions[0]);
        setShowSuggestions(false);
      } else if (suggestions.length > 1) {
        const base = input.trim().toLowerCase();
        const commonPrefix = suggestions.reduce((prefix, s) => {
          let i = 0;
          while (i < prefix.length && i < s.length && prefix[i] === s[i]) i++;
          return prefix.slice(0, i);
        }, base);
        if (commonPrefix.length > base.length) {
          setInput(commonPrefix);
        }
      }
    }
  };

  const focusInput = () => inputRef.current?.focus();

  const handleAnimationDone = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const navItems = [
    "help",
    "about",
    "projects",
    "skills",
    "experience",
    "contact",
    "education",
    "certifications",
    "social",
    "sudo",
    "clear",
  ];

  return (
    <div
      className="h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] font-mono text-base md:text-lg"
      onClick={focusInput}
    >
      <div className="shrink-0 flex flex-wrap gap-1 px-3 pt-2 pb-1 border-b border-[var(--border)]">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={(e) => {
              e.stopPropagation();
              if (item === "clear") {
                runCommand("clear");
              } else {
                setInput(item);
                setSuggestions([item]);
                setShowSuggestions(false);
                inputRef.current?.focus();
              }
            }}
            className="text-xs md:text-sm px-1.5 py-0.5 text-[var(--dim)] hover:text-[var(--fg)] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-3 md:p-4">
        <AnimatePresence initial={false}>
          {logs.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="mb-1"
            >
              {entry.type === "command" ? (
                <div>
                  <span className="text-[#58a6ff]">
                    {personalInfo.prompt}
                  </span>
                  <span className="ml-2">{entry.content as string}</span>
                </div>
              ) : (
                <div className="whitespace-pre-wrap break-words">
                  <TypeWriter content={entry.content} speed={25} onDone={handleAnimationDone} />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={logEndRef} />

        <div className="relative mt-1">
          {showSuggestions && suggestions.length > 0 && (
            <div
              ref={suggestRef}
              className="absolute bottom-full left-0 mb-1 bg-[#0a0a0a] border border-[var(--border)] rounded max-h-32 overflow-y-auto z-10"
            >
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setInput(s);
                    setShowSuggestions(false);
                    inputRef.current?.focus();
                  }}
                  className="block w-full text-left text-sm px-3 py-1.5 text-[var(--dim)] hover:text-[var(--fg)] hover:bg-[var(--border)] transition-colors font-mono"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          {!isAnimating && (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-[#58a6ff] shrink-0 text-base md:text-lg">
                {personalInfo.prompt}
              </span>
              <div className="flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="terminal-input flex-1 bg-transparent text-[var(--fg)] outline-none font-mono text-base md:text-lg caret-[var(--fg)]"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
