const allHeroes = import.meta.globEager('../../api/generated/heroes/*.ts');

import { AppDefinition } from '../AppDefinition';
import HeroDetailsPage from './pages/hero-details-page';
import HeroOverviewPage from './pages/hero-overview-page';

console.log('heroes', allHeroes);

const OverviewApp: AppDefinition = {
  name: 'Overview',
  path: '',
  component: <HeroOverviewPage />,
  nestedApps: [
    {
      name: 'Hero details',
      path: 'heroes/:hero',
      component: <HeroDetailsPage />,
    },
  ],
};

export default OverviewApp;
