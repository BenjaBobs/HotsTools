import { Avatar, Col, Result, Row, Space, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';

import { heroes } from '../../../api/heroes/heroes';
import { HeroStrengthChart } from '../../components/hero-strength-chart/hero-strength-chart';
import { Hexagon } from '../../components/hexagon/hexagon';
import { AbilityTooltip } from './components/ability-tooltip';
import { TalentTooltip } from './components/talent-tooltip';
import { Flex } from '@src/utils/components/flex';
import { AddressBar } from '@src/utils/AddressBar';

export function HeroDetailsPage(props: { hero?: string }) {
  const hero = heroes.byName(props.hero);
  const [talentPicks, setTalentPicks] = useState<(number | undefined)[]>(
    AddressBar.getQueryParam('talents')
      ?.split(',')
      .map(char => (char ? parseInt(char) : undefined)) ??
      new Array(hero?.talents.length).fill(undefined),
  );

  if (!hero) {
    return (
      <Result
        title="Hero not found"
        subTitle={`No hero found named ${props.hero}`}
      />
    );
  }

  useEffect(() => {
    AddressBar.setQueryParam(
      'talents',
      talentPicks.map(x => (x === undefined ? '' : '' + x)).join(','),
    );
  }, [talentPicks]);

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
                  <Flex down gap={32} pad={8}>
                    {hero.talents.map((talentTier, talentTierIdx) => (
                      <React.Fragment key={talentTierIdx}>
                        <Flex>
                          <h3>Level {talentTier[0].tier.substring(5)}</h3>
                        </Flex>
                        <Flex gap={32}>
                          {talentTier.map((talent, talentIdx) => {
                            const selected =
                              talentPicks[talentTierIdx] === talentIdx;

                            return (
                              <Flex
                                laptop={{ width: 230 }}
                                justifyContent="center"
                                key={talentIdx}
                                onClick={() =>
                                  setTalentPicks(
                                    [...talentPicks].fill(
                                      selected ? undefined : talentIdx,
                                      talentTierIdx,
                                      talentTierIdx + 1,
                                    ),
                                  )
                                }
                              >
                                <Tooltip
                                  title={<TalentTooltip talent={talent} />}
                                >
                                  <Hexagon
                                    src={talent.icon}
                                    style={{
                                      width: 60,
                                      height: 60,
                                      margin: '0 auto',
                                      marginBottom: 8,
                                    }}
                                  />
                                  <h4
                                    className={
                                      'animate ' +
                                      (selected ? 'textglow  ' : '')
                                    }
                                  >
                                    {talent.name}
                                  </h4>
                                </Tooltip>
                              </Flex>
                            );
                          })}
                        </Flex>
                      </React.Fragment>
                    ))}
                  </Flex>
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
