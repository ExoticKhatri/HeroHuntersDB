'use client';

import { useState, useRef, useEffect } from 'react';
import { HEROES, HeroData } from '@/data/heroes';

const CLASS_COLORS = {
  Offense: 'text-red-400 bg-red-500/10 border-red-500/30',
  Defense: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Support: 'text-green-400 bg-green-500/10 border-green-500/30',
};

const ELEMENT_COLORS = {
  Mechanical: 'text-slate-300 bg-slate-500/10 border-slate-500/30',
  Energy: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  Biochemical: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
};

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results: HeroData[] = query.length > 0
    ? HEROES.filter(h => h.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : HEROES.slice(0, 6);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl">
      <div className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-all ${
        focused
          ? 'border-orange-500/60 bg-white/5 shadow-[0_0_20px_rgba(249,115,22,0.15)]'
          : 'border-white/10 bg-white/5'
      }`}>
        <svg className="shrink-0 text-orange-500" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M13 13L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          type="text"
          placeholder="Search heroes by name, class, or element..."
          className="flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-slate-600"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { setFocused(true); setOpen(true); }}
          onBlur={() => setFocused(false)}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setOpen(false); }}
            className="shrink-0 text-slate-500 transition-colors hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        )}
        <span className="hidden shrink-0 rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-600 sm:block">
          {HEROES.length} heroes
        </span>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-white/10 bg-[#0d1421] shadow-2xl shadow-black/50">
          {query && results.length === 0 ? (
            <div className="px-4 py-6 text-center font-mono text-sm text-slate-500">
              No heroes found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <>
              {!query && (
                <div className="border-b border-white/5 px-4 py-2">
                  <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">Popular Heroes</span>
                </div>
              )}
              <ul>
                {results.map((hero, i) => (
                  <li key={hero.id}>
                    <a
                      href={`/heroes/${hero.id}`}
                      className={`flex items-center gap-4 px-4 py-3 transition-colors hover:bg-white/5 ${
                        i !== results.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/10 bg-white/5 font-mono text-xs font-bold text-white">
                        {hero.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
                        <span className="truncate font-medium text-sm text-white">{hero.name}</span>
                        <div className="flex shrink-0 items-center gap-1.5">
                          <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${CLASS_COLORS[hero.class]}`}>
                            {hero.class}
                          </span>
                          <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${ELEMENT_COLORS[hero.element]}`}>
                            {hero.element}
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/5 px-4 py-2.5">
                <a
                  href="/rankings"
                  className="flex items-center justify-center gap-2 font-mono text-[11px] text-slate-500 transition-colors hover:text-orange-400"
                  onClick={() => setOpen(false)}
                >
                  View all {HEROES.length} heroes in Rankings
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5H8M5 2L8 5L5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
