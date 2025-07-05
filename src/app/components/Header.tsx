"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight animate-fade-in text-gray-900 dark:text-white" style={{ fontWeight: 700 }}>
        <span className="underline-draw text-gray-900 dark:text-white">Flagship</span>{" "}
        <span className="text-purple-400 dark:text-purple-400">Scoreboard</span>
      </h1>

      {visible && (
        <p className="text-sm sm:text-base mt-3 text-gray-700 dark:text-gray-300 opacity-0 animate-fade-in-slow">
          Top Device Scoreboard.
        </p>
      )}
    </header>
  );
}