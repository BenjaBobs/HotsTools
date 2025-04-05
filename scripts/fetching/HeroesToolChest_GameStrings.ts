import { PatchVersion } from './HeroesPatchNotes_HeroesPatchData';

export async function GetLatestGameStrings(patches: PatchVersion[]) {
  console.log('Fetching latest game strings...');
  // try latest patch first
  for (const patch of patches) {
    console.log(`Trying patch ${patch.name}`);

    const fullVersion = patch.tag_name.substring(1);
    const [majorVersion, minorVersion, patchVersion, build] =
      fullVersion.split('.');

    // https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/2.53.1.83632/gamestrings/gamestrings_83632_enus.json
    // https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/<full-version>/gamestrings/gamestrings_<build-number>_enus.json
    const gameStringsResponse = await fetch(
      `https://raw.githubusercontent.com/HeroesToolChest/heroes-data/master/heroesdata/${fullVersion}/gamestrings/gamestrings_${build}_enus.json`,
    );

    if (gameStringsResponse.status === 404) {
      console.log('No game strings found.');
      continue;
    }

    const { gamestrings }: { gamestrings: HTC_GameStrings } =
      await gameStringsResponse.json();

    console.log('Success! Found game strings for patch!');

    PatchGameStringKeys(gamestrings as any);

    return gamestrings;
  }

  return undefined;
}

function PatchGameStringKeys(gamestrings: HTC_GameStrings) {
  for (const [category, entries] of Object.entries(gamestrings.abiltalent)) {
    (gamestrings.abiltalent as any)[category] = Object.entries(entries).reduce(
      (obj: { [key: string]: string }, [key, value]) => {
        const patchedKey = key.substring(0, key.lastIndexOf('|'));
        const patchedValue = value
          // remove html tags
          .replace(/<[^>]*>/g, '')
          // fix damage level scaling text
          .replace(/~~0.0([0-9])([0-9])~~/g, ' (+$1.$2% / level)')
          .replace(/~~0.0([0-9])~~/g, ' (+$1% / level)')
          // fix missing space in new sentences
          .replace(/(\.)([a-zA-Z])/g, '$1 $2');
        obj[patchedKey] = patchedValue;

        return obj;
      },
      {},
    );
  }
}

export type HTC_GameStrings = {
  abiltalent: HTC_AbilityTalentStrings;
  unit: HTC_UnitStrings;
};

export type HTC_AbilityTalentStrings = {
  cooldown: { [key: string]: string };
  energy: { [key: string]: string };
  full: { [key: string]: string };
  life: { [key: string]: string };
  name: { [key: string]: string };
  short: { [key: string]: string };
};

export type HTC_UnitStrings = {
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
  type: { [key: string]: HTC_UnitRangeType };
  /**
   * @example
   * { "Anubarak": "Anub'arak"}
   */
  name: { [key: string]: string };
};

export type HTC_UnitRangeType = 'Melee' | 'Ranged';
