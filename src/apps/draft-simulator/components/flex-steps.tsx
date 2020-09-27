import './flex-steps.scss';

import { Col, Row } from 'antd';
import React from 'react';

export default function FlexSteps(props: { children: React.ReactNodeArray }) {
  return (
    <Row justify="space-between" align="middle" className="flex-steps">
      {props.children.map((step, idx) => {
        if (idx === 0) {
          return <Col className="flex-step">{step}</Col>;
        } else {
          return (
            <>
              <Col flex="1" className="flex-steps-divider">
                <div></div>
              </Col>
              <Col className="flex-step">{step}</Col>
            </>
          );
        }
      })}
    </Row>
  );
}
