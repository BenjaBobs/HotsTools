import { Avatar, Col, Result, Row, Space, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';

import heroes from '../../../api/heroes/heroes';
import { browserHistory } from '../../../api/routing';
import Block from '../../components/block/block';
import HeroStrengthChart from '../../components/hero-strength-chart/hero-strength-chart';
import Hexagon from '../../components/hexagon/hexagon';
import AbilityTooltip from './components/ability-tooltip';
import TalentTooltip from './components/talent-tooltip';

export default function HeroDetailsPage(props: { hero?: string }) {
  const hero = heroes.byName(props.hero);
  const [talentPicks, setTalentPicks] = useState<(number | undefined)[]>(
    !browserHistory.location.search?.includes('talents')
      ? new Array(hero?.talents.length).fill(undefined)
      : browserHistory.location.search
          .substring(browserHistory.location.search.indexOf('talents='))
          .toLowerCase()
          .replaceAll('%2c', ',')
          .split(',')
          .map(x => (x === '' ? undefined : parseInt(x) || undefined))
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
    browserHistory.replace({
      ...browserHistory.location,
      search:
        '?talents=' +
        talentPicks.map(x => (x === undefined ? '' : '' + x)).join(','),
    });
  }, [talentPicks]);

  console.log(talentPicks);

  const maxTalentsPerTier = hero.talents.maxOf(tier => tier.length);

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
                  <Block baseColumns={maxTalentsPerTier} gap={1} padding={1}>
                    {hero.talents.map((talentTier, talentTierIdx) => (
                      <React.Fragment key={talentTierIdx}>
                        <Block columns={maxTalentsPerTier}>
                          <h3>Level {talentTier[0].tier.substring(5)}</h3>
                        </Block>
                        {talentTier.map((talent, talentIdx) => {
                          const selected =
                            talentPicks[talentTierIdx] === talentIdx;

                          return (
                            <Block
                              key={talentIdx}
                              textAlign="center"
                              onClick={() =>
                                setTalentPicks(
                                  [...talentPicks].fill(
                                    selected ? undefined : talentIdx,
                                    talentTierIdx,
                                    talentTierIdx + 1
                                  )
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
                                    'animate ' + (selected ? 'textglow  ' : '')
                                  }
                                >
                                  {talent.name}
                                </h4>
                              </Tooltip>
                            </Block>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </Block>
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
