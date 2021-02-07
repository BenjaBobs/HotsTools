import { fixControlledValue } from 'antd/lib/input/Input';
import { ChangelogItem } from './changelog-app';

const changeLog: ChangelogItem[] = [
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
