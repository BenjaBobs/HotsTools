import { GameStrings } from '../fetching/HeroesToolChest_GameStrings';
import { HTC_Hero } from '../fetching/HeroesToolChest_HeroData';
import { Hero } from './hero-types';

export function CreateHeroesFromFetchedData(
  heroData: { [key: string]: HTC_Hero },
  gameStrings: GameStrings
): Hero[] {
  const stuns = Object.entries(gameStrings.abiltalent.short)
    .map(([name, desc]) => {
      return { name, desc };
    })
    .filter((x) => x.desc.toLowerCase().includes('stuns'));

  console.log(stuns);

  const heroes = Object.entries(heroData).map(([key, data]) =>
    CreateHeroFromData(key, data, gameStrings)
  );

  // abiltalent keys
  // <nameId>|<buttonId>|<abilityType>|<isPassive>

  return [];
}

function CreateHeroFromData(
  key: string,
  data: HTC_Hero,
  gameStrings: GameStrings
): Hero {
  return {
    name: key,
    unitId: data.unitId,
    hyperlinkId: data.hyperlinkId,
    attributeId: data.attributeId,
  };
}
