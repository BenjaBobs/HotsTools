import { Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import heroes from '../../../api/heroes/heroes';
import Link from '../../../Link';

export default function HeroOverviewPage() {
  return (
    <Row justify="space-between">
      {heroes.all.map(x => (
        <Link
          key={x.nameNormalized}
          to={`HotsTools/heroes/${x.nameNormalized}`}
          absolute
        >
          <Avatar
            className="outline hoverable"
            style={{ height: 80, width: 80 }}
            src={x.icon}
          />
        </Link>
      ))}
    </Row>
  );
}
