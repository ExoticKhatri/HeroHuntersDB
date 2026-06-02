export default function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-12 text-center">
        <p className="font-mono text-[11px] tracking-widest text-orange-500 uppercase">
          Platform Features
        </p>
        <h2 className="mt-2 font-mono text-3xl font-bold text-white">
          Your Tactical Command Center
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Three precision tools engineered for serious Hero Hunters players.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <FeatureCard
          href="/calculator"
          icon={<CalculatorIcon />}
          tag="Tool 01"
          title="Stat Calculator"
          description="Select any hero, set your target level and rank, then watch every stat and resource cost update in real-time. Know exactly what you need before you spend a single coin."
          highlights={["Level 1–100 scaling", "All 6 rank tiers", "Skin stat bonuses", "Gold & XP shopping list"]}
          accentColor="orange"
        />
        <FeatureCard
          href="/rankings"
          icon={<TrophyIcon />}
          tag="Tool 02"
          title="Hero Rankings"
          description="The complete Prime Power Leaderboard — every hero pre-calculated at their theoretical max (Ruby, Level 100). Sort by power, health, DPS, or filter by class and element."
          highlights={["Max power rankings", "Sortable columns", "Class & element filters", "Unlock method guide"]}
          accentColor="cyan"
        />
        <FeatureCard
          href="/teams"
          icon={<TeamsIcon />}
          tag="Tool 03"
          title="Meta Teams"
          description="Curated 5-hero squad compositions optimized for PVP, Bounty Raids, and Gauntlet. Load any squad directly into the calculator to see combined upgrade costs."
          highlights={["PVP defense builds", "Bounty raid squads", "Gauntlet lineups", "Calculator bridge"]}
          accentColor="violet"
        />
      </div>
    </section>
  );
}

function FeatureCard({
  href, icon, tag, title, description, highlights, accentColor,
}: {
  href: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  highlights: string[];
  accentColor: "orange" | "cyan" | "violet";
}) {
  const colors = {
    orange: {
      border: "border-orange-500/20 hover:border-orange-500/50",
      iconBg: "border-orange-500/30 bg-orange-500/10",
      tag: "text-orange-500",
      bullet: "bg-orange-500",
      btn: "border-orange-500/40 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 hover:border-orange-500/60",
    },
    cyan: {
      border: "border-cyan-500/20 hover:border-cyan-500/50",
      iconBg: "border-cyan-500/30 bg-cyan-500/10",
      tag: "text-cyan-400",
      bullet: "bg-cyan-400",
      btn: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/60",
    },
    violet: {
      border: "border-violet-500/20 hover:border-violet-500/50",
      iconBg: "border-violet-500/30 bg-violet-500/10",
      tag: "text-violet-400",
      bullet: "bg-violet-400",
      btn: "border-violet-500/40 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 hover:border-violet-500/60",
    },
  };
  const c = colors[accentColor];

  return (
    <div className={`card-glow group flex flex-col gap-6 rounded-xl border bg-white/[0.03] p-6 transition-all duration-300 ${c.border}`}>
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${c.iconBg}`}>
          {icon}
        </div>
        <span className={`font-mono text-[10px] tracking-widest ${c.tag} uppercase`}>{tag}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-mono text-xl font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>

      <ul className="flex flex-col gap-1.5">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 font-mono text-xs text-slate-500">
            <span className={`h-1 w-1 shrink-0 rounded-full ${c.bullet}`} />
            {h}
          </li>
        ))}
      </ul>

      <a
        href={href}
        className={`mt-auto flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-xs font-medium transition-all ${c.btn}`}
      >
        Open {title}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M6 2L10 6L6 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function CalculatorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="3" width="16" height="16" rx="2" stroke="#f97316" strokeWidth="1.5" />
      <path d="M7 7H10M7 11H10M12 7H15M12 11H15M7 15H10M12 15H15" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M7 3H15V12C15 14.21 13.21 16 11 16C8.79 16 7 14.21 7 12V3Z" stroke="#22d3ee" strokeWidth="1.5" />
      <path d="M7 6H4C4 8.76 5.79 11.08 8.27 11.74" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 6H18C18 8.76 16.21 11.08 13.73 11.74" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 16V19M8 19H14" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TeamsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="8" r="3" stroke="#a78bfa" strokeWidth="1.5" />
      <path d="M5 19C5 16.24 7.69 14 11 14C14.31 14 17 16.24 17 19" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="4" cy="9" r="2" stroke="#a78bfa" strokeWidth="1.2" />
      <path d="M1 18C1 16.34 2.34 15 4 15" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="18" cy="9" r="2" stroke="#a78bfa" strokeWidth="1.2" />
      <path d="M21 18C21 16.34 19.66 15 18 15" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
