import './hero-selection-column.scss';

import { Avatar, Col } from 'antd';
import React from 'react';

import { GetHeroIcon } from '../../../api/HotsTalents';

export default function HeroSelectionColumn(props: {
  direction?: 'ltr' | 'rtl';
  width?: number | string;
  height?: number | string;
  selectedHeroes: string[];
}) {
  return (
    <Col
      className={'hero-slot-bar ' + props.direction}
      style={{
        width: props.width ?? '100%',
        height: props.height ?? '100%',
      }}
    >
      <Avatar
        className={'hexagon'}
        icon={'?'}
        src={GetHeroIcon(props.selectedHeroes[0])}
      />
      <Avatar
        className={'hexagon'}
        icon={'?'}
        src={GetHeroIcon(props.selectedHeroes[1])}
      />
      <Avatar
        className={'hexagon'}
        icon={'?'}
        src={GetHeroIcon(props.selectedHeroes[2])}
      />
      <Avatar
        className={'hexagon'}
        icon={'?'}
        src={GetHeroIcon(props.selectedHeroes[3])}
      />
      <Avatar
        className={'hexagon'}
        icon={'?'}
        src={GetHeroIcon(props.selectedHeroes[4])}
      />
    </Col>
  );
}
