import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import './draft-info-panel.scss';
import TeamStrengthChartPanel from './team-strength-chart-panel/team-strength-chart-panel';
import SuggestionsPanel from './suggestions-panel/suggestions-panel';

const panels = [
  {
    name: 'Strength Charts',
    component: <TeamStrengthChartPanel />,
  },
  {
    name: 'Suggestions',
    component: <SuggestionsPanel />,
  },
];

export default function DraftInfoPanel() {
  const [panel, setPanel] = useState(panels[0]);

  return (
    <Card
      className={'draft-info-panel'}
      title={
        <Row align="stretch">
          {panels.map((p) => (
            <Col
              style={{ padding: 8, height: 48 }}
              key={p.name}
              className={
                'textglow-hover underglow-hover animate clickable ' +
                (p === panel ? 'underglow' : '')
              }
              onClick={() => setPanel(p)}
            >
              <span>{p.name}</span>
            </Col>
          ))}
        </Row>
      }
    >
      {panel.component}
    </Card>
  );
}
