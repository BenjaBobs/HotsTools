import { Flex } from '@src/utils/components/flex';

import React from 'react';
import { FlexDivider } from '@src/apps/components/flex-divider/FlexDivider';

export function FlexSteps(props: { children: React.ReactNode }) {
  const childArr = Array.isArray(props.children)
    ? props.children
    : [props.children];

  return (
    <Flex
      justifyContent="space-between"
      align="center"
      className="flex-steps"
      tablet={{ gap: 4 }}
      laptop={{ gap: 8 }}
    >
      {childArr.map((step, idx) => {
        if (idx === 0) {
          return (
            <Flex down key={idx} className="flex-step">
              {step}
            </Flex>
          );
        } else {
          return (
            <React.Fragment key={idx}>
              <FlexDivider spaceAround={0} />
              <Flex down key={idx} className="flex-step">
                {step}
              </Flex>
            </React.Fragment>
          );
        }
      })}
    </Flex>
  );
}
