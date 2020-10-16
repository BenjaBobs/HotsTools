import { Row, Col } from 'antd';
import React from 'react';
import { Team } from '../../../Types';
import TeamStrengthChart from './team-strength-chart';

export default function TeamStrengthChartPanel() {
  return (
    <Row justify="space-between">
      <Col span={12} style={{ height: 400 }}>
        <TeamStrengthChart team={Team.Blue} />
      </Col>
      <Col span={12} style={{ height: 400 }}>
        <TeamStrengthChart team={Team.Red} />
      </Col>
    </Row>
  );
}
