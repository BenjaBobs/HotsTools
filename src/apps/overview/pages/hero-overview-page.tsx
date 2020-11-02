import { Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../../api/HotsTalents';
import { s_Heroes } from '../../../api/state/heroes';
import Link2 from '../../../Link2';

export default function HeroOverviewPage() {
  const heroData = useRecoilValue(s_Heroes);

  return (
    <Row justify="space-between">
      {heroData.map((x) => (
        <Link2 key={x.shortName} to={`HotsTools/heroes/${x.shortName}`}>
          <Avatar
            className="outline hoverable"
            style={{ height: 80, width: 80 }}
            src={GetHeroIcon(x.icon)}
          />
        </Link2>
      ))}
    </Row>
  );
}
