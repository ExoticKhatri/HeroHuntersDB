export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
        <div className="flex h-5 w-5 items-center justify-center rounded border border-orange-500/30 bg-orange-500/10">
          <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="#f97316" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2" fill="#f97316" />
          </svg>
        </div>
        <span className="font-mono text-xs text-slate-600">
          Fan-made resource site — not affiliated with Hothead Games.
        </span>
      </div>
    </footer>
  );
}
