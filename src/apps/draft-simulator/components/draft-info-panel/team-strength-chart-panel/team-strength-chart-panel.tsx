import { Col, Row } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react';

import { Team } from '../../../Types';
import TeamStrengthChart from './team-strength-chart';

export default function TeamStrengthChartPanel() {
  const screenSizes = useBreakpoint();
  const height = !screenSizes.lg ? 200 : 400;

  return (
    <Row justify="space-between">
      <Col xs={24} xl={12} style={{ height: height }}>
        <TeamStrengthChart team={Team.Blue} />
      </Col>
      <Col xs={24} xl={12} style={{ height: height }}>
        <TeamStrengthChart team={Team.Red} />
      </Col>
    </Row>
  );
}
