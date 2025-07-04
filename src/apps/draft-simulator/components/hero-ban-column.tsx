import './hero-ban-column.scss';

import { Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import { StopOutlined } from '@ant-design/icons';

import { Device } from '../../../api/device';
import { Hero } from '../../../api/heroes/heroes';
import { Overlay } from '../../components/overlay/overlay';
import { useNotifyRerender } from '@src/utils/NotifyingClass';
import { GetInterpolationRatioLinear } from '@src/utils/MathUtils';

export function HeroBanColumn(props: {
  heroes: readonly (Hero | undefined)[];
}) {
  useNotifyRerender(Device, device => [device.width]);

  const sizeRatio = GetInterpolationRatioLinear(375, 1920, Device.width);

  let size = 30 + sizeRatio * 30;

  const style = {
    '--icon-size': size + 'px',
  };

  return (
    <Row justify="center" className="hero-ban-column" style={style as any}>
      <Overlay>
        <Avatar icon={'?'} src={props.heroes[0]?.icon} />
        {props.heroes[0] && (
          <StopOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        )}
      </Overlay>
      <Overlay>
        <Avatar icon={'?'} src={props.heroes[1]?.icon} />
        {props.heroes[1] && (
          <StopOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        )}
      </Overlay>
      <Overlay>
        <Avatar icon={'?'} src={props.heroes[2]?.icon} />
        {props.heroes[2] && (
          <StopOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        )}
      </Overlay>
    </Row>
  );
}
