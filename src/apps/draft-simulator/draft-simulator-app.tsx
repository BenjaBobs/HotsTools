import React, { useState } from 'react';
import { AppDefinition } from '../AppDefinition';
import { Row, Col, Steps, Avatar, Card } from 'antd';
import HeroSelectionColumn from './components/hero-selection-column';
import { useRecoilValue } from 'recoil';
import { s_Heroes } from '../../api/state/heroes';
import { GetHeroIcon } from '../../api/HotsTalents';
import { Hero } from '../../api/state/hero-types';
import Orb from '../components/orb';

const DraftSimulatorApp: AppDefinition = {
  name: 'Draft simulator',
  path: '/draft',
  component: <DraftSimulator />,
};

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
            <Steps.Step title="Ban" icon={<Orb size={20} />} />
            <Steps.Step title="Ban" icon={<Orb size={20} />} />
            <Steps.Step title="Ban" icon={<Orb size={20} />} />
            <Steps.Step title="Ban" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
            <Steps.Step title="Ban" icon={<Orb size={20} />} />
            <Steps.Step title="Ban" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
            <Steps.Step title="Pick" icon={<Orb size={20} />} />
          </Steps>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={3} style={{ height: 500 }}>
          <HeroSelectionColumn
            direction="ltr"
            selectedHeroes={blueHeroes.map((h) => h.icon)}
          />
        </Col>
        <Col span={18}>
          <Row justify="center" style={{ padding: 40 }}>
            <Card title="Info">
              This is where the crucial info about what to pick next will show
            </Card>
          </Row>
          <Row justify="center">
            <Col style={{ width: '80%' }}>
              {heroData.map((hero) => {
                const disabled =
                  blueHeroes.includes(hero) || redHeroes.includes(hero);

                return (
                  <span
                    key={hero.id}
                    onClick={() => {
                      if (disabled) {
                        return;
                      }

                      if (phase === 'bluePick') {
                        setBlueHeroes([...blueHeroes, hero]);
                      } else {
                        setRedHeroes([...redHeroes, hero]);
                      }

                      setPhase(phase === 'bluePick' ? 'redPick' : 'bluePick');
                    }}
                  >
                    <Avatar
                      className={'outline ' + (!disabled && 'hoverable')}
                      style={{ height: 50, width: 50 }}
                      src={GetHeroIcon(hero.icon)}
                    />
                  </span>
                );
              })}
            </Col>
          </Row>
        </Col>
        <Col span={3} style={{ height: 500 }}>
          <HeroSelectionColumn
            direction="rtl"
            selectedHeroes={redHeroes.map((h) => h.icon)}
          />
        </Col>
      </Row>
    </>
  );
}

export default DraftSimulatorApp;
