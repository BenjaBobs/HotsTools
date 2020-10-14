import { Avatar, Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../api/HotsTalents';
import { Hero } from '../../api/state/hero-types';
import { s_Heroes } from '../../api/state/heroes';
import { AppDefinition } from '../AppDefinition';
import Orb from '../components/orb';
import FlexSteps from './components/flex-steps';
import HeroBanColumn from './components/hero-ban-column';
import HeroSelectionColumn from './components/hero-selection-column';
import style from './draft-simulator.module.scss';

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

  const blueHeroes = actions
    .filter((x) => x.team === 'blue' && x.type === 'Pick')
    .flatMap((x) => x.heroes);
  const redHeroes = actions
    .filter((x) => x.team === 'red' && x.type === 'Pick')
    .flatMap((x) => x.heroes);

  const blueBans = actions
    .filter((x) => x.team === 'blue' && x.type === 'Ban')
    .flatMap((x) => x.heroes);
  const redBans = actions
    .filter((x) => x.team === 'red' && x.type === 'Ban')
    .flatMap((x) => x.heroes);

  return (
    <>
      <Row justify="center">
        <Col span={16}>
          <FlexSteps>
            {phases.map((p, idx) =>
              p.type === 'Ban' ? (
                <Orb
                  intensity={0.2}
                  className={`${style.phaseOrb} ${
                    p === currentPhase ? style.current : ''
                  }`}
                >
                  {p.team === 'blue' ? '<' : '>'}
                </Orb>
              ) : (
                <Orb
                  color={p.team}
                  className={`${style.phaseOrb} ${
                    p === currentPhase ? style.current : ''
                  }`}
                >
                  {p.amount}
                </Orb>
              )
            )}
          </FlexSteps>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col style={{ height: 500 }}>
          <Row>
            <HeroBanColumn heroes={blueBans} />
          </Row>
          <Row style={{ width: 150 }}>
            <HeroSelectionColumn
              direction="ltr"
              selectedHeroes={blueHeroes.map((h) => h.icon)}
            />
          </Row>
        </Col>
        <Col flex="1">
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

                      const uncompletedAction = actions.find(
                        (x) => !x.completed
                      );

                      if (uncompletedAction) {
                        uncompletedAction.heroes.push(hero);
                        uncompletedAction.completed =
                          uncompletedAction.heroes.length ===
                          currentPhase.amount;

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
        <Col style={{ height: 500 }}>
          <Row>
            <HeroBanColumn heroes={redBans} />
          </Row>
          <Row justify="end">
            <HeroSelectionColumn
              direction="rtl"
              width={133}
              selectedHeroes={redHeroes.map((h) => h.icon)}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default DraftSimulatorApp;
