import { Card, Row, Col } from 'antd';
import React, { useMemo } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { Phase, PhaseActions } from '../../draft-simulator-app';
import './draft-info-panel.scss';

export default function DraftInfoPanel(props: {
  phase: Phase;
  history: PhaseActions[];
}) {
  const blueHeroes = props.history
    .filter((x) => x.team === 'blue' && x.type === 'Pick')
    .flatMap((x) => x.heroes);

  const redHeroes = props.history
    .filter((x) => x.team === 'red' && x.type === 'Pick')
    .flatMap((x) => x.heroes);

  const blueData = useMemo(() => {
    if (!blueHeroes.length) return [];

    const accumulator: { [key: string]: any } = {};

    for (const category of Object.keys(blueHeroes[0].extensions.strengths)) {
      accumulator[category] = { category: category, sum: 0 };

      for (const hero of blueHeroes) {
        accumulator[category][hero.shortName] =
          (hero.extensions.strengths as any)[category] +
          accumulator[category].sum;
        accumulator[category].sum = accumulator[category][hero.shortName];
      }
    }

    return Object.values(accumulator);
  }, [blueHeroes]);

  const redData = useMemo(() => {
    if (!redHeroes.length) return [];

    const accumulator: { [key: string]: any } = {};

    for (const category of Object.keys(redHeroes[0].extensions.strengths)) {
      accumulator[category] = { category: category, sum: 0 };

      for (const hero of redHeroes) {
        accumulator[category][hero.shortName] =
          (hero.extensions.strengths as any)[category] +
          accumulator[category].sum;
        accumulator[category].sum = accumulator[category][hero.shortName];
      }
    }

    return Object.values(accumulator);
  }, [redHeroes]);

  return (
    <Card className={'draft-info-panel'} title="Info">
      <Row justify="space-between">
        <Col flex="1" style={{ height: 300 }}>
          <ResponsiveContainer>
            <RadarChart
              className="team-strength-chart"
              outerRadius={100}
              data={blueData}
            >
              {blueHeroes.length
                ? blueHeroes?.map((hero) => (
                    <Radar
                      key={hero.shortName}
                      name=""
                      dataKey={hero.shortName}
                      stroke="#ffffff"
                      fill="#0000ff"
                      fillOpacity={1}
                    />
                  ))
                : null}
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis domain={[0, 50]} style={{ display: 'none' }} />
            </RadarChart>
          </ResponsiveContainer>
        </Col>
        <Col flex="1">
          <ResponsiveContainer>
            <RadarChart
              className="team-strength-chart"
              outerRadius={100}
              data={redData}
            >
              {redHeroes.length
                ? redHeroes?.map((hero) => (
                    <Radar
                      key={hero.shortName}
                      name=""
                      dataKey={hero.shortName}
                      stroke="#ffffff"
                      fill="#ff0000"
                      fillOpacity={1}
                    />
                  ))
                : null}
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis domain={[0, 50]} style={{ display: 'none' }} />
            </RadarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Card>
  );
}
