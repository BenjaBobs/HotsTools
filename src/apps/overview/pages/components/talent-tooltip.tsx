import { Col, Row } from 'antd';

import { Talent } from '../../../../api/heroes/heroes';
import HotsTooltip from '../../../components/hots-tooltip/hots-tooltip';

export default function TalentTooltip(props: { talent: Talent }) {
  return (
    <div style={{ maxWidth: 300 }}>
      <HotsTooltip>
        <Row justify="space-between">
          <Col>
            <b>{props.talent.name}</b>
          </Col>
          <Col>({props.talent.type})</Col>
        </Row>
        <br />
        <Row>{props.talent.descriptionLong}</Row>
      </HotsTooltip>
    </div>
  );
}
