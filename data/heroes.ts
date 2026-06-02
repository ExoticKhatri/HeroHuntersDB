export type HeroRank = 'Green' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Ruby';

export interface SkinData {
  id: string;
  name: string;
  rarity: 'Common' | 'Rare' | 'Legendary';
  powerBonus: number;
  statModifiers: {
    health?: number;
    damage?: number;
  };
}

export interface HeroData {
  id: string;
  name: string;
  class: 'Offense' | 'Defense' | 'Support';
  element: 'Mechanical' | 'Energy' | 'Biochemical';
  basePower: number;
  baseHealth: number;
  baseDamage: number;
  baseArmor: number;
  scaling: {
    powerPerLevel: number;
    healthPerLevel: number;
    damagePerLevel: number;
    rankMultipliers: Record<HeroRank, number>;
  };
  skills: {
    id: string;
    name: string;
    description: string;
    basePowerPerLevel: number;
  }[];
  skins: SkinData[];
  unlockMethod: string;
}

export const HEROES: HeroData[] = [
  {
    id: 'mandrake',
    name: 'Mandrake',
    class: 'Support',
    element: 'Biochemical',
    basePower: 12000,
    baseHealth: 180000,
    baseDamage: 18000,
    baseArmor: 2800,
    scaling: {
      powerPerLevel: 840,
      healthPerLevel: 7200,
      damagePerLevel: 720,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'stealth', name: 'Ghost Protocol', description: 'Turns invisible and heals over time.', basePowerPerLevel: 120 },
      { id: 'heal_aura', name: 'Healing Mist', description: 'Releases a biochemical cloud restoring ally HP.', basePowerPerLevel: 95 },
      { id: 'revive', name: 'Second Wind', description: 'Revives a downed ally with 30% health.', basePowerPerLevel: 150 },
      { id: 'passive', name: 'Adaptive Camo', description: 'Passively reduces damage taken while stationary.', basePowerPerLevel: 80 },
    ],
    skins: [
      { id: 'mandrake_forest', name: 'Forest Specter', rarity: 'Rare', powerBonus: 1200, statModifiers: { health: 15000 } },
      { id: 'mandrake_shadow', name: 'Shadow Ops', rarity: 'Legendary', powerBonus: 3500, statModifiers: { health: 35000, damage: 4000 } },
    ],
    unlockMethod: '3-Star Campaign or 100 Shards',
  },
  {
    id: 'flatline',
    name: 'Flatline',
    class: 'Defense',
    element: 'Energy',
    basePower: 11500,
    baseHealth: 240000,
    baseDamage: 15000,
    baseArmor: 4200,
    scaling: {
      powerPerLevel: 820,
      healthPerLevel: 9600,
      damagePerLevel: 600,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'taunt', name: 'Iron Taunt', description: 'Forces enemies to target Flatline for 5 seconds.', basePowerPerLevel: 100 },
      { id: 'shield', name: 'Energy Barrier', description: 'Absorbs incoming damage with an energy shield.', basePowerPerLevel: 130 },
      { id: 'heal_self', name: 'Auto-Medic', description: 'Regenerates health at a set interval.', basePowerPerLevel: 110 },
      { id: 'passive', name: 'Reinforced Plating', description: 'Passively increases armor by 15%.', basePowerPerLevel: 90 },
    ],
    skins: [
      { id: 'flatline_chrome', name: 'Chrome Shell', rarity: 'Rare', powerBonus: 1100, statModifiers: { health: 20000 } },
    ],
    unlockMethod: 'PVP Crate Drop Only',
  },
  {
    id: 'heimlock',
    name: 'Heimlock',
    class: 'Support',
    element: 'Biochemical',
    basePower: 11800,
    baseHealth: 175000,
    baseDamage: 17500,
    baseArmor: 2600,
    scaling: {
      powerPerLevel: 830,
      healthPerLevel: 7000,
      damagePerLevel: 700,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'medic', name: 'Combat Medic', description: 'Instantly heals the most injured ally.', basePowerPerLevel: 140 },
      { id: 'buff', name: 'Stim Pack', description: 'Boosts team damage output for 8 seconds.', basePowerPerLevel: 115 },
      { id: 'cleanse', name: 'Antidote', description: 'Removes all debuffs from an ally.', basePowerPerLevel: 100 },
      { id: 'passive', name: 'Field Expertise', description: 'Heals are 10% more effective.', basePowerPerLevel: 75 },
    ],
    skins: [
      { id: 'heimlock_plague', name: 'Plague Doctor', rarity: 'Legendary', powerBonus: 3200, statModifiers: { health: 28000, damage: 3500 } },
    ],
    unlockMethod: 'Alliance Store or 100 Shards',
  },
  {
    id: 'hardscope',
    name: 'Hardscope',
    class: 'Offense',
    element: 'Mechanical',
    basePower: 13500,
    baseHealth: 155000,
    baseDamage: 28000,
    baseArmor: 2200,
    scaling: {
      powerPerLevel: 950,
      healthPerLevel: 6200,
      damagePerLevel: 1120,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'snipe', name: 'Kill Shot', description: 'Fires a high-damage precision round at the lowest HP enemy.', basePowerPerLevel: 200 },
      { id: 'scope', name: 'Thermal Scope', description: 'Increases accuracy and critical hit chance.', basePowerPerLevel: 145 },
      { id: 'prone', name: 'Prone Position', description: 'Increases damage output while reducing mobility.', basePowerPerLevel: 130 },
      { id: 'passive', name: 'Marksman Training', description: 'Passively increases critical hit damage by 20%.', basePowerPerLevel: 105 },
    ],
    skins: [
      { id: 'hardscope_arctic', name: 'Arctic Ghost', rarity: 'Rare', powerBonus: 1300, statModifiers: { damage: 5000 } },
      { id: 'hardscope_desert', name: 'Desert Camo', rarity: 'Common', powerBonus: 600, statModifiers: { damage: 2000 } },
    ],
    unlockMethod: 'Chapter 1 Campaign',
  },
  {
    id: 'cast_iron',
    name: 'Cast Iron',
    class: 'Defense',
    element: 'Mechanical',
    basePower: 10800,
    baseHealth: 260000,
    baseDamage: 13500,
    baseArmor: 4800,
    scaling: {
      powerPerLevel: 760,
      healthPerLevel: 10400,
      damagePerLevel: 540,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'fortify', name: 'Fortress Mode', description: 'Enters a defensive stance, reducing all damage by 40%.', basePowerPerLevel: 120 },
      { id: 'stomp', name: 'Ground Slam', description: 'Stuns nearby enemies with a shockwave attack.', basePowerPerLevel: 105 },
      { id: 'rally', name: 'War Cry', description: 'Boosts team armor for 6 seconds.', basePowerPerLevel: 115 },
      { id: 'passive', name: 'Titanium Frame', description: 'Starts each battle with a damage-absorbing shield.', basePowerPerLevel: 95 },
    ],
    skins: [],
    unlockMethod: 'Chapter 2 Campaign',
  },
  {
    id: 'cinder',
    name: 'Cinder',
    class: 'Offense',
    element: 'Energy',
    basePower: 14000,
    baseHealth: 145000,
    baseDamage: 31000,
    baseArmor: 1900,
    scaling: {
      powerPerLevel: 1000,
      healthPerLevel: 5800,
      damagePerLevel: 1240,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'flare', name: 'Solar Flare', description: 'Launches an energy burst dealing massive AoE damage.', basePowerPerLevel: 220 },
      { id: 'ignite', name: 'Ignition', description: 'Sets enemies on fire, applying damage over time.', basePowerPerLevel: 160 },
      { id: 'charge', name: 'Plasma Charge', description: 'Builds up energy for a supercharged attack.', basePowerPerLevel: 175 },
      { id: 'passive', name: 'Heat Sink', description: 'Converts absorbed damage into bonus offense.', basePowerPerLevel: 110 },
    ],
    skins: [
      { id: 'cinder_nova', name: 'Supernova', rarity: 'Legendary', powerBonus: 4000, statModifiers: { damage: 7000, health: 15000 } },
    ],
    unlockMethod: 'Gauntlet Season Reward',
  },
  {
    id: 'ryker',
    name: 'Ryker',
    class: 'Offense',
    element: 'Mechanical',
    basePower: 13000,
    baseHealth: 160000,
    baseDamage: 26000,
    baseArmor: 2400,
    scaling: {
      powerPerLevel: 920,
      healthPerLevel: 6400,
      damagePerLevel: 1040,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'burst', name: 'Full Auto', description: 'Unleashes a full-magazine burst on a single target.', basePowerPerLevel: 185 },
      { id: 'grenade', name: 'Frag Grenade', description: 'Throws a grenade dealing area damage.', basePowerPerLevel: 155 },
      { id: 'reload', name: 'Combat Reload', description: 'Instantly reloads and temporarily boosts fire rate.', basePowerPerLevel: 125 },
      { id: 'passive', name: 'Trigger Discipline', description: 'Increases damage output by 12% after a kill.', basePowerPerLevel: 95 },
    ],
    skins: [
      { id: 'ryker_black_ops', name: 'Black Ops', rarity: 'Common', powerBonus: 800, statModifiers: { damage: 2500 } },
    ],
    unlockMethod: 'Chapter 3 Campaign',
  },
  {
    id: 'moss',
    name: 'Moss',
    class: 'Support',
    element: 'Biochemical',
    basePower: 10500,
    baseHealth: 168000,
    baseDamage: 15500,
    baseArmor: 2500,
    scaling: {
      powerPerLevel: 740,
      healthPerLevel: 6720,
      damagePerLevel: 620,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'spores', name: 'Healing Spores', description: 'Releases spores that heal all allies over 10 seconds.', basePowerPerLevel: 130 },
      { id: 'toxin', name: 'Toxic Cloud', description: 'Poisons all enemies in an area.', basePowerPerLevel: 110 },
      { id: 'armor_buff', name: 'Bio-Armor', description: 'Coats an ally in a biochemical shield boosting armor.', basePowerPerLevel: 105 },
      { id: 'passive', name: 'Symbiosis', description: 'Gains stacks of power with each ally that is healed.', basePowerPerLevel: 80 },
    ],
    skins: [],
    unlockMethod: 'Bounty Store',
  },
  {
    id: 'pris',
    name: 'Pris',
    class: 'Support',
    element: 'Energy',
    basePower: 11200,
    baseHealth: 162000,
    baseDamage: 16800,
    baseArmor: 2700,
    scaling: {
      powerPerLevel: 790,
      healthPerLevel: 6480,
      damagePerLevel: 672,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'pulse', name: 'Energy Pulse', description: 'Sends out a healing wave restoring team HP.', basePowerPerLevel: 135 },
      { id: 'shield_ally', name: 'Force Field', description: 'Wraps an ally in an energy barrier.', basePowerPerLevel: 120 },
      { id: 'rez', name: 'Defibrillator', description: 'Revives a downed hero with 50% health.', basePowerPerLevel: 155 },
      { id: 'passive', name: 'Power Conduit', description: 'Passively boosts energy-element ally damage by 8%.', basePowerPerLevel: 85 },
    ],
    skins: [
      { id: 'pris_neon', name: 'Neon Medic', rarity: 'Rare', powerBonus: 1400, statModifiers: { health: 18000 } },
    ],
    unlockMethod: 'Hero Crate Drop',
  },
  {
    id: 'gammond',
    name: 'Gammond',
    class: 'Support',
    element: 'Mechanical',
    basePower: 10900,
    baseHealth: 172000,
    baseDamage: 16200,
    baseArmor: 2900,
    scaling: {
      powerPerLevel: 770,
      healthPerLevel: 6880,
      damagePerLevel: 648,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'turret', name: 'Deploy Turret', description: 'Places an automated turret covering the team.', basePowerPerLevel: 145 },
      { id: 'repair', name: 'Field Repair', description: 'Repairs mechanical allies restoring health.', basePowerPerLevel: 120 },
      { id: 'airstrike', name: 'Tactical Strike', description: 'Calls in a targeted airstrike on enemies.', basePowerPerLevel: 165 },
      { id: 'passive', name: 'Systems Online', description: 'Passively buffs mechanical ally stats by 6%.', basePowerPerLevel: 88 },
    ],
    skins: [],
    unlockMethod: 'Co-op Raids',
  },
  {
    id: 'mauler',
    name: 'Mauler',
    class: 'Defense',
    element: 'Mechanical',
    basePower: 11000,
    baseHealth: 250000,
    baseDamage: 14000,
    baseArmor: 4500,
    scaling: {
      powerPerLevel: 780,
      healthPerLevel: 10000,
      damagePerLevel: 560,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'charge_attack', name: 'Bulldoze', description: 'Charges forward, knocking back and damaging enemies in the path.', basePowerPerLevel: 140 },
      { id: 'armor_up', name: 'Steel Resolve', description: 'Temporarily increases armor by 50%.', basePowerPerLevel: 115 },
      { id: 'retaliate', name: 'Counterforce', description: 'Reflects a portion of damage back to attackers.', basePowerPerLevel: 110 },
      { id: 'passive', name: 'Heavy Frame', description: 'Immune to knockback effects.', basePowerPerLevel: 90 },
    ],
    skins: [],
    unlockMethod: 'Chapter 5 Campaign',
  },
  {
    id: 'keel',
    name: 'Keel',
    class: 'Defense',
    element: 'Mechanical',
    basePower: 11300,
    baseHealth: 245000,
    baseDamage: 14500,
    baseArmor: 4300,
    scaling: {
      powerPerLevel: 800,
      healthPerLevel: 9800,
      damagePerLevel: 580,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'anchor', name: 'Anchor Strike', description: 'Slams an anchor down, dealing AoE damage and rooting enemies.', basePowerPerLevel: 130 },
      { id: 'rally_defense', name: 'Defensive Rally', description: 'Boosts team armor temporarily.', basePowerPerLevel: 118 },
      { id: 'hook', name: 'Chain Hook', description: 'Pulls an enemy forward and stuns them.', basePowerPerLevel: 122 },
      { id: 'passive', name: 'Seafarer\'s Grit', description: 'Increases damage resistance when health drops below 30%.', basePowerPerLevel: 92 },
    ],
    skins: [],
    unlockMethod: 'PVP Crate Drop',
  },
  {
    id: 'butter',
    name: 'Butter',
    class: 'Offense',
    element: 'Mechanical',
    basePower: 14500,
    baseHealth: 148000,
    baseDamage: 33000,
    baseArmor: 1800,
    scaling: {
      powerPerLevel: 1020,
      healthPerLevel: 5920,
      damagePerLevel: 1320,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'minigun', name: 'Minigun Spin-Up', description: 'Spins up the minigun dealing massive sustained damage.', basePowerPerLevel: 240 },
      { id: 'rocket', name: 'Rocket Salvo', description: 'Fires a burst of rockets at grouped enemies.', basePowerPerLevel: 200 },
      { id: 'reload_fast', name: 'Ammo Cache', description: 'Replenishes ammo and boosts attack speed.', basePowerPerLevel: 140 },
      { id: 'passive', name: 'Lock and Load', description: 'Increases damage by 3% for each second of continuous fire.', basePowerPerLevel: 110 },
    ],
    skins: [
      { id: 'butter_ironclad', name: 'Ironclad', rarity: 'Legendary', powerBonus: 4500, statModifiers: { damage: 8000, health: 18000 } },
    ],
    unlockMethod: 'Gauntlet Season Reward or Hero Crate',
  },
  {
    id: 'savage',
    name: 'Savage',
    class: 'Offense',
    element: 'Biochemical',
    basePower: 13200,
    baseHealth: 158000,
    baseDamage: 27500,
    baseArmor: 2100,
    scaling: {
      powerPerLevel: 930,
      healthPerLevel: 6320,
      damagePerLevel: 1100,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'venom', name: 'Venom Spray', description: 'Sprays toxic venom causing damage over time.', basePowerPerLevel: 175 },
      { id: 'frenzy', name: 'Biochemical Frenzy', description: 'Enters a frenzy state boosting attack speed and damage.', basePowerPerLevel: 190 },
      { id: 'leech', name: 'Life Drain', description: 'Drains health from an enemy to restore own HP.', basePowerPerLevel: 150 },
      { id: 'passive', name: 'Toxic Blood', description: 'Poisons attackers when hit, dealing DOT to them.', basePowerPerLevel: 100 },
    ],
    skins: [],
    unlockMethod: 'Bounty Hunt Reward',
  },
  {
    id: 'clyde',
    name: 'Clyde',
    class: 'Defense',
    element: 'Mechanical',
    basePower: 10600,
    baseHealth: 255000,
    baseDamage: 13000,
    baseArmor: 4600,
    scaling: {
      powerPerLevel: 750,
      healthPerLevel: 10200,
      damagePerLevel: 520,
      rankMultipliers: { Green: 1.0, Bronze: 1.2, Silver: 1.5, Gold: 1.8, Platinum: 2.2, Ruby: 2.8 },
    },
    skills: [
      { id: 'barricade', name: 'Barricade', description: 'Erects a temporary barrier absorbing team damage.', basePowerPerLevel: 125 },
      { id: 'suppression', name: 'Suppression Fire', description: 'Pins enemies down, reducing their accuracy.', basePowerPerLevel: 108 },
      { id: 'cover', name: 'Take Cover', description: 'Dramatically reduces incoming damage for 4 seconds.', basePowerPerLevel: 118 },
      { id: 'passive', name: 'Unbreakable', description: 'Cannot be one-shot killed.', basePowerPerLevel: 85 },
    ],
    skins: [],
    unlockMethod: 'Chapter 4 Campaign',
  },
];
