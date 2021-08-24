import { GetPatchVersions } from './fetching/HeroesPatchNotes_HeroesPatchData';
import { GetLatestGameStrings } from './fetching/HeroesToolChest_GameStrings';
import { GetLatestHeroData } from './fetching/HeroesToolChest_HeroData';
import { CreateHeroesFromFetchedData } from './mapping/CreateHeroesFromFetchedData';
import SerializeHeroData from './serializing/SerializeHeroData';

console.log('Fetching patch info...');

const patchVersions = await GetPatchVersions();
const heroData = await GetLatestHeroData(patchVersions);
const gameStrings = await GetLatestGameStrings(patchVersions);
const heroes = CreateHeroesFromFetchedData(heroData!, gameStrings!);
SerializeHeroData(heroes);

export { heroes };
