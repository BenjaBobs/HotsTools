import { Avatar, Col, Result, Row, Space } from 'antd';
import { useEffect } from 'react';

import heroes from '../../../api/heroes/heroes';
import HeroStrengthChart from '../../components/hero-strength-chart/hero-strength-chart';
import Hexagon from '../../components/hexagon/hexagon';
import AbilityTooltip from './components/ability-tooltip';
import TalentTooltip from './components/talent-tooltip';

export default function HeroDetailsPage(props: { hero?: string }) {
  const hero = heroes.byName(props.hero);

  useEffect(() => {
    console.log(hero);
  }, []);

  if (!hero) {
    return (
      <Result
        title="Hero not found"
        subTitle={`No hero found named ${props.hero}`}
      />
    );
  }

  return (
    <Row justify="center">
      <Col flex={1}>
        <Row align="middle" gutter={24}>
          <Col>
            <Avatar
              className="outline"
              style={{ width: 80, height: 80 }}
              size="large"
              src={hero.icon}
            />
          </Col>
          <Col>
            <Row>
              <h1>{hero.name}</h1>
            </Row>
          </Col>
          <Col style={{ height: 600, width: 1200 }}>
            <HeroStrengthChart blueHeroes={[hero]} />
          </Col>
        </Row>
        <br />
        <Row justify="space-between">
          <Col flex={1}>
            <Space direction="vertical">
              <Row justify="space-between">
                <Col flex={1}>
                  {hero.abilities.map((ability, idx) => (
                    <Row key={idx} align="middle" style={{ padding: 8 }}>
                      <Hexagon
                        key={ability.name}
                        style={{ width: 80, height: 80 }}
                        src={ability.icon}
                      />
                      <AbilityTooltip ability={ability} />
                    </Row>
                  ))}
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Row>
                    <h2>Talents</h2>
                  </Row>
                  <br />
                  {hero.talents.map((talentSet, idx) => (
                    <Row key={idx} gutter={8} style={{ paddingBottom: 32 }}>
                      <Col key="tier" style={{ width: 90, paddingTop: 40 }}>
                        <h3>Level {talentSet[0].tier}</h3>
                      </Col>
                      <Col key="talents">
                        <Row gutter={8}>
                          {talentSet.map((talent, idx) => (
                            <Col key={idx}>
                              <Row justify="center">
                                <Hexagon src={talent.icon} />
                              </Row>
                              <Row justify="center">
                                <TalentTooltip talent={talent} />
                              </Row>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  ))}
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
