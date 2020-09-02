import { HeroDataExtensions } from './extend-hero-data';

type HeroRaw = {
  id: number;
  shortName: string;
  hyperlinkId: string;
  attributeId: string;
  cHeroId: string;
  cUnitId: string;
  name: string;
  icon: string;
  role: string;
  expandedRole: string;
  type: string;
  releaseDate: string;
  releasePatch: string;
  tags: string[];
  abilities: { [key: string]: Ability[] };
  talents: { [key in TalentTier]: Talent[] };
};

export type Hero = HeroRaw & {
  extensions: HeroDataExtensions;
};

export type Ability = {
  uid: string;
  name: string;
  description: string;
  hotkey: string;
  abilityId: string;
  cooldown: number;
  manaCost: number;
  icon: string;
  type: string;
};

export type TalentTier = '1' | '4' | '7' | '10' | '13' | '16' | '20';

export type Talent = {
  tooltipId: string;
  talentTreeId: string;
  name: string;
  description: string;
  icon: string;
  type: string;
  sort: number;
  abilityId: string;
  abilityLinks: string[];
};
