import Link from 'next/link';
import type { HeroData } from '@/types/hero';
import HeroPortrait from './HeroPortrait';

const CLASS_STYLES = {
  Offense: 'text-red-400 bg-red-500/10 border-red-500/30',
  Defense: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Support: 'text-green-400 bg-green-500/10 border-green-500/30',
};

const ELEMENT_STYLES = {
  Mechanical: 'text-slate-300 bg-slate-500/10 border-slate-500/30',
  Energy: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  Biochemical: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
};

const CLASS_HOVER_BORDER = {
  Offense: 'hover:border-red-500/40',
  Defense: 'hover:border-blue-500/40',
  Support: 'hover:border-green-500/40',
};

interface HeroCardProps {
  hero: HeroData;
}

export default function HeroCard({ hero }: HeroCardProps) {
  return (
    <Link
      href={`/heroes/${hero.id}`}
      className={`group flex flex-col gap-0 overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] transition-all hover:bg-white/[0.06] ${CLASS_HOVER_BORDER[hero.class]}`}
    >
      {/* Portrait strip */}
      <div className="relative flex h-28 items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">
        {/* Subtle radial glow behind portrait */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              hero.class === 'Offense'
                ? 'radial-gradient(ellipse at 50% 60%, #dc2626 0%, transparent 70%)'
                : hero.class === 'Defense'
                ? 'radial-gradient(ellipse at 50% 60%, #2563eb 0%, transparent 70%)'
                : 'radial-gradient(ellipse at 50% 60%, #16a34a 0%, transparent 70%)',
          }}
        />
        <HeroPortrait
          heroId={hero.id}
          heroName={hero.name}
          heroClass={hero.class}
          element={hero.element}
          portraitId={hero.portraitId}
          size="lg"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <span className="text-sm font-semibold text-white leading-tight">{hero.name}</span>
          <span className="shrink-0 font-mono text-[10px] text-slate-600 mt-0.5">
            PWR {hero.basePower.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${CLASS_STYLES[hero.class]}`}
          >
            {hero.class}
          </span>
          <span
            className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${ELEMENT_STYLES[hero.element]}`}
          >
            {hero.element}
          </span>
        </div>
        <div className="mt-1 grid grid-cols-3 gap-1 border-t border-white/5 pt-2">
          <StatMini label="HP" value={`${Math.round(hero.baseHealth / 1000)}k`} />
          <StatMini label="DMG" value={`${Math.round(hero.baseDamage / 1000)}k`} />
          <StatMini label="ARM" value={`${Math.round(hero.baseArmor / 1000)}k`} />
        </div>
      </div>
    </Link>
  );
}

function StatMini({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-mono text-[9px] text-slate-600 uppercase tracking-wider">{label}</span>
      <span className="font-mono text-[11px] font-semibold text-slate-300">{value}</span>
    </div>
  );
}
