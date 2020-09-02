import React from 'react';
import { Ability } from '../../../../api/state/hero-types';
import HotsTooltip from '../../../components/hots-tooltip/hots-tooltip';
import { Row, Col } from 'antd';

export default function AbilityTooltip(props: { ability: Ability }) {
  return (
    <div style={{ maxWidth: 500 }}>
      <HotsTooltip>
        <Row justify="space-between">
          <Col>{props.ability.name}</Col>
          <Col>({props.ability.hotkey})</Col>
        </Row>
        <Row>Mana: {props.ability.manaCost}</Row>
        <Row></Row>
        <Row>Cooldown: {props.ability.cooldown}</Row>
        <Row></Row>
        <Row>{props.ability.description}</Row>
      </HotsTooltip>
    </div>
  );
}
