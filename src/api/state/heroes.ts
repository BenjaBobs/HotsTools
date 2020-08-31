import { atom, selector, selectorFamily } from 'recoil';
import { Hero } from './hero-types';

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
      heroNames.map((name) =>
        fetch(
          `https://heroespatchnotes.github.io/heroes-talents/hero/${name}.json`
        ).then(async (response) => (await response.json()) as Hero)
      )
    );

    return heroes;
  },
});

export const s_Hero = selectorFamily({
  key: 's_Hero',
  get: (name: string) => ({ get }) => {
    const heroes = get(s_Heroes);

    return heroes.find((h) => h.shortName === name);
  },
});
