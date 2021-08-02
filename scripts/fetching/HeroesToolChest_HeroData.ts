import fetch from 'node-fetch';

import { PatchVersion } from './HeroesPatchNotes_HeroesPatchData';

export async function GetLatestHeroData(patches: PatchVersion[]) {
  console.log('Fetching latest hero data...');

  for (const patch of patches) {
    console.log(`Trying patch ${patch.fullVersion} - ${patch.patchName}`);

    const [majorVersion, minorVersion, patchVersion, build] =
      patch.fullVersion.split('.');

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
  franchise: HTC_Franchise;
  gender: HTC_Gender;
  innerRadius: number;
  radius: number;
  releaseDate: string;
  sight: number;
  speed: number;
  rarity: HTC_Rarity;
  scalingLinkId: string;
  descriptors: HTC_Descriptor[];
  units: string[];
  defaultMountId?: string;
  mountCategories?: string[];
  portraits: HTC_Portraits;
  life: HTC_Life;
  energy: HTC_Energy;
  ratings: HTC_Ratings;
  weapons: HTC_Weapon[];
  skins: string[];
  variationSkins: string[];
  voiceLines: string[];
  abilities: HTC_Abilities;
  subAbilities: { [key: string]: Partial<HTC_Abilities> }[];
  talents: HTC_Talents;
  heroUnits: Record<string, HTC_Hero>[];
};

export type HTC_Talent = HTC_Ability & {
  sort: number;
  abilityTalentLinkIds?: string[];
  prerequisiteTalentIds?: string[];
  isQuest?: boolean;
};

export type HTC_TalentLevels = '1' | '4' | '7' | '10' | '13' | '16' | '20';
export type HTC_TalentTier = `level${HTC_TalentLevels}`;

export type HTC_Talents = {
  [key in HTC_TalentTier]: HTC_Talent[];
};

export type HTC_AbilityType =
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

export type HTC_Ability = {
  nameId: string;
  buttonId: string;
  icon: string;
  abilityType: HTC_AbilityType;
  charges?: HTC_Charge;
  toggleCooldown?: number;
  isPassive?: boolean;
  isActive?: boolean;
};

export type HTC_Abilities = {
  basic: HTC_Ability[];
  heroic: HTC_Ability[];
  trait: HTC_Ability[];
  mount: HTC_Ability[];
  hearth: HTC_Ability[];
  spray: HTC_Ability[];
  voice: HTC_Ability[];
  activable?: HTC_Ability[];
};

export type HTC_Charge = {
  countMax: number;
  countUse: number;
  countStart?: number;
  recastCooldown?: number;
  hideCount?: boolean;
};

export type HTC_Portraits = {
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

export type HTC_Life = {
  amount: number;
  scale: number;
  regenRate: number;
  regenScale: number;
};

export type HTC_Energy = {
  amount: number;
  regenRate: number;
};

export type HTC_Ratings = {
  complexity: number;
  damage: number;
  survivability: number;
  utility: number;
};

export type HTC_Weapon = {
  nameId: string;
  range: number;
  period: number;
  damage: number;
  damageScale: number;
};

export type HTC_Descriptor =
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
export type HTC_Rarity = 'Legendary' | 'Epic';
export type HTC_Gender = 'Neutral' | 'Male' | 'Female';
export type HTC_Franchise =
  | 'Starcraft'
  | 'Warcraft'
  | 'Diablo'
  | 'Overwatch'
  | 'Nexus'
  | 'Classic';
