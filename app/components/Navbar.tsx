"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 right-0 z-50 p-6" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-2xl text-white backdrop-blur-sm transition-colors hover:border-zinc-500 hover:bg-zinc-700/80"
        aria-label="Menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <div
        className={`absolute right-6 mt-2 w-48 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/95 shadow-2xl backdrop-blur-sm transition-all duration-200 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="block px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-700/60 hover:text-white"
        >
          Home
        </Link>
        <div className="mx-4 border-t border-zinc-700" />
        <Link
          href="/team"
          onClick={() => setIsOpen(false)}
          className="block px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-700/60 hover:text-white"
        >
          Our Team
        </Link>
      </div>
    </nav>
  );
}
