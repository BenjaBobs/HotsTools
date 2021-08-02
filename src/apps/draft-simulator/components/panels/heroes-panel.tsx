import { useRecoilValue } from 'recoil';

import HeroPicker from '../../../components/hero-picker/hero-picker';
import { s_draftHistory, usePickHero } from '../../draft-state';

export default function HeroesPanel() {
  const pickHero = usePickHero();
  const actions = useRecoilValue(s_draftHistory);

  return (
    <HeroPicker
      disabledHeroes={actions.flatMap(a => a.heroes.map(h => h.nameNormalized))}
      size={60}
      onHeroPicked={pickHero}
    />
  );
}
