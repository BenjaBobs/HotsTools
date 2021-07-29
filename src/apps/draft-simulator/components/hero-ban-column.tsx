import './hero-ban-column.scss';

import { Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useRecoilValue } from 'recoil';

import { StopOutlined } from '@ant-design/icons';

import { s_screenInterpolationRatio } from '../../../api/device';
import { Hero } from '../../../api/heroes/heroes';
import Overlay from '../../components/overlay/overlay';

export default function HeroBanColumn(props: { heroes: (Hero | undefined)[] }) {
  const sizeRatio = useRecoilValue(s_screenInterpolationRatio);

  let size = 30 + sizeRatio * 30;

  const style = {
    '--icon-size': size + 'px',
  };

  return (
    <Row justify="center" className="hero-ban-column" style={style as any}>
      <Overlay>
        <Avatar icon={'?'} src={props.heroes[0]?.icon} />
        {props.heroes[0] && <StopOutlined />}
      </Overlay>
      <Overlay>
        <Avatar icon={'?'} src={props.heroes[1]?.icon} />
        {props.heroes[1] && <StopOutlined />}
      </Overlay>
      <Overlay>
        <Avatar icon={'?'} src={props.heroes[2]?.icon} />
        {props.heroes[2] && <StopOutlined />}
      </Overlay>
    </Row>
  );
}
