'use client';

import { useState, useMemo } from 'react';
import type { HeroData, HeroClass, HeroElement } from '@/types/hero';
import HeroCard from './HeroCard';

const CLASSES: ('all' | HeroClass)[] = ['all', 'Offense', 'Defense', 'Support'];
const ELEMENTS: ('all' | HeroElement)[] = ['all', 'Mechanical', 'Energy', 'Biochemical'];
const SORT_OPTIONS = [
  { value: 'name', label: 'Name' },
  { value: 'power', label: 'Power' },
  { value: 'health', label: 'Health' },
  { value: 'damage', label: 'Damage' },
] as const;

type SortKey = (typeof SORT_OPTIONS)[number]['value'];

const CLASS_FILTER_STYLES: Record<'all' | HeroClass, { active: string; inactive: string }> = {
  all: {
    active: 'border-orange-500 bg-orange-500/15 text-orange-300',
    inactive: 'border-white/8 text-slate-500 hover:border-white/20 hover:text-slate-300',
  },
  Offense: {
    active: 'border-red-500/60 bg-red-500/15 text-red-300',
    inactive: 'border-white/8 text-slate-500 hover:border-red-500/30 hover:text-red-400',
  },
  Defense: {
    active: 'border-blue-500/60 bg-blue-500/15 text-blue-300',
    inactive: 'border-white/8 text-slate-500 hover:border-blue-500/30 hover:text-blue-400',
  },
  Support: {
    active: 'border-green-500/60 bg-green-500/15 text-green-300',
    inactive: 'border-white/8 text-slate-500 hover:border-green-500/30 hover:text-green-400',
  },
};

interface HeroGalleryClientProps {
  heroes: HeroData[];
}

export default function HeroGalleryClient({ heroes }: HeroGalleryClientProps) {
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState<'all' | HeroClass>('all');
  const [elementFilter, setElementFilter] = useState<'all' | HeroElement>('all');
  const [sort, setSort] = useState<SortKey>('name');

  const filtered = useMemo(() => {
    let list = [...heroes];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((h) => h.name.toLowerCase().includes(q));
    }
    if (classFilter !== 'all') {
      list = list.filter((h) => h.class === classFilter);
    }
    if (elementFilter !== 'all') {
      list = list.filter((h) => h.element === elementFilter);
    }

    list.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'power') return b.basePower - a.basePower;
      if (sort === 'health') return b.baseHealth - a.baseHealth;
      if (sort === 'damage') return b.baseDamage - a.baseDamage;
      return 0;
    });

    return list;
  }, [heroes, search, classFilter, elementFilter, sort]);

  return (
    <div className="flex flex-col gap-6">
      {/* Controls row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative max-w-xs w-full">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search heroes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/[0.04] py-2 pl-9 pr-3 font-mono text-xs text-white placeholder-slate-600 outline-none focus:border-orange-500/50 focus:bg-white/[0.07] transition-colors"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded border border-white/10 bg-[#0d1117] py-1.5 pl-2 pr-6 font-mono text-xs text-slate-300 outline-none focus:border-orange-500/50 transition-colors appearance-none cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Class filter */}
      <div className="flex flex-wrap gap-1.5">
        {CLASSES.map((c) => (
          <button
            key={c}
            onClick={() => setClassFilter(c)}
            className={`rounded border px-3 py-1 font-mono text-[11px] font-medium transition-all ${
              classFilter === c
                ? CLASS_FILTER_STYLES[c].active
                : CLASS_FILTER_STYLES[c].inactive
            }`}
          >
            {c === 'all' ? 'All Classes' : c}
          </button>
        ))}
      </div>

      {/* Element filter */}
      <div className="flex flex-wrap gap-1.5">
        {ELEMENTS.map((el) => (
          <button
            key={el}
            onClick={() => setElementFilter(el)}
            className={`rounded border px-3 py-1 font-mono text-[11px] transition-all ${
              elementFilter === el
                ? 'border-orange-500/60 bg-orange-500/10 text-orange-300'
                : 'border-white/8 text-slate-500 hover:border-white/20 hover:text-slate-300'
            }`}
          >
            {el === 'all' ? 'All Elements' : el}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between border-b border-white/6 pb-4">
        <span className="font-mono text-xs text-slate-600">
          {filtered.length} hero{filtered.length !== 1 ? 'es' : ''}
          {filtered.length < heroes.length && (
            <span className="text-slate-700"> of {heroes.length}</span>
          )}
        </span>
        {(search || classFilter !== 'all' || elementFilter !== 'all') && (
          <button
            onClick={() => {
              setSearch('');
              setClassFilter('all');
              setElementFilter('all');
            }}
            className="font-mono text-[11px] text-slate-600 hover:text-orange-400 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-slate-700">
            <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="1.5" />
            <path d="M27 27L36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 18H22M18 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="font-mono text-sm text-slate-600">No heroes match your filters</p>
          <button
            onClick={() => {
              setSearch('');
              setClassFilter('all');
              setElementFilter('all');
            }}
            className="font-mono text-xs text-orange-500 hover:text-orange-400 transition-colors"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
