import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { useRecoilValue } from 'recoil';

import { GetHeroIcon } from '../../../../../api/HotsTalents';
import { s_suggestedHeroes, usePickHero } from '../../../draft-state';
import { Team } from '../../../Types';
import TeamStrengthChart from '../team-strength-chart-panel/team-strength-chart';

export default function SuggestionsPanel() {
  const pickHero = usePickHero();
  const suggestions = useRecoilValue(s_suggestedHeroes);
  const screenSizes = useBreakpoint();
  const height = !screenSizes.lg ? 200 : 400;

  return (
    <Row justify="space-between">
      <Col xs={24} xl={12} style={{ height: height }}>
        <TeamStrengthChart team={Team.Blue} />
      </Col>
      <Col xs={24} xl={12}>
        <div style={{ padding: 16 }}>
          {suggestions.map((s, idx) => (
            <Row key={idx}>
              <Col>
                <Row>
                  <h3>{s.reason}</h3>
                </Row>
                <Row>
                  {s.heroes.map((h) => (
                    <div onClick={() => pickHero(h)} key={h.shortName}>
                      <Avatar
                        className={'outline hoverable'}
                        style={{
                          height: 60,
                          width: 60,
                        }}
                        src={GetHeroIcon(h.icon)}
                      />
                    </div>
                  ))}
                </Row>
              </Col>
            </Row>
          ))}
        </div>
      </Col>
    </Row>
  );
}
