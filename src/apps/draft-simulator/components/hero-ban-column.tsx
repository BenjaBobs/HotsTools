import './hero-ban-column.scss';

import { Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

import { GetHeroIcon } from '../../../api/HotsTalents';
import { Hero } from '../../../api/state/hero-types';

export default function HeroBanColumn(props: { heroes: (Hero | undefined)[] }) {
  return (
    <Row justify="center" className="hero-ban-column">
      <Avatar
        className={`hexagon`}
        icon={'?'}
        src={GetHeroIcon(props.heroes[0]?.icon)}
      />
      <Avatar
        className={`hexagon`}
        icon={'?'}
        src={GetHeroIcon(props.heroes[1]?.icon)}
      />
      <Avatar
        className={`hexagon`}
        icon={'?'}
        src={GetHeroIcon(props.heroes[2]?.icon)}
      />
    </Row>
  );
}
