import Markdown from 'markdown-to-jsx';

import readmeMD from '../../../README.md' with { type: 'text' };
import { AppDefinition } from '../AppDefinition';
import Block from '../components/block/block';

const AboutApp: AppDefinition = {
	name: 'About',
	path: '',
	component: <AboutPage />,
};

export default AboutApp;

function AboutPage() {
	return (
		<Block
			className="markdown"
			mobile={{ width: '100%' }}
			tablet={{ width: '75%' }}
			laptop={{ width: '50%' }}
		>
			<Markdown children={readmeMD} />
		</Block>
	);
}
