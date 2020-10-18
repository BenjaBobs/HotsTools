import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../../../../api/HotsTalents';
import { s_suggestedHeroes } from '../../../draft-state';

export default function SuggestionsPanel() {
  const suggestions = useRecoilValue(s_suggestedHeroes);

  return (
    <div style={{ padding: 16 }}>
      {suggestions.map((s, idx) => (
        <Row key={idx}>
          <Col>
            <Row>
              <h2>{s.reason}</h2>
            </Row>
            <Row>
              {s.heroes.map((h) => (
                <Avatar
                  key={h.shortName}
                  className={'outline hoverable'}
                  style={{
                    height: 60,
                    width: 60,
                  }}
                  src={GetHeroIcon(h.icon)}
                />
              ))}
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
}
