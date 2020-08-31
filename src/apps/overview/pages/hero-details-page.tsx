import React from 'react';
import { useRecoilValue } from 'recoil';
import { s_Hero } from '../../../api/state/heroes';

export default function HeroDetailsPage(props: { hero?: string }) {
  const heroData = useRecoilValue(s_Hero(props.hero!));

  return (
    <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
      {JSON.stringify(heroData, null, '  ')}
    </pre>
  );
}
