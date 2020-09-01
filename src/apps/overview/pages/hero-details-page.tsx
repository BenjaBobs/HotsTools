import React from 'react';
import { useRecoilValue } from 'recoil';
import { s_Hero } from '../../../api/state/heroes';
import { Row, Card, List, Avatar, Col } from 'antd';
import { GetHeroIcon } from '../../../api/HotsTalents';

export default function HeroDetailsPage(props: { hero?: string }) {
  const hero = useRecoilValue(s_Hero(props.hero!));

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
                  style={{ width: 80, height: 80 }}
                  size="large"
                  src={GetHeroIcon(hero?.icon!)}
                />
              }
              title={hero?.name}
              description={hero?.expandedRole + ' | ' + hero?.tags.join(', ')}
            />
          }
        >
          {hero?.expandedRole}
        </Card>
      </Col>
    </Row>
  );
}
