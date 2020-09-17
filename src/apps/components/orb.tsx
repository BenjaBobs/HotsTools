import React from 'react';
import style from './orb.module.scss';

export default function Orb(props: { size?: number }) {
  return (
    <div style={{ width: props.size || 150, height: props.size || 150 }}>
      <div className={style.orb}></div>
    </div>
  );
}
