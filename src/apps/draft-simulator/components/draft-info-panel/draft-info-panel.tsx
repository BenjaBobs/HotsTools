import { Card, Row, Col } from 'antd';
import React, { useMemo } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
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

  const data = useMemo(() => {
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

  return (
    <Card className={'draft-info-panel'} title="Info">
      <Row justify="space-between">
        <Col flex="1" style={{ height: 300 }}>
          {blueHeroes.length ? (
            <ResponsiveContainer>
              <RadarChart
                className="team-strength-chart"
                outerRadius={100}
                data={data}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                {blueHeroes.length &&
                  blueHeroes?.map((hero) => (
                    <Radar
                      key={hero.shortName}
                      name=""
                      dataKey={hero.shortName}
                      stroke="#aaaaff"
                      fill="#aaaaff"
                      fillOpacity={0.2}
                    />
                  ))}
              </RadarChart>
            </ResponsiveContainer>
          ) : (
            'blue team chart'
          )}
        </Col>
        <Col flex="1">red</Col>
      </Row>
    </Card>
  );
}
