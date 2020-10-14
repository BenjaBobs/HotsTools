import React from 'react';
import { Hero } from '../../../../api/state/hero-types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

export default function HeroStrengthsChart(props: { hero: Hero }) {
  const data = [
    ...Object.entries(props.hero.extensions.strengths).entries(),
  ].map(([index, [category, value]]) => {
    return {
      category,
      value,
    };
  });

  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <Radar
          name=""
          dot
          dataKey="value"
          stroke="#ff0000"
          fill="#ff0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
