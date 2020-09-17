import React from 'react';
import { Col, Avatar } from 'antd';
import { GetHeroIcon } from '../../../api/HotsTalents';
import './hero-selection-column.scss';

function GetIconProp(hero?: string) {
  return !!hero
    ? {
        src: GetHeroIcon(hero),
      }
    : {
        icon: (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 70,
            }}
          >
            ?
          </div>
        ),
      };
}

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
        size="large"
        {...GetIconProp(props.selectedHeroes[0])}
      />
      <Avatar
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[1])}
      />
      <Avatar
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[2])}
      />
      <Avatar
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[3])}
      />
      <Avatar
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[4])}
      />
    </Col>
  );
}
