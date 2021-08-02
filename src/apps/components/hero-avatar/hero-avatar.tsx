import { Avatar } from 'antd';

import { Hero } from '../../../api/heroes/heroes';
import Block from '../block/block';

export default function HeroAvatar(props: {
  hero: Hero;
  onClick?: () => void;
  disabled?: boolean;
  size?: number;
}) {
  const classes = ['outline'];
  if (props.disabled) classes.push('disabled');
  else if (props.onClick) classes.push('hoverable');

  return (
    <Block onClick={props.onClick} className={classes.join(' ')}>
      <Avatar
        className={classes.join(' ')}
        style={{ height: props.size ?? 80, width: props.size ?? 80 }}
        src={props.hero.icon}
      />
    </Block>
  );
}
