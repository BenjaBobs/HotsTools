import fetch from 'node-fetch';

export async function GetPatchVersions() {
  console.log('Fetching patch infos');

  const patches = (await fetch(
    'https://api.github.com/repos/HeroesToolChest/heroes-data/releases'
  ).then(x => x.json())) as PatchVersion[];

  console.log(`Found ${patches.length} patches...`);

  // latest first
  return patches;
}

export type PatchVersion = {
  /**
   * @example
   * "## Changes\r\n- Added 85551 and 85576"
   */
  body: string;

  /**
   * @example
   * "2021-07-24T19:46:13Z"
   */
  created_at: string;

  /**
   * @example
   * 46719447
   */
  id: number;

  draft: boolean;
  prerelease: boolean;

  /**
   * @example
   * "v2.54.2.85576"
   */
  tag_name: string;

  /**
   * @example
   * "Heroes Data 2.54.2.85576"
   */
  name: string;
};
