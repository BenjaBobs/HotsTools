import { Hero } from './hero-types';

export type HeroDataExtensions = {
  strengths: {
    'Wave Clear': number;
    'Crowd Control': number;
    'Self Sustain': number;
    'Team Sustain': number;
    'Rotation Potential': number;
    'Burst Damage': number;
    'Sustained Damage': number;
    Poke: number;
    Range: number;
  };
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
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  alarak: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  alexstrasza: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  ana: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  anduin: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  anubarak: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  artanis: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  arthas: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  auriel: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  azmodan: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  blaze: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  brightwing: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  thebutcher: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  cassia: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  chen: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  chogall: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  chromie: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  deathwing: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  deckard: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  dehaka: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  diablo: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  dva: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  etc: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  falstad: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  fenix: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  gall: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  garrosh: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  gazlowe: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  genji: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  greymane: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  guldan: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  hanzo: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  illidan: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  imperius: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  jaina: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  johanna: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  junkrat: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  kaelthas: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  kelthuzad: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  kerrigan: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  kharazim: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  leoric: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  lili: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  liming: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  lostvikings: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  ltmorales: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  lucio: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  lunara: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  maiev: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  malfurion: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  malganis: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  malthael: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  medivh: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  mei: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  mephisto: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  muradin: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  murky: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  nazeebo: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  nova: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  orphea: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  probius: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  qhira: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  ragnaros: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  raynor: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  rehgar: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  rexxar: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  samuro: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  sgthammer: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  sonya: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  stitches: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  stukov: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  sylvanas: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  tassadar: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  thrall: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  tracer: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  tychus: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  tyrael: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  tyrande: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  uther: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  valeera: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  valla: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  varian: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  whitemane: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  xul: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  yrel: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  zagara: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  zarya: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  zeratul: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
  zuljin: {
    strengths: {
      'Wave Clear': FakeStats(),
      'Crowd Control': FakeStats(),
      'Self Sustain': FakeStats(),
      'Team Sustain': FakeStats(),
      'Rotation Potential': FakeStats(),
      'Burst Damage': FakeStats(),
      'Sustained Damage': FakeStats(),
      Poke: FakeStats(),
      Range: FakeStats(),
    },
  },
};
