import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  s_Hero,
  s_HeroAbilities,
  s_HeroTalents,
} from '../../../api/state/heroes';
import { Row, Card, List, Avatar, Col } from 'antd';
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
        <Card
          hoverable={false}
          title={
            <List.Item.Meta
              style={{ color: 'white' }}
              avatar={
                <Avatar
                  className="outline"
                  style={{ width: 80, height: 80 }}
                  size="large"
                  src={GetHeroIcon(hero?.icon!)}
                />
              }
              title={<h1>{hero.name}</h1>}
              description={hero.expandedRole + ' | ' + hero?.tags.join(', ')}
            />
          }
        >
          <Row justify="space-between">
            <Col flex={1}>
              <Row>
                <Col>
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
                            <div style={{ padding: 8 }}>
                              <Avatar
                                key={ability.name}
                                className="hexagon"
                                size="large"
                                src={GetAbilityIcon(ability.icon)}
                              />
                              <AbilityTooltip ability={ability} />
                            </div>
                          ))}
                        </Col>
                      </Row>
                    </>
                  ))}
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <Row>
                    <h2>Talents</h2>
                  </Row>
                  {talentSets.map((talentSet) => (
                    <>
                      <Row key="tier">
                        <h3>Level {talentSet.tier}</h3>
                      </Row>
                      <Row key="talents">
                        <Col>
                          {talentSet.talents.map((talent) => (
                            <div
                              style={{ padding: 8, display: 'inline-block' }}
                            >
                              <Avatar
                                className="hexagon"
                                size="large"
                                src={GetTalentIcon(talent.icon)}
                              />
                              <TalentTooltip talent={talent} />
                            </div>
                          ))}
                        </Col>
                      </Row>
                    </>
                  ))}
                </Col>
              </Row>
            </Col>
            <Col flex={1} style={{ maxWidth: 800, maxHeight: 800 }}>
              <HeroStrengthsChart hero={hero} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
