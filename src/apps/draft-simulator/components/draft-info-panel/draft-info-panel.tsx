import { Card } from 'antd';
import React from 'react';
import { Phase, PhaseActions } from '../../draft-simulator-app';
import './draft-info-panel.scss';

export default function DraftInfoPanel(props: {
  phase: Phase;
  history: PhaseActions[];
}) {
  return (
    <Card className={'draft-info-panel'} title="Info">
      This is where the crucial info about what to Pick next will show
    </Card>
  );
}
