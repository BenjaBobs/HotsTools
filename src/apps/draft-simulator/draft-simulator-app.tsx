import React from 'react';
import { AppDefinition } from '../AppDefinition';
import { Row, Col, Steps } from 'antd';
import HeroSelectionColumn from './components/hero-selection-column';

const DraftSimulatorApp: AppDefinition = {
  name: 'Draft simulator',
  path: '/draft',
  component: <DraftSimulator />,
};

const BlueDot = (
  <div
    style={{
      height: 30,
      width: 30,
      background: 'blue',
      borderRadius: '50%',
    }}
  ></div>
);

const RedDot = (
  <div
    style={{
      height: 30,
      width: 30,
      background: 'red',
      borderRadius: '50%',
    }}
  ></div>
);

function DraftSimulator() {
  return (
    <>
      <Row justify="center">
        <Col>
          <Steps labelPlacement="vertical" size="small">
            <Steps.Step title="Ban" icon={BlueDot} />
            <Steps.Step title="Ban" icon={RedDot} />
            <Steps.Step title="Ban" icon={BlueDot} />
            <Steps.Step title="Ban" icon={RedDot} />
            <Steps.Step title="Pick" icon={BlueDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Pick" icon={BlueDot} />
            <Steps.Step title="Pick" icon={RedDot} />
            <Steps.Step title="Pick" />
            <Steps.Step title="Pick" />
            <Steps.Step title="Pick" />
            <Steps.Step title="Pick" />
            <Steps.Step title="Pick" />
          </Steps>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col style={{ height: 500, width: 200 }}>
          <HeroSelectionColumn selectedHeroes={[]} />
        </Col>
        <Col>hero searcher</Col>
        <Col style={{ height: 500, width: 200 }}>
          <HeroSelectionColumn
            selectedHeroes={['abathur.png', 'brightwing.png']}
          />
        </Col>
      </Row>
    </>
  );
}

export default DraftSimulatorApp;
