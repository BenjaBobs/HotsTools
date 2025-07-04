import { ChangelogItem } from './changelog-app';

export const changeLog: ChangelogItem[] = [
  {
    date: new Date(2025, 4, 21),
    code: [
      "Removed 'recoil' in favor of simpler state management ('recoil' was abandoned).",
      "Removed 'history' package, don't need it.",
      "Removed 'yarn', I prefer bun now.",
      'Updated various packages.',
      'Added <Flex> component with screensize sensitive props for easier layouting.',
    ],
  },
  {
    date: new Date(2021, 7, 24),
    added: [
      'Movement speed analysis',
      'A very primitive talent picker in the hero details page (with shareable link in address bar)',
    ],
    fixed: ['Issue where pattern matching wild cards could fail'],
  },
  {
    date: new Date(2021, 7, 23),
    added: ['Data from newest hots patch', 'New ability/talent analyses'],
    code: [
      'Created a pattern matching tool to make future analyses easier/better',
    ],
  },
  {
    date: new Date(2021, 7, 6),
    fixed: ['About page', 'Underglow effect in menu not sticking'],
  },
  {
    date: new Date(2021, 7, 5),
    added: [
      'New analysis properties (mobility, healing, magic damage)',
      'More stuff to the about page',
    ],
    code: [
      'Started work on a better text analyser for analysing tooltips of abilities/talents',
      'Made about page use the readme.md',
    ],
  },
  {
    date: new Date(2021, 7, 2),
    added: [
      'Hero analysis based on stats/abilities/talents (currently only tankiness and auto attack damage)',
      'Hero strength charts',
      'Search bar for heroes',
    ],
    code: [
      'Upgraded dependencies',
      'Refactored hero selection into re-usable component',
    ],
  },
  {
    date: new Date(2021, 6, 29),
    removed: [
      'Hero strength charts - they will be re-added once hero analysis is implemented',
    ],
    code: [
      'Data is now generated locally from Heroes Tool Chest (https://github.com/HeroesToolChest/heroes-data) instead of fetched dynamically. Heroes Tool Chest has more data on each hero which allows analysis of hero stats/abilities/talents.',
    ],
  },
  {
    date: new Date(2021, 6, 23),
    code: ['Moved from Create-React-App to Vite'],
  },
  {
    date: new Date(2021, 2, 7),
    added: ['Hogger'],
    code: [
      'Rewrote routing system to be simpler',
      'Upgraded all dependencies',
      'Rewrote <Block> component for easier layout',
      'Added useIntuitiveScreenSize for coherent distinction between phone/tablet/monitor',
    ],
  },
  {
    date: new Date(2020, 10, 19),
    added: ['Changelog', 'About page'],
    fixed: [
      "Styling of draft simulator for mobile devices. It's still not perfect, but at least you can actually see what's happening. Recommended size is still desktop.",
    ],
  },
  {
    date: new Date(2020, 10, 18),
    added: [
      'Work in progress hero pick suggestions based on current team stats and stats of heroes. Note: these are still all just fake values to test the system.',
    ],
  },
];
