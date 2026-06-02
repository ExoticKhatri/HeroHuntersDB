import { HEROES } from "@/data/heroes";

export default function HeroRosterSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-[11px] tracking-widest text-slate-500 uppercase">
            Hero Roster
          </p>
          <h2 className="mt-1 font-mono text-2xl font-bold text-white">
            Featured Heroes
          </h2>
        </div>
        <a
          href="/rankings"
          className="flex items-center gap-2 font-mono text-xs text-orange-400 transition-colors hover:text-orange-300"
        >
          View all {HEROES.length} heroes
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10M6 2L10 6L6 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {HEROES.slice(0, 6).map((hero) => (
          <a
            key={hero.id}
            href={`/heroes/${hero.id}`}
            className="group flex items-center gap-4 rounded-lg border border-white/8 bg-white/[0.03] p-4 transition-all hover:border-orange-500/30 hover:bg-white/[0.06]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-lg font-black text-white transition-colors group-hover:border-orange-500/40 group-hover:text-orange-400">
              {hero.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold text-white">{hero.name}</span>
                <span className="shrink-0 font-mono text-[10px] text-slate-600">
                  PWR {hero.basePower.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClassBadge heroClass={hero.class} />
                <ElementBadge element={hero.element} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ClassBadge({ heroClass }: { heroClass: "Offense" | "Defense" | "Support" }) {
  const styles = {
    Offense: "text-red-400 bg-red-500/10 border-red-500/30",
    Defense: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    Support: "text-green-400 bg-green-500/10 border-green-500/30",
  };
  return (
    <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${styles[heroClass]}`}>
      {heroClass}
    </span>
  );
}

function ElementBadge({ element }: { element: "Mechanical" | "Energy" | "Biochemical" }) {
  const styles = {
    Mechanical: "text-slate-300 bg-slate-500/10 border-slate-500/30",
    Energy: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    Biochemical: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  };
  return (
    <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${styles[element]}`}>
      {element}
    </span>
  );
}
