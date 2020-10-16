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
      accumulator[category] = { category: category, sum: 0 };

      for (const hero of props.heroes) {
        accumulator[category][hero.shortName] =
          (hero.extensions.strengths as any)[category] +
          accumulator[category].sum;
        accumulator[category].sum = accumulator[category][hero.shortName];
      }
    }

    return Object.values(accumulator);
  }, [props.heroes]);

  return (
    <ResponsiveContainer>
      <RadarChart className="team-strength-chart" outerRadius={100} data={data}>
        {data.length ? (
          props.heroes?.map((hero) => (
            <Radar
              key={hero.shortName}
              name=""
              dataKey={hero.shortName}
              stroke="#ffffff"
              fill={props.color}
              fillOpacity={1}
              animationDuration={200}
            />
          ))
        ) : (
          <Radar
            key="empty"
            name=""
            dataKey="empty"
            stroke="#ffffff"
            fill={props.color}
            fillOpacity={1}
          />
        )}
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis domain={[0, 50]} style={{ display: 'none' }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
