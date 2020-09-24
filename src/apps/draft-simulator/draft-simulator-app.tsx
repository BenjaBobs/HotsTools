import { Avatar, Card, Col, Row, Steps } from 'antd';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../api/HotsTalents';
import { Hero } from '../../api/state/hero-types';
import { s_Heroes } from '../../api/state/heroes';
import { AppDefinition } from '../AppDefinition';
import Orb from '../components/orb';
import HeroSelectionColumn from './components/hero-selection-column';

const DraftSimulatorApp: AppDefinition = {
  name: 'Draft simulator',
  path: '/draft',
  component: <DraftSimulator />,
};

type Phase = {
  team: 'blue' | 'red';
  type: 'Pick' | 'Ban';
  amount: number;
};

type PhaseActions = {
  type: 'Pick' | 'Ban';
  team: 'blue' | 'red';
  heroes: Hero[];
  completed: boolean;
};

const phases: Phase[] = [
  { team: 'blue', type: 'Ban', amount: 1 },
  { team: 'red', type: 'Ban', amount: 1 },
  { team: 'blue', type: 'Ban', amount: 1 },
  { team: 'red', type: 'Ban', amount: 1 },
  { team: 'blue', type: 'Pick', amount: 1 },
  { team: 'red', type: 'Pick', amount: 2 },
  { team: 'blue', type: 'Pick', amount: 2 },
  { team: 'red', type: 'Ban', amount: 1 },
  { team: 'blue', type: 'Ban', amount: 1 },
  { team: 'red', type: 'Pick', amount: 2 },
  { team: 'blue', type: 'Pick', amount: 2 },
  { team: 'red', type: 'Pick', amount: 1 },
];

function DraftSimulator() {
  const heroData = useRecoilValue(s_Heroes);
  const [actions, setActions] = useState<PhaseActions[]>([]);
  const currentPhase = phases[actions.filter((x) => x.completed).length];
  
  console.log('state', {actions, currentPhase});

  const blueHeroes = actions
    .filter((x) => x.team === 'blue' && x.type === 'Pick')
    .flatMap((x) => x.heroes);
  const redHeroes = actions
    .filter((x) => x.team === 'red' && x.type === 'Pick')
    .flatMap((x) => x.heroes);


  return (
    <>
      <Row justify="center">
        <Col>
          <Steps
            labelPlacement="vertical"
            size="small"
            current={phases.indexOf(currentPhase)}
          >
            {phases.map((p, idx) => (
              <Steps.Step
                key={idx}
                title={
                  <span
                    style={{ color: p.team === 'blue' ? '#1890ff' : 'red' }}
                  >
                    {p.type} {p.amount}
                  </span>
                }
                icon={
                  p.type === 'Ban' ? (
                    <Orb>
                      <span style={{ color: 'white' }}>
                        {p.team === 'blue' ? '<' : '>'}
                      </span>
                    </Orb>
                  ) : (
                    <Orb color={p.team} />
                  )
                }
              />
            ))}
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
              This is where the crucial info about what to Pick next will show
            </Card>
          </Row>
          <Row justify="center">
            <Col style={{ width: '80%' }}>
              {heroData.map((hero) => {
                const disabled = actions.some((x) => x.heroes.includes(hero));

                return (
                  <span
                    key={hero.id}
                    onClick={() => {
                      if (disabled || !currentPhase) {
                        return;
                      }

                      const uncompletedAction = actions.find(x => !x.completed);

                      if (uncompletedAction) {
                        uncompletedAction.heroes.push(hero);
                        uncompletedAction.completed = uncompletedAction.heroes.length === currentPhase.amount;
                        
                        setActions([...actions]);
                      } else {
                        setActions([
                          ...actions,
                          {
                            type: currentPhase.type,
                            team: currentPhase.team,
                            heroes: [hero],
                            completed: currentPhase.amount === 1,
                          },
                        ]);
                      }
                    }}
                  >
                    <Avatar
                      className={'outline ' + (!disabled && 'hoverable')}
                      style={{
                        height: 50,
                        width: 50,
                      }}
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
