export type TierName = 'Green' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Ruby';

export interface Tier {
  name: TierName;
  // null = base tier with no sub-level number (e.g. "Green", "Bronze", "Silver")
  // number = numbered sub-level within the tier (e.g. Bronze 1, Silver 2, Platinum 6)
  level: number | null;
}

export const TIER_ORDER: TierName[] = ['Green', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Ruby'];

// null = no sub-levels (Green) or unknown max (Ruby)
export const TIER_MAX_LEVELS: Record<TierName, number | null> = {
  Green:    null,
  Bronze:   1,
  Silver:   3,
  Gold:     4,
  Platinum: 6,
  Ruby:     null,
};
