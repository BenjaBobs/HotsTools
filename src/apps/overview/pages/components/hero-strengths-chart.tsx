import { Hero } from '../../../../api/state/hero-types';
import { useRecoilValue } from 'recoil';
import { s_deviceSize } from '../../../../api/state/device';
import { GetInterpolationRatioLinear } from '../../../../utils/MathUtils';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from 'recharts';

export default function HeroStrengthsChart(props: { hero: Hero }) {
  const [width] = useRecoilValue(s_deviceSize);

  const data = [
    ...Object.entries(props.hero.extensions.strengths).entries(),
  ].map(([index, [category, value]]) => {
    return {
      category,
      value,
    };
  });

  const widthRatio = GetInterpolationRatioLinear(400, 1920, width);
  const containerSize = 300 + widthRatio * 600;
  const radius = containerSize * 0.2;

  return (
    <RadarChart
      outerRadius={radius}
      data={data}
      width={containerSize}
      height={containerSize}
    >
      <Radar
        name=""
        dot
        dataKey="value"
        stroke="#ff0000"
        fill="#ff0000"
        fillOpacity={0.6}
      />
      <PolarGrid />
      <PolarRadiusAxis angle={90} tickCount={10} domain={[0, 10]} />
      <PolarAngleAxis dataKey="category" />
    </RadarChart>
  );
}
