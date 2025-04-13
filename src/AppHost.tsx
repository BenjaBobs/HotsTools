import './AppHost.scss';

import { Col, Layout, Result, Row } from 'antd';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';

import Link from './Link';
import { Flex } from '@src/utils/components/flex';
import { Apps } from '@src/apps/Apps';
import { useNotifyRerender } from '@src/utils/NotifyingClass';

const { Header, Content } = Layout;

export default function AppHost() {
  useNotifyRerender(Apps);
  const currentApp = Apps.currentApp;

  return (
    <Layout>
      <Header>
        <Flex height={64} justifySelf="center" align="stretch" gap={16}>
          {Apps.topLevelApps.map(app => (
            <Link
              key={app.absolutePath}
              to={app.overrideLink ?? app.absolutePath}
              absolute
            >
              <div
                className={`animate textglow-hover ${
                  app === currentApp ? 'underglow' : 'underglow-hover'
                }`}
                style={{ padding: '0 8px', alignContent: 'center' }}
              >
                <h4>{app.name}</h4>
              </div>
            </Link>
          ))}
        </Flex>
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
                    <Result
                      title="Loading..."
                      icon={
                        <LoadingOutlined
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        />
                      }
                    />
                  }
                >
                  {React.cloneElement(
                    currentApp.component as React.ReactElement,
                    Apps.currentPathParams,
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
