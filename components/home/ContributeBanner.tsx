export default function ContributeBanner() {
  return (
    <section className="mx-4 mb-24 overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent sm:mx-6">
      <div className="relative flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="pointer-events-none absolute right-0 top-0 opacity-20">
          <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
            <path d="M200 0H120L80 40H40L0 80" stroke="#f97316" strokeWidth="0.5" />
            <path d="M200 30H140L100 70H60L20 110" stroke="#f97316" strokeWidth="0.5" />
            <circle cx="80" cy="40" r="3" fill="#f97316" />
            <circle cx="140" cy="70" r="3" fill="#f97316" />
          </svg>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/40 bg-orange-500/10 sm:h-14 sm:w-14">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="9" cy="7" r="4" stroke="#f97316" strokeWidth="1.5" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="font-mono text-base font-bold text-white sm:text-lg">
            Help Build the Database
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Missing data or found an error? Find the site owner in-game and send a message.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:items-end">
          <a
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-orange-500/50 bg-orange-500/15 px-5 py-2.5 font-mono text-sm font-medium text-orange-300 transition-all hover:border-orange-500/80 hover:bg-orange-500/25 sm:w-auto"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M1.5 13C1.5 10.51 4.02 8.5 7 8.5C9.98 8.5 12.5 10.51 12.5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Find Me In-Game
          </a>
          <span className="text-center font-mono text-[10px] text-slate-600 sm:text-right">
            In-game: GALACTIC FIGHTERS
          </span>
        </div>
      </div>
    </section>
  );
}
