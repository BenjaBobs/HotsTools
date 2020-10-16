import { Row, Col } from 'antd';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { s_draftTeamPicks } from '../../../draft-state';
import { Team } from '../../../Types';
import TeamStrengthChart from './team-strength-chart';

export default function TeamStrengthChartPanel() {
  const blueHeroes = useRecoilValue(s_draftTeamPicks(Team.Blue));
  const redHeroes = useRecoilValue(s_draftTeamPicks(Team.Red));

  return (
    <Row justify="space-between">
      <Col span={12} style={{ height: 400 }}>
        <TeamStrengthChart heroes={blueHeroes} color="#0000ff" />
      </Col>
      <Col span={12} style={{ height: 400 }}>
        <TeamStrengthChart heroes={redHeroes} color="#ff0000" />
      </Col>
    </Row>
  );
}
