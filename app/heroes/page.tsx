import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroGalleryClient from '@/components/heroes/HeroGalleryClient';
import { HEROES } from '@/data/heroes';

export const metadata: Metadata = {
  title: 'Hero Gallery — Hero Hunters DB',
  description:
    'Browse the complete Hero Hunters hero catalog. Filter by class and element, compare base stats, and find your next roster addition.',
};

export default function HeroesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        {/* Page header */}
        <div className="relative overflow-hidden border-b border-white/6">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, #f97316 0%, transparent 70%)',
            }}
          />
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
            <p className="font-mono text-[11px] tracking-widest text-slate-500 uppercase">
              Hero Hunters DB
            </p>
            <h1 className="mt-2 font-mono text-3xl font-bold text-white sm:text-4xl">
              Hero Gallery
            </h1>
            <p className="mt-3 max-w-xl text-sm text-slate-500 leading-relaxed">
              Full catalog of {HEROES.length} heroes. Filter by class, element, or search by name.
              Images are extracted directly from game files.
            </p>
            {/* Stat pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: 'Offense', count: HEROES.filter((h) => h.class === 'Offense').length, color: 'text-red-400' },
                { label: 'Defense', count: HEROES.filter((h) => h.class === 'Defense').length, color: 'text-blue-400' },
                { label: 'Support', count: HEROES.filter((h) => h.class === 'Support').length, color: 'text-green-400' },
              ].map(({ label, count, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded border border-white/8 bg-white/[0.03] px-3 py-1.5"
                >
                  <span className={`font-mono text-sm font-bold ${color}`}>{count}</span>
                  <span className="font-mono text-[11px] text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery body */}
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
          <HeroGalleryClient heroes={HEROES} />
        </div>
      </main>
      <Footer />
    </>
  );
}
