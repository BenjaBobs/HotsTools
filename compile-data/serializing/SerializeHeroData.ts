import fs from 'fs';

import { Hero } from '../mapping/hero-types';

export function SerializeHeroData(heroes: Hero[]) {
  fs.mkdirSync('./src/api/generated/heroes', { recursive: true });

  fs.copyFileSync(
    './compile-data/mapping/hero-types.ts',
    './src/api/generated/hero-types.ts'
  );

  for (const hero of heroes) {
    console.log('Writing ' + hero.name);
    fs.writeFileSync(
      './src/api/generated/heroes/abathur.ts',
      JSON.stringify(hero)
    );
  }
}
