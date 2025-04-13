import Markdown from 'markdown-to-jsx';

import readmeMD from '../../../README.md?raw';
import { AppDefinition } from '../AppDefinition';
import { Flex } from '@src/utils/components/flex';

const AboutApp: AppDefinition = {
  name: 'About',
  path: '',
  component: <AboutPage />,
};

export default AboutApp;

function AboutPage() {
  return (
    <Flex down className="markdown">
      <Markdown children={readmeMD} />
    </Flex>
  );
}
