import fs from 'fs';

export function SerializeHeroData(heroes: any[]) {
  const path = './src/api/heroes/generated';
  fs.mkdirSync(path, { recursive: true });
  //TODO: generate an index.ts that re-exports all the stuff
  for (const hero of heroes) {
    console.log('Writing ' + hero.name);
    fs.writeFileSync(
      `${path}/${hero.nameNormalized}.ts`,
      `import { Hero } from '../heroes';
      
export const ${hero.nameNormalized}: Hero = ${JSON.stringify(
        hero,
        null,
        2,
      ).replace(/\"([^"|]+)\":/g, '$1:')};
`,
    );
  }

  fs.writeFileSync(
    `${path}/index.ts`,
    `${heroes.map(hero => `import { ${hero.nameNormalized} } from './${hero.nameNormalized}';`).join('\n')}

export const allHeroes = [
${heroes.map(hero => `  ${hero.nameNormalized},`).join('\n')}
];
`,
  );
}
