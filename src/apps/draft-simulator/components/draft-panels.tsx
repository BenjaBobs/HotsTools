import './draft-panels.scss';

import { Card, Col, Row } from 'antd';
import { useState } from 'react';

import AnalysisPanel from './panels/analysis-panel';
import HeroesPanel from './panels/heroes-panel';

const panels = [
  {
    name: 'Heroes',
    component: <HeroesPanel />,
  },
  {
    name: 'Analysis',
    component: <AnalysisPanel />,
  },
];

export default function DraftPanels() {
  const [panel, setPanel] = useState(panels[0]);

  return (
    <Card
      style={{ width: '100%' }}
      className={'draft-panels'}
      title={
        <Row align="stretch">
          {panels.map(p => (
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
