import { browserHistory } from '../../api/routing';
import { AppDefinition } from '../AppDefinition';
import HeroPicker from '../components/hero-picker/hero-picker';
import HeroDetailsPage from './pages/hero-details-page';

const OverviewApp: AppDefinition = {
  name: 'Heroes',
  path: '/heroes',
  component: (
    <HeroPicker
      onHeroPicked={hero =>
        browserHistory.push(`/HotsTools/heroes/${hero.nameNormalized}`)
      }
    />
  ),
  nestedApps: [
    {
      name: 'Hero details',
      path: '/:hero',
      component: <HeroDetailsPage />,
    },
  ],
};

export default OverviewApp;
