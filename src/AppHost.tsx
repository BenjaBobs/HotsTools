import { Col, Layout, Result, Row } from 'antd';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';
import { useRecoilValue } from 'recoil';
import './AppHost.scss';
import { LoadingOutlined } from '@ant-design/icons';

import { s_apps, s_currentApp, s_currentAppParams } from './apps/Apps';
import Link2 from './Link2';

const { Header, Content } = Layout;

export default function AppHost() {
  const apps = useRecoilValue(s_apps);
  const currentApp = useRecoilValue(s_currentApp);
  const currentAppParams = useRecoilValue(s_currentAppParams);

  return (
    <Layout>
      <Header>
        <Row align="middle" justify="space-around">
          {apps.map((app) => (
            <Link2
              key={app.absolutePath}
              to={app.overrideLink ?? app.absolutePath}
              className="textglow-hover underglow-hover animate"
              style={{ paddingLeft: 16, paddingRight: 16 }}
            >
              {app.name}
            </Link2>
          ))}
        </Row>
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
                    currentApp?.component as React.ReactElement,
                    currentAppParams
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
