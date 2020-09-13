import React from 'react';
import { Col, Avatar } from 'antd';
import { GetHeroIcon } from '../../../api/HotsTalents';

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
      style={{
        width: props.width ?? '100%',
        height: props.height ?? '100%',
        position: 'relative',
      }}
    >
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          backgroundColor: 'transparent',
          top: '0%',
          right: '33%',
        }}
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[0])}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          backgroundColor: 'transparent',
          top: '20%',
          left: '33%',
        }}
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[1])}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          backgroundColor: 'transparent',
          top: '40%',
          right: '33%',
        }}
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[2])}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          backgroundColor: 'transparent',
          top: '60%',
          left: '33%',
        }}
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[3])}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          backgroundColor: 'transparent',
          top: '80%',
          right: '33%',
        }}
        className={'hexagon'}
        size="large"
        {...GetIconProp(props.selectedHeroes[4])}
      />
    </Col>
  );
}
