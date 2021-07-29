import { ChangelogItem } from './changelog-app';

const changeLog: ChangelogItem[] = [
  {
    date: new Date(2021, 7, 29),
    code: [
      'Data is now generated locally from Heroes Tool Chest (https://github.com/HeroesToolChest/heroes-data) instead of fetched dynamically. Heroes Tool Chest has more data on each hero which allows analysis of hero stats/abilities/talents.',
    ],
  },
  {
    date: new Date(2021, 7, 23),
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

export default changeLog;