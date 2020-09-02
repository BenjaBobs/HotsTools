import React from 'react';
import { Ability } from '../../../../api/state/hero-types';

export default function AbilityTooltip(props: { ability: Ability }) {
  return <div>{props.ability.name}</div>;
}
