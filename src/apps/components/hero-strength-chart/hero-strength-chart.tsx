import { Card, Col, Result, Row, Typography } from 'antd';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Hero } from '../../../api/heroes/heroes';

const _blueHue = '211';
const _redHue = '350';

export function HeroStrengthChart(props: {
  blueHeroes?: readonly Hero[];
  redHeroes?: readonly Hero[];
  heroCount?: number;
}) {
  if (!props.blueHeroes?.length && !props.redHeroes?.length)
    return <Result title="No data" />;

  const categories = Object.keys(
    props.blueHeroes?.[0]?.analysis ?? props.redHeroes?.[0].analysis!,
  );

  const data = categories.map(category => {
    return {
      category: category,
      ...[...(props.blueHeroes || []), ...(props.redHeroes || [])].reduce(
        (obj: any, hero) => {
          obj[hero.name] = (hero.analysis as any)[category];

          return obj;
        },
        {},
      ),
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
        barGap={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis
          domain={[0, (props.heroCount || props.blueHeroes?.length || 1) * 100]}
        />
        <Tooltip
          cursor={{ fill: 'transparent' }}
          content={<CustomToolTipRender />}
        />
        <Legend />
        {props.blueHeroes?.map((hero, idx) => (
          <Bar
            key={hero.name}
            dataKey={hero.name}
            stackId={'Blue'}
            fill={`HSL(${_blueHue}, 100%, calc(75% - ${idx * 10}%))`}
            stroke={`HSL(${_blueHue}, 100%, 80%)`}
          />
        ))}
        {props.redHeroes?.map((hero, idx) => (
          <Bar
            key={hero.name}
            dataKey={hero.name}
            stackId={'Red'}
            fill={`HSL(${_redHue}, 100%, calc(75% - ${idx * 10}%))`}
            stroke={`HSL(${_redHue}, 100%, 80%)`}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

function CustomToolTipRender(input: any) {
  const typedInput = input as {
    active: boolean;
    payload: {
      color: string;
      fill: string;
      name: string;
      payload: {
        category: string;
      } & { [key: string]: number };
    }[];
  };

  if (!typedInput?.active || !typedInput.payload.length) return null;

  const category = typedInput.payload[0].payload.category;
  const values = typedInput.payload.map(x => {
    return {
      hero: x.name,
      value: x.payload[x.name],
      color: x.color,
      team: x.color.substring(4, 7),
    };
  });

  const blues = values.filter(x => x.team === _blueHue);
  const reds = values.filter(x => x.team === _redHue);

  return (
    <Card
      title={<Typography.Title level={3}>{category}</Typography.Title>}
      className="glow"
    >
      <Row justify="space-between" style={{ minWidth: 300 }}>
        <Col span={12}>
          {blues.map(v => (
            <Row key={v.hero}>
              <Typography.Text style={{ color: v.color }}>
                {v.hero} - {v.value.toFixed()}
              </Typography.Text>
            </Row>
          ))}
        </Col>
        <Col span={12}>
          {reds.map(v => (
            <Row key={v.hero}>
              <Typography.Text style={{ color: v.color }}>
                {v.hero} - {v.value.toFixed()}
              </Typography.Text>
            </Row>
          ))}
        </Col>
        {blues.length > 1 && (
          <Col span={12} style={{ paddingTop: 8 }}>
            <Typography.Title level={4}>
              Total: {blues.sumOf(x => x.value).toFixed()}
            </Typography.Title>
          </Col>
        )}
        {reds.length > 1 && (
          <Col span={12} style={{ paddingTop: 8 }}>
            <Typography.Title level={4}>
              Total: {reds.sumOf(x => x.value).toFixed()}
            </Typography.Title>
          </Col>
        )}
      </Row>
    </Card>
  );
}
