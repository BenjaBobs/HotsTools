import { Col, Input, InputRef, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';

import { Hero, heroes } from '../../../api/heroes/heroes';
import { HeroAvatar } from '../hero-avatar/hero-avatar';

export function HeroPicker(props: {
  onHeroPicked?: (hero: Hero) => void;
  disabledHeroes?: string[];
  size?: number;
}) {
  const searchRef = useRef<InputRef>();
  const [search, setSearch] = useState('');

  // autofocus searcher
  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      if (
        evt.code.startsWith('Digit') ||
        evt.code.startsWith('Key') ||
        evt.code == 'Period' ||
        evt.key == 'Backspace'
      ) {
        searchRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <Row justify="center">
      <Col span={24} style={{ paddingBottom: 12 }}>
        <Input
          ref={ref => (searchRef.current = ref || undefined)}
          placeholder={'Search...'}
          onChange={evt => setSearch(evt.target.value.toLowerCase())}
        />
      </Col>
      {heroes.all.map(hero => (
        <HeroAvatar
          key={hero.nameNormalized}
          hero={hero}
          size={props.size}
          onClick={() => props.onHeroPicked?.(hero)}
          disabled={
            props.disabledHeroes?.includes(hero.nameNormalized) ||
            (search.length > 0 && !hero.nameNormalized.includes(search))
          }
        />
      ))}
    </Row>
  );
}
