import React from 'react';
import { Col, Avatar } from 'antd';
import { GetHeroIcon } from '../../../api/HotsTalents';

export default function HeroSelectionColumn(props: {
  direction?: 'ltr' | 'rtl';
  width?: number | string;
  height?: number | string;
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
          top: '0%',
          right: '33%',
        }}
        className={'hexagon'}
        size="large"
        src={GetHeroIcon('abathur.png')}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          top: '20%',
          left: '33%',
        }}
        className={'hexagon'}
        size="large"
        src={GetHeroIcon('abathur.png')}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          top: '40%',
          right: '33%',
        }}
        className={'hexagon'}
        size="large"
        src={GetHeroIcon('abathur.png')}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          top: '60%',
          left: '33%',
        }}
        className={'hexagon'}
        size="large"
        src={GetHeroIcon('abathur.png')}
      />
      <Avatar
        style={{
          width: '66%',
          height: '30%',
          position: 'absolute',
          top: '80%',
          right: '33%',
        }}
        className={'hexagon'}
        size="large"
        src={GetHeroIcon('abathur.png')}
      />
    </Col>
  );
}
