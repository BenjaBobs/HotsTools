import fs from 'fs';

export function SerializeHeroData(heroes: any[]) {
  const path = './src/api/heroes/generated';
  fs.mkdirSync(path, { recursive: true });

  for (const hero of heroes) {
    console.log('Writing ' + hero.name);
    fs.writeFileSync(
      `${path}/${hero.nameNormalized}.ts`,
      `import { Hero } from '../heroes';
      
const ${hero.nameNormalized}: Hero = ${JSON.stringify(hero, null, 2).replace(
        /\"([^"|]+)\":/g,
        '$1:'
      )};
      
export default ${hero.nameNormalized};`
    );
  }
}
