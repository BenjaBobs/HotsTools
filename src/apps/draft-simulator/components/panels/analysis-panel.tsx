import { HeroStrengthChart } from '../../../components/hero-strength-chart/hero-strength-chart';
import { DraftSimulation, Team } from '../../DraftSimulation';
import { useNotifyRerender } from '@src/utils/NotifyingClass';

export function AnalysisPanel() {
  useNotifyRerender(DraftSimulation);

  return (
    <div style={{ height: 400 }}>
      <HeroStrengthChart
        blueHeroes={DraftSimulation.getPicks(Team.Blue)}
        redHeroes={DraftSimulation.getPicks(Team.Red)}
        heroCount={5}
      />
    </div>
  );
}
