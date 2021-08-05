import ReactMarkdown from 'react-markdown';

import readmeMD from '../../../README.md?raw';
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
    <Block
      mobile={{ width: '100%' }}
      tablet={{ width: '75%' }}
      laptop={{ width: '50%' }}
    >
      <ReactMarkdown className="markdown">{readmeMD}</ReactMarkdown>
    </Block>
  );
}
