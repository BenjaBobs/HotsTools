import './team-strength-chart.scss';

import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react';
import {
    PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer
} from 'recharts';
import { useRecoilValue } from 'recoil';

import { s_draftTeamStrengths } from '../../../draft-state';
import { Team } from '../../../Types';

export default function TeamStrengthChart(props: { team: Team }) {
  const strengths = useRecoilValue(s_draftTeamStrengths(props.team));
  const data = Object.entries(strengths).map(([category, value]) => {
    return {
      category,
      value,
    };
  });

  const screenSizes = useBreakpoint();
  console.log(screenSizes);
  const radius = !screenSizes.lg ? 50 : 150;

  return (
    <ResponsiveContainer>
      <RadarChart
        className="team-strength-chart"
        outerRadius={radius}
        data={data}
      >
        <Radar
          key="value"
          name=""
          dataKey="value"
          stroke="#ffffff"
          fill={props.team === Team.Blue ? '#0000ff' : '#ff0000'}
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
