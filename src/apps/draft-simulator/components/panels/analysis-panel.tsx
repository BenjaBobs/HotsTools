import { useRecoilValue } from 'recoil';

import HeroStrengthChart from '../../../components/hero-strength-chart/hero-strength-chart';
import { s_draftTeamPicks } from '../../draft-state';
import { Team } from '../../Types';

export default function AnalysisPanel() {
  const blueHeroes = useRecoilValue(s_draftTeamPicks(Team.Blue));
  const redHeroes = useRecoilValue(s_draftTeamPicks(Team.Red));

  return (
    <div style={{ height: 400 }}>
      <HeroStrengthChart
        blueHeroes={blueHeroes}
        redHeroes={redHeroes}
        heroCount={5}
      />
    </div>
  );
}
