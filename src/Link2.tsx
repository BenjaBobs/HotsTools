import History from 'history';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export default function Link2<S = History.LocationState>(
  props: React.PropsWithoutRef<LinkProps<S>> &
    React.RefAttributes<HTMLAnchorElement>
) {
  if ((props.to as string).includes('://')) {
    return (
      <a {...props} referrerPolicy="origin" href={props.to as string}>
        {props.children}
      </a>
    );
  }

  return <Link {...props}>{props.children}</Link>;
}
