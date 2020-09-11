import React from 'react';
import { Ability } from '../../../../api/state/hero-types';
import HotsTooltip from '../../../components/hots-tooltip/hots-tooltip';
import { Row, Col } from 'antd';

export default function AbilityTooltip(props: { ability: Ability }) {
  return (
    <div style={{ maxWidth: 500 }}>
      <HotsTooltip>
        <Row justify="space-between">
          <Col>
            <b>{props.ability.name}</b>
          </Col>
          <Col>({props.ability.hotkey})</Col>
        </Row>
        {props.ability.manaCost && <Row>Mana: {props.ability.manaCost}</Row>}
        {props.ability.cooldown && (
          <Row>Cooldown: {props.ability.cooldown}</Row>
        )}
        <br />
        <Row>{props.ability.description}</Row>
      </HotsTooltip>
    </div>
  );
}
