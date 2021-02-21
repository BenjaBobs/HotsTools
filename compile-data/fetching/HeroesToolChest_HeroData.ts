import fetch from 'node-fetch';

import { PatchVersion } from './HeroesPatchNotes_HeroesPatchData';

export async function GetLatestHeroData(patches: PatchVersion[]) {
  console.log('Fetching latest hero data...');

  for (const patch of patches) {
    console.log(`Trying patch ${patch.fullVersion} - ${patch.patchName}`);

    const [
      majorVersion,
      minorVersion,
      patchVersion,
      build,
    ] = patch.fullVersion.split('.');

    // https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/2.53.1.83632/data/herodata_83632_localized.json
    // https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/<full-version>/data/herodata_<build-number>_localized.json
    const gameDataResponse = await fetch(
      `https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/${patch.fullVersion}/data/herodata_${build}_localized.json`
    );

    if (gameDataResponse.status === 404) {
      console.log('No hero data found.');
      continue;
    }

    const gameData = await gameDataResponse.json();

    console.log(
      `Success! Found hero data for patch! ${
        Object.keys(gameData).length
      } heroes found!`
    );

    return gameData as { [key: string]: HTC_Hero };
  }

  return undefined;
}

export type HTC_Hero = {
  unitId: string;
  hyperlinkId: string;
  attributeId: string;
  franchise: Franchise;
  gender: Gender;
  innerRadius: number;
  radius: number;
  releaseDate: string;
  sight: number;
  speed: number;
  rarity: Rarity;
  scalingLinkId: string;
  descriptors: Descriptor[];
  units: string[];
  defaultMountId?: string;
  mountCategories?: string[];
  portraits: Portraits;
  life: Life;
  energy: Energy;
  ratings: Ratings;
  weapons: Weapon[];
  skins: string[];
  variationSkins: string[];
  voiceLines: string[];
  abilities: Abilities;
  subAbilities: { [key: string]: Partial<Abilities> }[];
  talents: Talents;
  heroUnits: HTC_Hero[];
};

export type Talent = Ability & {
  sort: number;
  abilityTalentLinkIds?: string[];
  prerequisiteTalentIds?: string[];
  isQuest?: boolean;
};

export type TalentLevels = '1' | '4' | '7' | '10' | '13' | '16' | '20';
export type TalentTier = `level${TalentLevels}`;

export type Talents = {
  [key in TalentTier]: Talent[];
};

export type AbilityType =
  | 'Q'
  | 'W'
  | 'E'
  | 'B'
  | 'Heroic'
  | 'Trait'
  | 'Z'
  | 'Active'
  | 'Passive'
  | 'Spray'
  | 'Voice';

export type Ability = {
  nameId: string;
  buttonId: string;
  icon: string;
  abilityType: AbilityType;
  charges?: Charge;
  toggleCooldown?: number;
  isPassive?: boolean;
  isActive?: boolean;
};

export type Abilities = {
  basic: Ability[];
  heroic: Ability[];
  trait: Ability[];
  mount: Ability[];
  hearth: Ability[];
  spray: Ability[];
  voice: Ability[];
  activable?: Ability[];
};

export type Charge = {
  countMax: number;
  countUse: number;
  countStart?: number;
  recastCooldown?: number;
  hideCount?: boolean;
};

export type Portraits = {
  heroSelect: string;
  leaderboard: string;
  loading: string;
  partyPanel: string;
  target: string;
  draftScreen: string;
  partyFrames: string[];
  minimap: string;
  targetInfo: string;
};

export type Life = {
  amount: number;
  scale: number;
  regenRate: number;
  regenScale: number;
};

export type Energy = {
  amount: number;
  regenRate: number;
};

export type Ratings = {
  complexity: number;
  damage: number;
  survivability: number;
  utility: number;
};

export type Weapon = {
  nameId: string;
  range: number;
  period: number;
  damage: number;
  damageScale: number;
};

export type Descriptor =
  | 'Ganker'
  | 'Helper'
  | 'InstantTraveler'
  | 'RoleSpecialist'
  | 'TowerPusher'
  | 'WaveClearer'
  | 'EnergyImportant'
  | 'Escaper'
  | 'RoleCaster'
  | 'SoloLaner'
  | 'AllyHealer'
  | 'EnergyImportant'
  | 'Helper'
  | 'RoleSupport';
export type Rarity = 'Legendary' | 'Epic';
export type Gender = 'Neutral' | 'Male' | 'Female';
export type Franchise =
  | 'Starcraft'
  | 'Warcraft'
  | 'Diablo'
  | 'Overwatch'
  | 'Nexus'
  | 'Classic';
