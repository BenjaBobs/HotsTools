import { AddressBar } from '@src/utils/AddressBar';
import { AppDefinition } from '../AppDefinition';
import { HeroPicker } from '../components/hero-picker/hero-picker';
import { HeroDetailsPage } from './pages/hero-details-page';

export const OverviewApp: AppDefinition = {
  name: 'Heroes',
  path: 'heroes',
  component: (
    <HeroPicker
      onHeroPicked={hero =>
        AddressBar.setPath(`/HotsTools/heroes/${hero.nameNormalized}`)
      }
    />
  ),
  nestedApps: [
    {
      name: 'Hero details',
      path: ':hero',
      component: <HeroDetailsPage />,
    },
  ],
};
