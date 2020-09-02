import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { Hero } from '../../../../api/state/hero-types';

export default function HeroStrengthsChart(props: { hero: Hero }) {
  const keys = [props.hero.name];

  const data = [
    ...Object.entries(props.hero.extensions.strengths).entries(),
  ].map(([index, [category, value]]) => {
    let datum: any = {};

    datum.category = category;
    datum[props.hero.name] = value;

    return datum;
  });

  return (
    <ResponsiveRadar
      maxValue={10}
      gridLevels={5}
      gridShape="linear"
      data={data}
      indexBy="category"
      keys={keys}
      colors="red"
      margin={{ left: 200, right: 200, top: 128, bottom: 128 }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      fillOpacity={0.2}
      isInteractive={false}
      legends={[]}
    />
  );
}
