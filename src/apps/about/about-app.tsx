import { Typography } from 'antd';
import React from 'react';

import Link from '../../Link';
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
        <br />
        As of writing right now this is a work-in-progress drafting simulator.
        The goal is for it to become an easy to use tool to help you draft and
        suggest good picks/bans.
      </Block>
      <Block>
        <br />
        This project uses data from the nice folks at
        <ul>
          <li>
            <Link to="https://github.com/heroespatchnotes" absolute>
              https://github.com/heroespatchnotes
            </Link>
          </li>
          <li>
            <Link to="https://github.com/HeroesToolChest" absolute>
              https://github.com/HeroesToolChest
            </Link>
          </li>
        </ul>
        Be sure to check them out!
      </Block>
    </Block>
  );
}
