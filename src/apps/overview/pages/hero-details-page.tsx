import React from 'react';
import { useRecoilValue } from 'recoil';
import { s_Hero } from '../../../api/state/heroes';
import { Row, Card, List, Avatar, Col } from 'antd';
import { GetHeroIcon, GetAbilityIcon } from '../../../api/HotsTalents';

export default function HeroDetailsPage(props: { hero?: string }) {
  const hero = useRecoilValue(s_Hero(props.hero!))!;
  const forms = Object.entries(hero.abilities).map(([form, abilities]) => {
    return { form, abilities };
  });

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
              title={hero.name}
              description={hero.expandedRole + ' | ' + hero?.tags.join(', ')}
            />
          }
        >
          <Row>
            <Col>
              {forms.map((form) => (
                <>
                  <Row>
                    <h1>Abilities {forms.length > 1 && `(${form.form})`}</h1>
                  </Row>
                  <Row>
                    <Col>
                      {form.abilities.map((ab) => (
                        <>
                          <Avatar
                            className="hexagon"
                            size="large"
                            src={GetAbilityIcon(ab.icon)}
                          />
                        </>
                      ))}
                    </Col>
                  </Row>
                </>
              ))}
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
