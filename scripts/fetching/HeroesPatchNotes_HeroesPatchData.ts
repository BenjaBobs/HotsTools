import fetch from 'node-fetch';

export async function GetPatchVersions() {
  console.log('Fetching patch infos');

  const patches = (await fetch(
    'https://raw.githubusercontent.com/heroespatchnotes/heroes-patch-data/master/patchversions.json'
  ).then((x) => x.json())) as PatchVersion[];

  console.log(`Found ${patches.length} patches...`);

  // latest first
  return patches.reverse();
}

export type PatchVersion = {
  internalId: string;
  patchName: string;
  officialLink: string;
  patchType: string;
  gameVersion: string;
  fullVersion: string;
  ptrOfficialLink: string;
  ptrDate: string;
  ptrBuild: string;
  liveDate: string;
  liveBuild: string;
};
