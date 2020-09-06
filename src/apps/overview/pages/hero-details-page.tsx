import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  s_Hero,
  s_HeroAbilities,
  s_HeroTalents,
} from '../../../api/state/heroes';
import { Row, Avatar, Col, Space } from 'antd';
import {
  GetHeroIcon,
  GetAbilityIcon,
  GetTalentIcon,
} from '../../../api/HotsTalents';
import HeroStrengthsChart from './components/hero-strengths-chart';
import AbilityTooltip from './components/ability-tooltip';
import TalentTooltip from './components/talent-tooltip';

export default function HeroDetailsPage(props: { hero?: string }) {
  const hero = useRecoilValue(s_Hero(props.hero!))!;
  const abilitySets = useRecoilValue(s_HeroAbilities(props.hero!))!;
  const talentSets = useRecoilValue(s_HeroTalents(props.hero!))!;

  return (
    <Row justify="center" style={{ paddingLeft: 48, paddingRight: 48 }}>
      <Col flex={1}>
        <Row align="middle" gutter={24}>
          <Col>
            <Avatar
              className="outline"
              style={{ width: 80, height: 80 }}
              size="large"
              src={GetHeroIcon(hero?.icon!)}
            />
          </Col>
          <Col>
            <Row>
              <h1>{hero.name}</h1>
            </Row>
            <Row>{hero.expandedRole + ' | ' + hero?.tags.join(', ')}</Row>
          </Col>
        </Row>
        <br />
        <Row justify="space-between">
          <Col flex={1}>
            <Space direction="vertical">
              <Row justify="space-between">
                <Col flex={1}>
                  {abilitySets.map((abilitySet) => (
                    <>
                      <Row>
                        <h2>
                          Abilities{' '}
                          {abilitySets.length > 1 && `(${abilitySet.form})`}
                        </h2>
                      </Row>
                      <Row>
                        <Col>
                          {abilitySet.abilities.map((ability) => (
                            <Row align="middle" style={{ padding: 8 }}>
                              <Avatar
                                key={ability.name}
                                className="hexagon"
                                size="large"
                                style={{ width: 80, height: 80 }}
                                src={GetAbilityIcon(ability.icon)}
                              />
                              <AbilityTooltip ability={ability} />
                            </Row>
                          ))}
                        </Col>
                      </Row>
                    </>
                  ))}
                </Col>
                <Col
                  flex={1}
                  style={{
                    maxWidth: 800,
                    minWidth: 600,
                    maxHeight: 800,
                    minHeight: 600,
                  }}
                >
                  <HeroStrengthsChart hero={hero} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Row>
                    <h2>Talents</h2>
                  </Row>
                  <br />
                  {talentSets.map((talentSet) => (
                    <Row gutter={8} style={{ paddingBottom: 32 }}>
                      <Col key="tier" style={{ width: 90, paddingTop: 40 }}>
                        <h3>Level {talentSet.tier}</h3>
                      </Col>
                      <Col key="talents">
                        <Row gutter={8}>
                          {talentSet.talents.map((talent) => (
                            <Col>
                              <Row justify="center">
                                <Avatar
                                  className="hexagon"
                                  size="large"
                                  src={GetTalentIcon(talent.icon)}
                                />
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
