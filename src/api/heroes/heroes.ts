import { allHeroes } from './generated';

const heroesByName = allHeroes.reduce(
  (heroMap: Record<string, Hero>, hero: Hero): Record<string, Hero> => {
    heroMap[hero.nameNormalized] = hero;
    return heroMap;
  },
  {},
);

export const heroes = {
  all: allHeroes,
  byName: (name: string | undefined) => {
    if (!name) return undefined;

    return heroesByName[name];
  },
};

export type Hero = {
  name: string;
  nameNormalized: string;
  franchise?: Franchise;
  gender?: 'Male' | 'Female' | 'Neutral';
  size: number;
  movementSpeed: number;
  health: {
    amount: number;
    scale: number;
    regenRate: number;
    regenScale: number;
  };
  energy?: {
    amount: number;
    regenRate: number;
    name: string;
  };
  autoAttacks: AutoAttack[];
  icon: string;
  abilities: Ability[];
  talents: Talent[][];
  heroUnits?: Hero[];
  analysis: Analysis;
};

export type Franchise =
  | 'Starcraft'
  | 'Warcraft'
  | 'Diablo'
  | 'Overwatch'
  | 'Nexus'
  | 'Classic';

export type AutoAttack = {
  nameId: String;
  range: number;
  period: number;
  damage: number;
  damageScale: number;
};

export type Ability = {
  id: string;
  name: string;
  descriptionShort: string;
  descriptionLong: string;
  cost?: {
    type: string;
    amount: number;
    perSecond?: boolean;
  };
  cooldown: number | null;
  charges?: Charges;
  category: string;
  type: string;
  icon: string;
  isPassive: boolean;
  analysis: Analysis;
};

export type Charges = {
  chargesMax: number;
  chargesInitial: number;
  chargeCost?: number;
  recastCooldown?: number;
};

export type Talent = Ability & {
  order: number;
  tier: string;
  linkedAbilityIds?: string[];
  prerequisiteTalentIds?: string[];
  isQuest?: boolean;
};

export type Analysis = {
  tankiness: number;
  physicalDamage: number;
  magicalDamage: number;
  healing: number;
  mobility: number;
};
