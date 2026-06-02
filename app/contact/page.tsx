export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <div>
          <p className="font-mono text-[11px] tracking-widest text-orange-500 uppercase">
            Contact
          </p>
          <h1 className="mt-1 font-mono text-2xl font-black text-white">
            Find Me In-Game
          </h1>
        </div>

        <div className="w-full rounded-xl border border-orange-500/30 bg-orange-500/8 p-6">
          <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
            In-Game Name
          </p>
          <p className="mt-3 font-mono text-3xl font-black tracking-wide text-orange-400">
            GALACTIC FIGHTERS
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Search this name in the Social tab to find and message me.
          </p>
        </div>

        <a
          href="/"
          className="font-mono text-xs text-slate-600 transition-colors hover:text-orange-400"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
