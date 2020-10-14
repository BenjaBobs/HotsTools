import React from 'react';
import './overlay.scss';

export default function Overlay(
  props: React.PropsWithChildren<{
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
  }>
) {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  return (
    <div
      style={props.style}
      onClick={props.onClick}
      className={'overlay ' + (props.className ?? '')}
    >
      {children.map((c, idx) => (
        <div key={idx} className="overlay-item">
          {c}
        </div>
      ))}
    </div>
  );
}
