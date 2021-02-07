import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import './Link.scss';
import { s_urlPath, browserHistory } from './api/state/routing';

export type LinkProps = {
  to: string;
  target?: string;
  className?: string;
  onClick?: (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
} & (
  | {
      relative: true;
      absolute?: undefined;
    }
  | {
      absolute: true;
      relative?: undefined;
    }
);

export default function Link(props: React.PropsWithChildren<LinkProps>) {
  const path = useRecoilValue(s_urlPath);

  const href = useMemo(() => {
    let innerHref = '';

    if (props.relative) {
      innerHref = props.to.startsWith('/')
        ? path + props.to
        : path + '/' + props.to;
    } else if (props.to.startsWith('http')) {
      innerHref = props.to;
    } else {
      innerHref = props.to.startsWith('/') ? props.to : '/' + props.to;
    }

    return innerHref;
  }, [props.to, props.relative, path]);

  return (
    <a
      className={`link ${props.className}`}
      target={props.target}
      href={href}
      onClick={event => {
        if (props.onClick) {
          props.onClick(event);
        }

        // navigate without reloading
        if (
          !event.defaultPrevented && // onClick prevented default
          event.button === 0 && // ignore everything but left clicks
          (!props.target || props.target === '_self') && // let browser handle "target=_blank" etc.
          !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) // ignore clicks with modifier keys
        ) {
          event.preventDefault();
          browserHistory.push(href);
        }
      }}
    >
      {props.children}
    </a>
  );
}
