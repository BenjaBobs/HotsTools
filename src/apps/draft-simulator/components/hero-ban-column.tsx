import './hero-ban-column.scss';

import { Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

import { GetHeroIcon } from '../../../api/HotsTalents';
import { Hero } from '../../../api/state/hero-types';
import { StopOutlined } from '@ant-design/icons';
import Overlay from '../../components/overlay/overlay';

export default function HeroBanColumn(props: { heroes: (Hero | undefined)[] }) {
  return (
    <Row justify="center" className="hero-ban-column">
      <Overlay>
        <Avatar icon={'?'} src={GetHeroIcon(props.heroes[0]?.icon)} />
        {props.heroes[0] && <StopOutlined />}
      </Overlay>
      <Overlay>
        <Avatar icon={'?'} src={GetHeroIcon(props.heroes[1]?.icon)} />
        {props.heroes[1] && <StopOutlined />}
      </Overlay>
      <Overlay>
        <Avatar icon={'?'} src={GetHeroIcon(props.heroes[2]?.icon)} />
        {props.heroes[2] && <StopOutlined />}
      </Overlay>
    </Row>
  );
}
