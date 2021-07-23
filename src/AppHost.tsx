import './AppHost.scss';

import { Col, Layout, Result, Row, Typography } from 'antd';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { LoadingOutlined } from '@ant-design/icons';

import { s_apps, s_currentApp } from './apps/Apps';
import Block from './apps/components/block/block';
import Link from './Link';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function AppHost() {
  const apps = useRecoilValue(s_apps);
  const currentApp = useRecoilValue(s_currentApp);

  return (
    <Layout>
      <Header>
        <Block columns={apps.length} align="center" gap={0.5}>
          {apps.map(app => (
            <Link
              key={app.absolutePath}
              to={app.overrideLink ?? app.absolutePath}
              absolute
            >
              <Block
                align="center"
                textAlign="center"
                className="underglow-hover animate textglow-hover"
                padding={{ left: 0.5, right: 0.5 }}
                height={4}
              >
                <Title level={4}>{app.name}</Title>
              </Block>
            </Link>
          ))}
        </Block>
      </Header>
      <Content>
        <Row justify="center">
          <Col className="app-host-content" flex="1">
            {!currentApp ? (
              <Result
                status="404"
                title="Not found"
                subTitle="Sorry, the page you visited does not exist."
              />
            ) : (
              <ErrorBoundary
                message={
                  <Result
                    status="500"
                    title="Error"
                    subTitle="Sorry, something went wrong."
                  />
                }
              >
                <React.Suspense
                  fallback={
                    <Result title="Loading..." icon={<LoadingOutlined />} />
                  }
                >
                  {React.cloneElement(
                    currentApp.app.component as React.ReactElement,
                    currentApp.params
                  )}
                </React.Suspense>
              </ErrorBoundary>
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
