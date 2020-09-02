import React from 'react';
import style from './hots-tooltip.module.css';

export default function HotsTooltip(props: React.PropsWithChildren<{}>) {
  return <div className={style.tooltip}>{props.children}</div>;
}
