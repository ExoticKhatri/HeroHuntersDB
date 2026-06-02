import type { TierName } from './tier';

export type HeroClass = 'Offense' | 'Defense' | 'Support';

export type HeroElement = 'Biochemical' | 'Mechanical' | 'Energy' | 'Astral' | 'Void';

export type SkinRarity = 'Common' | 'Rare' | 'Legendary';

export interface SkinData {
  id: string;
  name: string;
  rarity: SkinRarity;
  powerBonus: number;
  statModifiers: {
    health?: number;
    damage?: number;
  };
}

export interface HeroSkill {
  id: string;
  name: string;
  description: string;
  basePowerPerLevel: number;
}

export interface HeroData {
  id: string;
  name: string;
  class: HeroClass;
  element: HeroElement;
  basePower: number;
  baseHealth: number;
  baseDamage: number;
  baseArmor: number;
  scaling: {
    powerPerLevel: number;
    healthPerLevel: number;
    damagePerLevel: number;
    rankMultipliers: Record<TierName, number>;
  };
  skills: HeroSkill[];
  skins: SkinData[];
  unlockMethod: string;
}
