import React from 'react';
import { useRecoilValue } from 'recoil';
import { s_Heroes } from '../../../api/state/heroes';
import { Row } from 'antd';
import { Link } from 'react-router-dom';
import { GetHeroIcon } from '../../../api/HotsTalents';
import Avatar from 'antd/lib/avatar/avatar';

export default function HeroOverviewPage() {
  const heroData = useRecoilValue(s_Heroes);

  return (
    <Row justify="space-between">
      {heroData.map((x) => (
        <Link
          key={x.shortName}
          to={(path) =>
            `${path.pathname}/heroes/${x.shortName}`.replace('//', '/')
          }
        >
          <Avatar
            className="outline hoverable"
            style={{ height: 80, width: 80 }}
            src={GetHeroIcon(x.icon)}
          />
        </Link>
      ))}
    </Row>
  );
}
