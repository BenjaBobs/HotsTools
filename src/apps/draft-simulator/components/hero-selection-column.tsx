import './hero-selection-column.scss';

import { Col } from 'antd';
import React from 'react';

import { GetHeroIcon } from '../../../api/HotsTalents';
import Hexagon from '../../components/hexagon/hexagon';

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
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[0])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[1])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[2])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[3])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[4])} />
    </Col>
  );
}
