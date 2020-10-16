import { Card } from 'antd';
import React from 'react';
import './draft-info-panel.scss';
import TeamStrengthChartPanel from './team-strength-chart-panel/team-strength-chart-panel';

export default function DraftInfoPanel() {
  return (
    <Card className={'draft-info-panel'} title="Strength Charts">
      <TeamStrengthChartPanel />
    </Card>
  );
}
