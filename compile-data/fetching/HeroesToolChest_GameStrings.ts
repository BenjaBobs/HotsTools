import fetch from 'node-fetch';

import { PatchVersion } from './HeroesPatchNotes_HeroesPatchData';

export async function GetLatestGameStrings(patches: PatchVersion[]) {
  console.log('Fetching latest game strings...');
  // try latest patch first
  for (const patch of patches) {
    console.log(`Trying patch ${patch.fullVersion} - ${patch.patchName}`);

    const [
      majorVersion,
      minorVersion,
      patchVersion,
      build,
    ] = patch.fullVersion.split('.');

    // https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/2.53.1.83632/gamestrings/gamestrings_83632_enus.json
    // https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/<full-version>/gamestrings/gamestrings_<build-number>_enus.json
    const gameStringsResponse = await fetch(
      `https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/${patch.fullVersion}/gamestrings/gamestrings_${build}_enus.json`
    );

    if (gameStringsResponse.status === 404) {
      console.log('No game strings found.');
      continue;
    }

    const { gamestrings } = await gameStringsResponse.json();

    console.log('Success! Found game strings for patch!');

    return gamestrings as GameStrings;
  }

  return undefined;
}

export type GameStrings = {
  abiltalent: AbilityTalentStrings;
  unit: UnitStrings;
};

export type AbilityTalentStrings = {
  cooldown: { [key: string]: string };
  energy: { [key: string]: string };
  full: { [key: string]: string };
  life: { [key: string]: string };
  name: { [key: string]: string };
  short: { [key: string]: string };
};

export type UnitStrings = {
  /**
   * @example
   * { "AbathurLocustNormal": "Summon" }
   */
  damagetype: { [key: string]: string };
  /**
   * @example
   * { "Auriel": "Stored Energy" }
   */
  energytype: { [key: string]: string };
  /**
   * @example
   * { "Abathur": "Melee" }
   */
  type: { [key: string]: UnitRangeType };
};

export type UnitRangeType = 'Melee' | 'Ranged';
