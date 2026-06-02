import HeroSearch from "@/components/HeroSearch";
import Navbar from "@/components/layout/Navbar";
import { HEROES } from "@/data/heroes";

const OFFENSE_COUNT = HEROES.filter((h) => h.class === "Offense").length;
const DEFENSE_COUNT = HEROES.filter((h) => h.class === "Defense").length;
const SUPPORT_COUNT = HEROES.filter((h) => h.class === "Support").length;

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">

      <Navbar />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16">
        <div className="flex max-w-4xl flex-col items-center gap-8 text-center">
          <div className="animate-fade-up flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
            <span className="font-mono text-[11px] font-medium tracking-widest text-orange-400 uppercase">
              Database Online — {HEROES.length} Heroes Indexed
            </span>
          </div>

          <div className="animate-fade-up-delay-1">
            <h1 className="font-mono text-5xl font-black leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
              HERO
              <br />
              <span className="text-orange-500">HUNTERS</span>
            </h1>
            <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-slate-500 uppercase sm:text-sm sm:tracking-[0.4em]">
              The Definitive Resource Database
            </p>
          </div>

          <p className="animate-fade-up-delay-2 max-w-xl px-2 text-sm leading-relaxed text-slate-400 sm:px-0 sm:text-base">
            Calculate exact upgrade costs, compare hero stats at any rank, and
            discover the best meta team compositions — all without leaving your
            browser.
          </p>

          <div className="animate-fade-up-delay-3 w-full">
            <HeroSearch />
          </div>

          <div className="animate-fade-up-delay-3 flex flex-wrap justify-center gap-x-6 gap-y-4 pt-2">
            <QuickStat label="Total Heroes" value={HEROES.length} />
            <div className="hidden w-px bg-white/10 sm:block" />
            <QuickStat label="Offense" value={OFFENSE_COUNT} color="text-red-400" />
            <div className="hidden w-px bg-white/10 sm:block" />
            <QuickStat label="Defense" value={DEFENSE_COUNT} color="text-blue-400" />
            <div className="hidden w-px bg-white/10 sm:block" />
            <QuickStat label="Support" value={SUPPORT_COUNT} color="text-green-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-600">
        <span className="font-mono text-[10px] tracking-widest uppercase">Explore Tools</span>
        <svg className="animate-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3V13M3 8L8 13L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

function QuickStat({ label, value, color = "text-white" }: { label: string; value: number; color?: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className={`stat-number font-mono text-2xl font-black ${color}`}>{value}</span>
      <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">{label}</span>
    </div>
  );
}
