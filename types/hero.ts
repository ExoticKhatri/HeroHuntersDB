import type { TierName } from './tier';

export type HeroClass = 'Offense' | 'Defense' | 'Support';

export type HeroElement = 'Biochemical' | 'Mechanical' | 'Energy';

export interface HeroData {
  id: string;
  name: string;
  portraitId: string;
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
}
