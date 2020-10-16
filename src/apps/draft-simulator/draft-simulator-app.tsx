import { Avatar, Col, Row, Select } from 'antd';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../api/HotsTalents';
import { s_Heroes } from '../../api/state/heroes';
import { AppDefinition } from '../AppDefinition';
import Orb from '../components/orb';
import DraftInfoPanel from './components/draft-info-panel/draft-info-panel';
import FlexSteps from './components/flex-steps';
import HeroBanColumn from './components/hero-ban-column';
import HeroSelectionColumn from './components/hero-selection-column';
import style from './draft-simulator.module.scss';
import {
  s_draftHistory,
  s_draftPhases,
  s_draftTeamPicks,
  s_draftTeamBans,
} from './draft-state';
import { Team, DraftType } from './Types';
import { s_draftType, s_draftMap } from './draft-state';
import { Maps } from '../../api/state/maps';

const DraftSimulatorApp: AppDefinition = {
  name: 'Draft simulator',
  path: '/draft',
  component: <DraftSimulator />,
};

function DraftSimulator() {
  const heroData = useRecoilValue(s_Heroes);
  const [actions, setActions] = useRecoilState(s_draftHistory);
  const phases = useRecoilValue(s_draftPhases);
  const currentPhase = phases[actions.filter((x) => x.completed).length];

  const [draftType, setDraftType] = useRecoilState(s_draftType);
  const [draftMap, setDraftMap] = useRecoilState(s_draftMap);

  const blueHeroes = useRecoilValue(s_draftTeamPicks(Team.Blue));
  const redHeroes = useRecoilValue(s_draftTeamPicks(Team.Red));
  const blueBans = useRecoilValue(s_draftTeamBans(Team.Blue));
  const redBans = useRecoilValue(s_draftTeamBans(Team.Red));

  return (
    <>
      <Row justify="center" style={{ marginBottom: 16 }}>
        <Col>
          <Select<DraftType>
            value={draftType}
            onChange={(newDraftType) => {
              setDraftType(newDraftType);
              setActions([]);
            }}
            style={{ width: 100 }}
          >
            {Object.values(DraftType).map((type) => (
              <Select.Option key={type} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            value={draftMap.name}
            onChange={(newDraftMapName) => {
              const newMap = Maps.find((m) => m.name === newDraftMapName);
              if (newMap) {
                setDraftMap(newMap);
              }
            }}
            style={{ width: 200 }}
          >
            {Maps.map((m) => (
              <Select.Option key={m.name} value={m.name}>
                {m.name}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16}>
          <FlexSteps>
            {phases.map((p, idx) =>
              p.type === 'Ban' ? (
                <Orb
                  key={idx}
                  intensity={0.2}
                  className={`${style.phaseOrb} ${
                    p === currentPhase ? style.current : ''
                  }`}
                >
                  {p.team === Team.Blue ? '<' : '>'}
                </Orb>
              ) : (
                <Orb
                  key={idx}
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
          <Row justify="center" style={{ padding: 20 }}>
            <DraftInfoPanel />
          </Row>
          <Row justify="center">
            {heroData.map((hero) => {
              const disabled = actions.some((x) => x.heroes.includes(hero));

              return (
                <Col
                  key={hero.id}
                  onClick={() => {
                    if (disabled || !currentPhase) {
                      return;
                    }

                    const uncompletedAction = actions.find((x) => !x.completed);

                    if (uncompletedAction) {
                      setActions([
                        ...actions.slice(0, actions.length - 1),
                        {
                          ...uncompletedAction,
                          heroes: [...uncompletedAction.heroes, hero],
                          completed:
                            currentPhase.amount ===
                            uncompletedAction.heroes.length + 1,
                        },
                      ]);
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
                      height: 60,
                      width: 60,
                    }}
                    src={GetHeroIcon(hero.icon)}
                  />
                </Col>
              );
            })}
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
