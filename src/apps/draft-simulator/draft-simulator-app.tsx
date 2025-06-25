import { Col, Row, Select } from 'antd';

import { HotsMaps } from '../../api/maps';
import { AppDefinition } from '../AppDefinition';
import { Orb } from '../components/orb/orb';
import { DraftPanels } from './components/draft-panels';
import { FlexSteps } from './components/flex-steps';
import { HeroBanColumn } from './components/hero-ban-column';
import { HeroSelectionColumn } from './components/hero-selection-column';
import style from './draft-simulator.module.scss';
import { DraftSimulation, DraftType, Team } from './DraftSimulation';
import { useNotifyRerender } from '@src/utils/NotifyingClass';

export const DraftSimulatorApp: AppDefinition = {
  name: 'Draft simulator',
  path: 'draft',
  component: <DraftSimulator />,
};

function DraftSimulator() {
  useNotifyRerender(DraftSimulation);

  return (
    <>
      <Row justify="center" style={{ marginBottom: 16 }}>
        <Col>
          <Select<DraftType>
            value={DraftSimulation.draftType}
            onChange={newDraftType => {
              DraftSimulation.setDraftType(newDraftType);
              DraftSimulation.reset();
            }}
            style={{ width: 100 }}
          >
            {Object.values(DraftType).map(type => (
              <Select.Option key={type} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            value={DraftSimulation.map.name}
            onChange={newDraftMapName => {
              const newMap = HotsMaps.find(m => m.name === newDraftMapName);
              if (newMap) {
                DraftSimulation.setMap(newMap);
              }
            }}
            style={{ width: 200 }}
          >
            {HotsMaps.map(m => (
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
            {DraftSimulation.phases.map((p, idx) =>
              p.type === 'Ban' ? (
                <Orb
                  key={idx}
                  intensity={0.2}
                  className={`${style.phaseOrb} ${
                    p === DraftSimulation.getCurrentPhase() ? style.current : ''
                  }`}
                >
                  {p.team === Team.Blue ? '<' : '>'}
                </Orb>
              ) : (
                <Orb
                  key={idx}
                  color={p.team}
                  className={`${style.phaseOrb} ${
                    p === DraftSimulation.getCurrentPhase() ? style.current : ''
                  }`}
                >
                  {p.amount}
                </Orb>
              ),
            )}
          </FlexSteps>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={3}>
          <Row>
            <HeroBanColumn heroes={DraftSimulation.getBans(Team.Blue)} />
          </Row>
          <Row>
            <HeroSelectionColumn
              direction="ltr"
              selectedHeroes={DraftSimulation.getPicks(Team.Blue).map(
                h => h.icon,
              )}
            />
          </Row>
        </Col>
        <Col span={18}>
          <Row justify="center" style={{ paddingTop: 20, paddingBottom: 20 }}>
            <DraftPanels />
          </Row>
        </Col>
        <Col span={3}>
          <Row justify="end">
            <HeroBanColumn heroes={DraftSimulation.getBans(Team.Red)} />
          </Row>
          <Row justify="end">
            <HeroSelectionColumn
              direction="rtl"
              selectedHeroes={DraftSimulation.getPicks(Team.Red).map(
                h => h.icon,
              )}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}
