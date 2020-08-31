import React from 'react';
import { AppDefinition } from '../AppDefinition';
import HeroOverviewPage from './pages/hero-overview-page';
import HeroDetailsPage from './pages/hero-details-page';

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
