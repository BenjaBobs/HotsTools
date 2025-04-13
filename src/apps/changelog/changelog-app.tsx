import { Card, Timeline, Typography } from 'antd';
import React from 'react';

import { AppDefinition } from '../AppDefinition';
import changeLog from './changelog';
import { Flex } from '@src/utils/components/flex';

const ChangeLogApp: AppDefinition = {
  name: 'ChangeLog',
  path: '/ChangeLog',
  component: <ChangeLogPage />,
};

export default ChangeLogApp;

function ChangeLogPage() {
  return (
    <Flex down justifySelf="center" align="center" maxWidth={1000}>
      <Timeline mode="left" style={{ width: '100%' }}>
        {changeLog.map((item, idx) => (
          <Timeline.Item style={{ paddingBottom: 60 }} key={idx}>
            <Card
              style={{ padding: 16, paddingBottom: 16 }}
              title={
                <Typography.Title level={2}>
                  {item.date.toDateString()}
                </Typography.Title>
              }
            >
              <Flex down>
                <RenderCategory name="Added" data={item.added} />
                <RenderCategory name="Changed" data={item.changed} />
                <RenderCategory name="Fixed" data={item.fixed} />
                <RenderCategory name="Removed" data={item.removed} />
                <RenderCategory name="Code" data={item.code} />
              </Flex>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </Flex>
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
  code?: React.ReactNode[];
};
