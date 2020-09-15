import React, { useState } from 'react';
import { AppDefinition } from '../AppDefinition';
import { Row, Col, Steps, Avatar } from 'antd';
import HeroSelectionColumn from './components/hero-selection-column';
import { useRecoilValue } from 'recoil';
import { s_Heroes } from '../../api/state/heroes';
import { GetHeroIcon } from '../../api/HotsTalents';
import { Hero } from '../../api/state/hero-types';

const DraftSimulatorApp: AppDefinition = {
  name: 'Draft simulator',
  path: '/draft',
  component: <DraftSimulator />,
};

const BlueDot = (
  <div
    style={{
      height: 30,
      width: 30,
      background: 'blue',
      borderRadius: '50%',
    }}
  ></div>
);

const RedDot = (
  <div
    style={{
      height: 30,
      width: 30,
      background: 'red',
      borderRadius: '50%',
    }}
  ></div>
);

function DraftSimulator() {
  const heroData = useRecoilValue(s_Heroes);
  const [blueHeroes, setBlueHeroes] = useState<Hero[]>([]);
  const [redHeroes, setRedHeroes] = useState<Hero[]>([]);
  const [phase, setPhase] = useState<'bluePick' | 'redPick'>('bluePick');

  return (
    <>
      <Row justify="center">
        <Col>
          <Steps labelPlacement="vertical" size="small">
            <Steps.Step title="Ban" icon={BlueDot} />
            <Steps.Step title="Ban" icon={RedDot} />
            <Steps.Step title="Ban" icon={BlueDot} />
            <Steps.Step title="Ban" icon={RedDot} />
            <Steps.Step title="Pick" icon={BlueDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Pick" icon={BlueDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Ban" icon={RedDot} />
            <Steps.Step title="Ban" icon={RedDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Pick" icon={RedDot} />
          </Steps>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={3} style={{ height: 500 }}>
          <HeroSelectionColumn selectedHeroes={blueHeroes.map((h) => h.icon)} />
        </Col>
        <Col span={18}>
          {heroData
            .filter((h) => !blueHeroes.includes(h) && !redHeroes.includes(h))
            .map((hero) => (
              <span
                key={hero.id}
                onClick={() => {
                  if (phase == 'bluePick') {
                    setBlueHeroes([...blueHeroes, hero]);
                  } else {
                    setRedHeroes([...redHeroes, hero]);
                  }

                  setPhase(phase === 'bluePick' ? 'redPick' : 'bluePick');
                }}
              >
                <Avatar
                  className="outline hoverable"
                  style={{ height: 80, width: 80 }}
                  src={GetHeroIcon(hero.icon)}
                />
              </span>
            ))}
        </Col>
        <Col span={3} style={{ height: 500 }}>
          <HeroSelectionColumn selectedHeroes={redHeroes.map((h) => h.icon)} />
        </Col>
      </Row>
    </>
  );
}

export default DraftSimulatorApp;
