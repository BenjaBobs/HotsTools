import { browserHistory } from '../../api/routing';
import { AppDefinition } from '../AppDefinition';
import HeroPicker from '../components/hero-picker/hero-picker';
import HeroDetailsPage from './pages/hero-details-page';

const OverviewApp: AppDefinition = {
  name: 'Overview',
  path: '',
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
      path: 'heroes/:hero',
      component: <HeroDetailsPage />,
    },
  ],
};

export default OverviewApp;
