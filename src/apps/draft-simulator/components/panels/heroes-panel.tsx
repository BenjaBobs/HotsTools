import { HeroPicker } from '../../../components/hero-picker/hero-picker';
import { useNotifyRerender } from '@src/utils/NotifyingClass';
import { DraftSimulation } from '../../DraftSimulation';

export function HeroesPanel() {
  useNotifyRerender(DraftSimulation);

  return (
    <HeroPicker
      disabledHeroes={DraftSimulation.getUnavailableHeroes().map(
        a => a.nameNormalized,
      )}
      size={60}
      onHeroPicked={DraftSimulation.pickHero}
    />
  );
}
