import './hero-ban-column.scss';

import { Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

import { GetHeroIcon } from '../../../api/HotsTalents';
import { Hero } from '../../../api/state/hero-types';
import { StopOutlined } from '@ant-design/icons';
import Overlay from '../../components/overlay/overlay';
import { useRecoilValue } from 'recoil';
import { s_screenInterpolationRatio } from '../../../api/state/device';

export default function HeroBanColumn(props: { heroes: (Hero | undefined)[] }) {
  const sizeRatio = useRecoilValue(s_screenInterpolationRatio);

  let size = 30 + sizeRatio * 30;

  const style = {
    '--icon-size': size + 'px',
  };

  return (
    <Row justify="center" className="hero-ban-column" style={style as any}>
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
