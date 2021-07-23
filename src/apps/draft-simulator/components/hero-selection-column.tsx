import './hero-selection-column.scss';

import { Col } from 'antd';
import { useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../../api/HotsTalents';
import { s_screenInterpolationRatio } from '../../../api/state/device';
import Hexagon from '../../components/hexagon/hexagon';

export default function HeroSelectionColumn(props: {
  direction?: 'ltr' | 'rtl';
  selectedHeroes: string[];
}) {
  const sizeRatio = useRecoilValue(s_screenInterpolationRatio);

  let size = 40 + sizeRatio * 70;

  const style = {
    '--icon-size': size + 'px',
  };

  return (
    <Col className={'hero-slot-bar ' + props.direction} style={style as any}>
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[0])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[1])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[2])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[3])} />
      <Hexagon fallback={'?'} src={GetHeroIcon(props.selectedHeroes[4])} />
    </Col>
  );
}
