import './hexagon.scss';

import React from 'react';

import { Overlay } from '../overlay/overlay';

export function Hexagon(props: {
  className?: string;
  fallback?: string;
  src?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <Overlay
      style={props.style}
      className={`hexagon ${props.className}`}
      onClick={props.onClick}
    >
      {props.src ? (
        <img className="hexagon-img" alt="" src={props.src} />
      ) : (
        <div className="hexagon-text">{props.fallback}</div>
      )}
      <div>
        <img
          className="hexagon-outline"
          src="https://static.heroesofthestorm.com/images/ability-icon-frame-6f5d4ee4ef.png"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
    </Overlay>
  );
}
