import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { Hero } from '../../../../api/state/hero-types';

function createDatum(indexName: string, category: string, value: number) {
  let datum: any = {};

  datum.category = category;
  datum[indexName] = value;

  return datum;
}

export default function HeroStrengthsChart(props: { hero: Hero }) {
  const keys = [props.hero.name];

  const data = [
    createDatum(props.hero.name, 'Wave Clear', Math.round(Math.random() * 10)),
    createDatum(props.hero.name, 'Pvp', Math.round(Math.random() * 10)),
    createDatum(
      props.hero.name,
      'Rotation Speed',
      Math.round(Math.random() * 10)
    ),
    createDatum(props.hero.name, 'Other', Math.round(Math.random() * 10)),
    createDatum(props.hero.name, 'Cool Skins', Math.round(Math.random() * 10)),
  ];

  return (
    <ResponsiveRadar
      maxValue={10}
      gridLevels={5}
      gridShape="linear"
      data={data}
      indexBy="category"
      keys={keys}
      colors="red"
      margin={{ left: 128, right: 128, top: 128, bottom: 128 }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      fillOpacity={0.2}
      isInteractive={false}
      legends={[]}
    />
  );
}
