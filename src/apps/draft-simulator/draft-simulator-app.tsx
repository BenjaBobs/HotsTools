import { Avatar, Col, Row, Select } from 'antd';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../api/HotsTalents';
import { s_Heroes } from '../../api/state/heroes';
import { Maps } from '../../api/state/maps';
import { AppDefinition } from '../AppDefinition';
import Orb from '../components/orb';
import DraftInfoPanel from './components/draft-info-panel/draft-info-panel';
import FlexSteps from './components/flex-steps';
import HeroBanColumn from './components/hero-ban-column';
import HeroSelectionColumn from './components/hero-selection-column';
import style from './draft-simulator.module.scss';
import {
  s_draftHistory,
  s_draftMap,
  s_draftPhases,
  s_draftTeamBans,
  s_draftTeamPicks,
  s_draftType,
} from './draft-state';
import { DraftType, Team } from './Types';
import { usePickHero } from './draft-state';

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

  const pickHero = usePickHero();

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
        <Col xs={22} sm={18} md={16}>
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
        <Col span={3}>
          <Row>
            <HeroBanColumn heroes={blueBans} />
          </Row>
          <Row>
            <HeroSelectionColumn
              direction="ltr"
              selectedHeroes={blueHeroes.map((h) => h.icon)}
            />
          </Row>
        </Col>
        <Col span={18}>
          <Row justify="center" style={{ paddingTop: 20, paddingBottom: 20 }}>
            <DraftInfoPanel />
          </Row>
          <Row justify="center">
            {heroData.map((hero) => {
              const disabled = actions.some((x) => x.heroes.includes(hero));

              return (
                <Col
                  key={hero.id}
                  onClick={() => {
                    pickHero(hero);
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
        <Col span={3}>
          <Row justify="end">
            <HeroBanColumn heroes={redBans} />
          </Row>
          <Row justify="end">
            <HeroSelectionColumn
              direction="rtl"
              selectedHeroes={redHeroes.map((h) => h.icon)}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default DraftSimulatorApp;
