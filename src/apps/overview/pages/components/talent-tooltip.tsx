import React from 'react';
import { Talent } from '../../../../api/state/hero-types';

export default function TalentTooltip(props: { talent: Talent }) {
  return <div>{props.talent.name}</div>;
}
