import { Typography } from 'antd';

import { AppDefinition } from '../AppDefinition';
import Block from '../components/block/block';

const AboutApp: AppDefinition = {
  name: 'About',
  path: '/about',
  component: <AboutPage />,
};

export default AboutApp;

function AboutPage() {
  return (
    <Block width="50%">
      <Block>
        <Typography.Title>About page</Typography.Title>
      </Block>
      <Block>
        As of writing right now this is a work-in-progress drafting simulator.
        <br />
        The goal is for it to become an easy to use tool to help you draft and
        suggest good picks/bans.
      </Block>
    </Block>
  );
}
