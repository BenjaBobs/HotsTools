import React from 'react';
import { LinkProps, Link } from 'react-router-dom';
import History from 'history';

export default function Link2<S = History.LocationState>(
  props: React.PropsWithoutRef<LinkProps<S>> &
    React.RefAttributes<HTMLAnchorElement>
) {
  if ((props.to as string).includes('://')) {
    return (
      <a {...props} href={props.to as string}>
        {props.children}
      </a>
    );
  }

  return <Link {...props}>{props.children}</Link>;
}
