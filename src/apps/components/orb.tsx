import React, { CSSProperties } from 'react';

import style from './orb.module.scss';

export default function Orb(
  props: React.PropsWithChildren<{
    size?: number;
    color?: string;
    intensity?: number;
  }>
) {
  const cssVariables = {
    '--orb-size': (props.size ?? 20) + 'px',
    '--orb-color': props.color ?? '#fff',
    '--orb-intensity': 0.5,
  };

  return (
    <div style={cssVariables as CSSProperties} className={style.orb}>
      {props.children}
    </div>
  );
}
