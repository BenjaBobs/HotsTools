import React from 'react';
import { AppDefinition } from '../AppDefinition';
import { Row, Col } from 'antd';
import HeroSelectionColumn from './components/hero-selection-column';

const DraftSimulatorApp: AppDefinition = {
  name: 'Draft simulator',
  path: '/draft',
  component: <DraftSimulator />,
};

function DraftSimulator() {
  return (
    <>
      <Row justify="center">
        draft stage bar
        <br />
        O--O--O--O--O--O--O--O--O
      </Row>
      <Row justify="space-between" align="middle">
        <Col style={{ height: 500, width: 200 }}>
          <HeroSelectionColumn />
        </Col>
        <Col>middle</Col>
        <Col style={{ height: 500, width: 200 }}>
          <HeroSelectionColumn />
        </Col>
      </Row>
    </>
  );
}

export default DraftSimulatorApp;
