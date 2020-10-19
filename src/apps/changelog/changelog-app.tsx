import { Row, Timeline, Space, Card, Col } from 'antd';
import React from 'react';
import { AppDefinition } from '../AppDefinition';
import changeLog from './changelog';

const ChangeLogApp: AppDefinition = {
  name: 'ChangeLog',
  path: '/ChangeLog',
  component: <ChangeLogPage />,
};

export default ChangeLogApp;

function ChangeLogPage() {
  return (
    <Row style={{ paddingTop: 16 }}>
      <Col xs={24} lg={{ span: 16 }}>
        <Timeline mode="left" style={{ width: '100%' }}>
          {changeLog.map((item, idx) => (
            <Timeline.Item
              style={{ paddingBottom: 40 }}
              key={idx}
              label={item.date.toDateString()}
            >
              <Card style={{ width: '80%', padding: 16, paddingBottom: 0 }}>
                <Space direction="vertical" size={16}>
                  <RenderCategory name="Added" data={item.added} />
                  <RenderCategory name="Changed" data={item.changed} />
                  <RenderCategory name="Fixed" data={item.fixed} />
                  <RenderCategory name="Removed" data={item.removed} />
                </Space>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </Col>
    </Row>
  );
}

function RenderCategory(props: { name: string; data?: React.ReactNode[] }) {
  return props.data ? (
    <>
      <h3 style={{ marginBottom: 8 }}>{props.name}</h3>
      <ul>
        {props.data.map((x, idx) => (
          <li key={idx}>{x}</li>
        ))}
      </ul>
    </>
  ) : null;
}

export type ChangelogItem = {
  date: Date;
  added?: React.ReactNode[];
  changed?: React.ReactNode[];
  fixed?: React.ReactNode[];
  removed?: React.ReactNode[];
};
