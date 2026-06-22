'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { HeroClass, HeroElement } from '@/types/hero';

interface HeroPortraitProps {
  heroId: string;
  heroName: string;
  heroClass: HeroClass;
  element: HeroElement;
  portraitId?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CLASS_COLORS: Record<HeroClass, { bg: string; border: string; text: string; fill: string }> = {
  Offense: { bg: '#3b0a0a', border: '#dc2626', text: '#fca5a5', fill: '#7f1d1d' },
  Defense: { bg: '#0a1628', border: '#2563eb', text: '#93c5fd', fill: '#1e3a5f' },
  Support: { bg: '#052e16', border: '#16a34a', text: '#86efac', fill: '#14532d' },
};

const ELEMENT_SYMBOLS: Record<HeroElement, string> = {
  Mechanical: '⚙',
  Energy: '⚡',
  Biochemical: '☣',
};

const SIZE_MAP = {
  sm: { dim: 48, fontSize: 14 },
  md: { dim: 64, fontSize: 18 },
  lg: { dim: 96, fontSize: 26 },
};

export default function HeroPortrait({
  heroId,
  heroName,
  heroClass,
  element,
  portraitId,
  size = 'md',
}: HeroPortraitProps) {
  const [imgError, setImgError] = useState(false);

  const imageSrc = portraitId
    ? `/heroes/${portraitId}.png`
    : `/heroes/${heroId}.png`;

  const { dim, fontSize } = SIZE_MAP[size];
  const colors = CLASS_COLORS[heroClass];
  const initials = heroName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (!imgError) {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded-lg"
        style={{ width: dim, height: dim }}
      >
        <Image
          src={imageSrc}
          alt={heroName}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
          sizes={`${dim}px`}
        />
      </div>
    );
  }

  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 64 64"
      className="shrink-0 rounded-lg"
      aria-label={heroName}
    >
      <defs>
        <clipPath id={`hex-clip-${heroId}`}>
          <polygon points="32,4 60,18 60,46 32,60 4,46 4,18" />
        </clipPath>
      </defs>
      {/* Background */}
      <rect width="64" height="64" fill={colors.bg} rx="8" />
      {/* Hex shape */}
      <polygon
        points="32,4 60,18 60,46 32,60 4,46 4,18"
        fill={colors.fill}
        stroke={colors.border}
        strokeWidth="1.5"
      />
      {/* Corner accent lines */}
      <line x1="4" y1="4" x2="14" y2="4" stroke={colors.border} strokeWidth="1" opacity="0.6" />
      <line x1="4" y1="4" x2="4" y2="14" stroke={colors.border} strokeWidth="1" opacity="0.6" />
      <line x1="60" y1="60" x2="50" y2="60" stroke={colors.border} strokeWidth="1" opacity="0.6" />
      <line x1="60" y1="60" x2="60" y2="50" stroke={colors.border} strokeWidth="1" opacity="0.6" />
      {/* Initials */}
      <text
        x="32"
        y="34"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={colors.text}
        fontSize={fontSize}
        fontWeight="bold"
        fontFamily="monospace"
      >
        {initials}
      </text>
      {/* Element symbol - tiny bottom right */}
      <text
        x="52"
        y="52"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={colors.border}
        fontSize="10"
        opacity="0.8"
      >
        {ELEMENT_SYMBOLS[element]}
      </text>
    </svg>
  );
}
