import History from 'history';
import React from 'react';
import { LinkProps } from 'react-router-dom';

import { browserHistory } from './api/state/routing';

export default function Link2<S = History.LocationState>(
  props: React.PropsWithoutRef<LinkProps<S>> &
    React.RefAttributes<HTMLAnchorElement>
) {
  return (
    <a
      {...props}
      referrerPolicy=""
      href={props.to as string}
      onClick={(evt) => {
        if (!(props.to as string).includes('https://')) {
          evt.preventDefault();
          evt.stopPropagation();
          browserHistory.push(props.to as string);
        }
      }}
    >
      {props.children}
    </a>
  );
}
