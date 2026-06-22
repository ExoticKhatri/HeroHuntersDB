'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/heroes', label: 'Heroes' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/rankings', label: 'Rankings' },
  { href: '/teams', label: 'Teams' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded border border-orange-500/60 bg-orange-500/10">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="#f97316" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="2" fill="#f97316"/>
            </svg>
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-white uppercase sm:text-sm">
            Hero Hunters<span className="text-orange-500"> DB</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded px-3 py-2 font-mono text-xs font-medium tracking-wider text-slate-400 uppercase transition-colors hover:bg-white/5 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 font-mono text-xs font-medium text-orange-400 transition-all hover:border-orange-500/70 hover:bg-orange-500/20 md:flex"
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M2 13C2 10.79 4.24 9 7 9C9.76 9 12 10.79 12 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Contact
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="border-t border-white/8 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2.5 font-mono text-sm font-medium tracking-wider text-slate-300 uppercase transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
