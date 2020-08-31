import React from 'react';
import { useRecoilValue } from 'recoil';
import { s_Heroes } from '../../../api/state/heroes';
import { Row } from 'antd';
import { Link } from 'react-router-dom';
import { GetHeroIcon } from '../../../api/HotsTalents';

export default function HeroOverviewPage() {
  const heroData = useRecoilValue(s_Heroes);

  return (
    <Row justify="space-between">
      {heroData.map((x) => (
        <Link
          key={x.shortName}
          to={(path) => `${path.pathname}/heroes/${x.shortName}`}
        >
          <img alt={x.shortName} src={GetHeroIcon(x.icon)} />
        </Link>
      ))}
    </Row>
  );
}
