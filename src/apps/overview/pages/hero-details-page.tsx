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
import { ResponsiveRadar } from '@nivo/radar';

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
                          {abilitySet.abilities.map((ab) => (
                            <Avatar
                              key={ab.name}
                              className="hexagon"
                              size="large"
                              src={GetAbilityIcon(ab.icon)}
                            />
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
                            <Avatar
                              className="hexagon"
                              size="large"
                              src={GetTalentIcon(talent.icon)}
                            />
                          ))}
                        </Col>
                      </Row>
                    </>
                  ))}
                </Col>
              </Row>
            </Col>
            <Col flex={1} style={{ maxWidth: 800, maxHeight: 800 }}>
              <ResponsiveRadar
                maxValue={10}
                gridLevels={5}
                gridShape="linear"
                data={[
                  {
                    property: 'WaveClear',
                    hero: Math.round(Math.random() * 10),
                  },
                  {
                    property: 'Pvp',
                    hero: Math.round(Math.random() * 10),
                  },
                  {
                    property: 'RotationSpeed',
                    hero: Math.round(Math.random() * 10),
                  },
                  {
                    property: 'Other',
                    hero: Math.round(Math.random() * 10),
                  },
                  {
                    property: 'CoolSkins',
                    hero: Math.round(Math.random() * 10),
                  },
                ]}
                indexBy="property"
                keys={['hero']}
                colors="red"
                margin={{ left: 128, right: 128, top: 128, bottom: 128 }}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                fillOpacity={0.2}
                legends={[]}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
