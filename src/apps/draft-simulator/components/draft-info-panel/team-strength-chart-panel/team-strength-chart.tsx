import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { Hero } from '../../../../../api/state/hero-types';
import { EmptyHeroStrengths } from '../../../../../api/state/extend-hero-data';

const emptyChartData = Object.entries(EmptyHeroStrengths.strengths).map(
  ([key, value]) => {
    return {
      category: key,
      value: value,
    };
  }
);

export default function TeamStrengthChart(props: {
  heroes: Hero[];
  color: string;
}) {
  const data = useMemo(() => {
    if (!props.heroes.length) return emptyChartData;

    const accumulator: { [key: string]: any } = {};

    for (const category of Object.keys(props.heroes[0].extensions.strengths)) {
      accumulator[category] = { category: category, value: 0 };

      for (const hero of props.heroes) {
        accumulator[category][hero.shortName] = accumulator[
          category
        ].value += (hero.extensions.strengths as any)[category];
      }
    }

    return Object.values(accumulator);
  }, [props.heroes]);

  return (
    <ResponsiveContainer>
      <RadarChart className="team-strength-chart" outerRadius={150} data={data}>
        <Radar
          key="value"
          name=""
          dataKey="value"
          stroke="#ffffff"
          fill={props.color}
          fillOpacity={1}
        />
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis
          tickCount={6}
          domain={[0, 50]}
          style={{ display: 'none' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
