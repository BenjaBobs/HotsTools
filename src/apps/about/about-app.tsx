import { Row } from 'antd';
import React from 'react';
import { AppDefinition } from '../AppDefinition';

const AboutApp: AppDefinition = {
  name: 'About',
  path: '/about',
  component: <AboutPage />,
};

export default AboutApp;

function AboutPage() {
  return (
    <Row justify="center">
      As of writing right now this is a work-in-progress drafting simulator.
      <br />
      The goal is for it to become an easy to use tool to help you draft and
      suggest good picks/bans.
    </Row>
  );
}
