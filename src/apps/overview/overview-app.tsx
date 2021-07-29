import { AppDefinition } from '../AppDefinition';
import HeroDetailsPage from './pages/hero-details-page';
import HeroOverviewPage from './pages/hero-overview-page';

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
