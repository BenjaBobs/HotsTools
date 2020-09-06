import React from 'react';
import { Talent } from '../../../../api/state/hero-types';
import HotsTooltip from '../../../components/hots-tooltip/hots-tooltip';
import { Row, Col } from 'antd';

export default function TalentTooltip(props: { talent: Talent }) {
  return (
    <div style={{ maxWidth: 300 }}>
      <HotsTooltip>
        <Row justify="space-between">
          <Col>
            <b>{props.talent.name}</b>
          </Col>
          <Col>({props.talent.type})</Col>
        </Row>
        <br />
        <Row>{props.talent.description}</Row>
      </HotsTooltip>
    </div>
  );
}
