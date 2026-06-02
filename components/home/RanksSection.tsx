const RANKS = [
  { rank: "Green",    mult: "1.0×", color: "text-green-400 border-green-500/30 bg-green-500/10" },
  { rank: "Bronze",   mult: "1.2×", color: "text-amber-600 border-amber-600/30 bg-amber-600/10" },
  { rank: "Silver",   mult: "1.5×", color: "text-slate-300 border-slate-400/30 bg-slate-400/10" },
  { rank: "Gold",     mult: "1.8×", color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10" },
  { rank: "Platinum", mult: "2.2×", color: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10" },
  { rank: "Ruby",     mult: "2.8×", color: "text-red-400 border-red-500/30 bg-red-500/10" },
] as const;

export default function RanksSection() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="font-mono text-[11px] tracking-widest text-slate-500 uppercase">
            Quick Reference
          </p>
          <h2 className="mt-2 font-mono text-2xl font-bold text-white">
            Hero Rank Multipliers
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {RANKS.map(({ rank, mult, color }) => (
            <div
              key={rank}
              className={`flex flex-col items-center gap-1 rounded-lg border px-4 py-3 sm:px-6 sm:py-4 ${color}`}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase sm:text-xs">
                {rank}
              </span>
              <span className="stat-number font-mono text-xl font-black sm:text-2xl">
                {mult}
              </span>
              <span className="font-mono text-[10px] text-slate-600">mult.</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
