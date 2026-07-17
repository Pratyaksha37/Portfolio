"use client";

import { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  if (!time) {
    return <span className="text-[10px] md:text-xs text-[var(--dim)] font-mono tabular-nums">--/--/---- --:--:-- --</span>;
  }

  const pad = (n: number) => n.toString().padStart(2, "0");

  const months = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12",
  ];
  const month = months[time.getMonth()];
  const day = pad(time.getDate());
  const year = time.getFullYear();
  const hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  const mins = pad(time.getMinutes());
  const secs = pad(time.getSeconds());

  return (
    <span className="text-[10px] md:text-xs text-[var(--dim)] font-mono tabular-nums">
      {month}/{day}/{year} {pad(h12)}:{mins}:{secs} {ampm}
    </span>
  );
}
