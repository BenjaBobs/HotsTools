import { Col, Row } from 'antd';

import { Ability } from '../../../../api/heroes/heroes';
import HotsTooltip from '../../../components/hots-tooltip/hots-tooltip';

export default function AbilityTooltip(props: { ability: Ability }) {
  return (
    <div style={{ maxWidth: 500 }}>
      <HotsTooltip>
        <Row justify="space-between">
          <Col>
            <b>{props.ability.name}</b>
          </Col>
          <Col>({props.ability.type})</Col>
        </Row>
        {props.ability.cost && (
          <Row>
            {props.ability.cost.type}: {props.ability.cost.amount}{' '}
            {props.ability.cost.perSecond && ' per second'}
          </Row>
        )}
        {props.ability.cooldown && (
          <Row>Cooldown: {props.ability.cooldown}</Row>
        )}
        <br />
        <Row>{props.ability.descriptionLong}</Row>
      </HotsTooltip>
    </div>
  );
}
