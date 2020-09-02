import React from 'react';
import { Layout, Row, Col, Result } from 'antd';
import { useRecoilValue } from 'recoil';
import { s_currentApp, s_currentAppParams, s_apps } from './apps/Apps';
import { LoadingOutlined } from '@ant-design/icons';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
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
          <Col
            style={{
              color: 'white',
              paddingTop: 16,
              paddingLeft: 32,
              paddingRight: 32,
            }}
            flex="1"
          >
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
                    subTitle="Sorry, something tralala went wrong."
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
