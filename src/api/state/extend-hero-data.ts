import { Hero } from './hero-types';

export type HeroStrengths = {
  'Single-target': number;
  AoE: number;
  'Single-target heal': number;
  'AoE heal': number;
  Mobility: number;
  Range: number;
};

export type HeroDataExtensions = {
  strengths: HeroStrengths;
};

export const EmptyHeroStrengths: HeroStrengths = {
  'Single-target': 0,
  AoE: 0,
  'Single-target heal': 0,
  'AoE heal': 0,
  Mobility: 0,
  Range: 0,
};

export default function ExtendHeroData(hero: Hero) {
  (hero as any).extensions = {};
  const extensionData = data[hero.shortName];
  hero.extensions = extensionData;
}

function FakeStats() {
  return Math.round(Math.random() * 10);
}

const data: { [key: string]: HeroDataExtensions } = {
  abathur: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  alarak: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  alexstrasza: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  ana: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  anduin: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  anubarak: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  artanis: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  arthas: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  auriel: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  azmodan: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  blaze: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  brightwing: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  thebutcher: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  cassia: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  chen: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  chogall: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  chromie: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  deathwing: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  deckard: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  dehaka: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  diablo: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  dva: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  etc: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  falstad: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  fenix: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  gall: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  garrosh: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  gazlowe: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  genji: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  greymane: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  guldan: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  hanzo: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  illidan: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  imperius: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  jaina: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  johanna: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  junkrat: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  kaelthas: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  kelthuzad: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  kerrigan: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  kharazim: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  leoric: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  lili: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  liming: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  lostvikings: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  ltmorales: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  lucio: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  lunara: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  maiev: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  malfurion: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  malganis: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  malthael: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  medivh: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  mei: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  mephisto: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  muradin: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  murky: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  nazeebo: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  nova: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  orphea: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  probius: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  qhira: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  ragnaros: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  raynor: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  rehgar: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  rexxar: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  samuro: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  sgthammer: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  sonya: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  stitches: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  stukov: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  sylvanas: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  tassadar: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  thrall: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  tracer: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  tychus: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  tyrael: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  tyrande: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  uther: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  valeera: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  valla: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  varian: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  whitemane: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  xul: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  yrel: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  zagara: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  zarya: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  zeratul: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
  zuljin: {
    strengths: {
      'Single-target': FakeStats(),
      AoE: FakeStats(),
      'Single-target heal': FakeStats(),
      'AoE heal': FakeStats(),
      Mobility: FakeStats(),
      Range: FakeStats(),
    },
  },
};
