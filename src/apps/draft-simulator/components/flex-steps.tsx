import { Flex } from '@src/utils/components/flex';
import './flex-steps.scss';

import { Col } from 'antd';
import React from 'react';
import { FlexDivider } from '@src/apps/components/flex-divider/FlexDivider';

export function FlexSteps(props: { children: React.ReactNode }) {
  const childArr = Array.isArray(props.children)
    ? props.children
    : [props.children];

  return (
    <Flex justifyContent="space-between" align="middle" className="flex-steps">
      {childArr.map((step, idx) => {
        if (idx === 0) {
          return (
            <Col key={idx} className="flex-step">
              {step}
            </Col>
          );
        } else {
          return (
            <React.Fragment key={idx}>
              <FlexDivider />
              <Col key={idx} className="flex-step">
                {step}
              </Col>
            </React.Fragment>
          );
        }
      })}
    </Flex>
  );
}
