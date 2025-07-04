import './hero-selection-column.scss';

import { Device } from '../../../api/device';
import { Hexagon } from '../../components/hexagon/hexagon';
import { GetInterpolationRatioLinear } from '@src/utils/MathUtils';
import { useNotifyRerender } from '@src/utils/NotifyingClass';
import { Flex } from '@src/utils/components/flex';

export function HeroSelectionColumn(props: {
  direction?: 'ltr' | 'rtl';
  selectedHeroes: string[];
}) {
  useNotifyRerender(Device, device => [device.width]);

  const sizeRatio = GetInterpolationRatioLinear(375, 1920, Device.width);

  let size = 40 + sizeRatio * 70;

  const style = {
    '--icon-size': size + 'px',
  };

  return (
    <Flex
      down
      className={'hero-slot-bar ' + props.direction}
      style={style as any}
    >
      <Hexagon fallback={'?'} src={props.selectedHeroes[0]} />
      <Hexagon fallback={'?'} src={props.selectedHeroes[1]} />
      <Hexagon fallback={'?'} src={props.selectedHeroes[2]} />
      <Hexagon fallback={'?'} src={props.selectedHeroes[3]} />
      <Hexagon fallback={'?'} src={props.selectedHeroes[4]} />
    </Flex>
  );
}
