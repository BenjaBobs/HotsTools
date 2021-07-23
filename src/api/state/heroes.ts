import { atom, selector, selectorFamily } from 'recoil';

import ExtendHeroData from './extend-hero-data';
import { Hero, Talent, TalentTier } from './hero-types';

export const s_HeroNames = atom({
  key: 's_HeroNames',
  default: [
    'abathur',
    'alarak',
    'alexstrasza',
    'ana',
    'anduin',
    'anubarak',
    'artanis',
    'arthas',
    'auriel',
    'azmodan',
    'blaze',
    'brightwing',
    'thebutcher',
    'cassia',
    'chen',
    'chogall',
    'chromie',
    'deathwing',
    'deckard',
    'dehaka',
    'diablo',
    'dva',
    'etc',
    'falstad',
    'fenix',
    'gall',
    'garrosh',
    'gazlowe',
    'genji',
    'greymane',
    'guldan',
    'hanzo',
    'hogger',
    'illidan',
    'imperius',
    'jaina',
    'johanna',
    'junkrat',
    'kaelthas',
    'kelthuzad',
    'kerrigan',
    'kharazim',
    'leoric',
    'lili',
    'liming',
    'lostvikings',
    'ltmorales',
    'lucio',
    'lunara',
    'maiev',
    'malfurion',
    'malganis',
    'malthael',
    'medivh',
    'mei',
    'mephisto',
    'muradin',
    'murky',
    'nazeebo',
    'nova',
    'orphea',
    'probius',
    'qhira',
    'ragnaros',
    'raynor',
    'rehgar',
    'rexxar',
    'samuro',
    'sgthammer',
    'sonya',
    'stitches',
    'stukov',
    'sylvanas',
    'tassadar',
    'thrall',
    'tracer',
    'tychus',
    'tyrael',
    'tyrande',
    'uther',
    'valeera',
    'valla',
    'varian',
    'whitemane',
    'xul',
    'yrel',
    'zagara',
    'zarya',
    'zeratul',
    'zuljin',
  ],
});

export const s_Heroes = selector({
  key: 's_Heroes',
  get: async ({ get }) => {
    const heroNames = get(s_HeroNames);

    const heroes = await Promise.all(
      heroNames.map(name =>
        fetch(
          `https://heroespatchnotes.github.io/heroes-talents/hero/${name}.json`
        ).then(async response => (await response.json()) as Hero)
      )
    );

    heroes.forEach(hero => {
      ExtendHeroData(hero);
    });

    return heroes;
  },
});

export const s_Hero = selectorFamily({
  key: 's_Hero',
  get: (name: string) => ({ get }) => {
    const heroes = get(s_Heroes);

    return heroes.find(h => h.shortName === name) || null;
  },
});

export const s_HeroAbilities = selectorFamily({
  key: 's_HeroAbilities',
  get: (name: string) => ({ get }) => {
    const hero = get(s_Hero(name));

    if (!hero) return null;

    const abilitySets = Object.entries(hero.abilities).map(
      ([form, abilities]) => {
        return { form, abilities };
      }
    );

    return abilitySets;
  },
});

export const s_HeroTalents = selectorFamily({
  key: 's_HeroTalents',
  get: (name: string) => ({ get }) => {
    const hero = get(s_Hero(name));

    if (!hero) return null;

    const talents = Object.entries(hero.talents).map(([tier, talents]) => {
      return { tier, talents } as { tier: TalentTier; talents: Talent[] };
    });

    return talents;
  },
});
