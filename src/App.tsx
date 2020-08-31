import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import style from './App.module.css';
import { useRecoilValueLoadable } from 'recoil';
import { s_Heroes } from './api/state/heroes';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

export default function App() {
  const heroData = useRecoilValueLoadable(s_Heroes);

  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <Row align="middle" justify="space-around" className={style.header}>
          <Col flex={1}>
            <Space direction="horizontal">
              <Link to="/">Overview</Link>
              <Link to="/">Overview2</Link>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content className={style.content}>
        <Row justify="center">
          <Col style={{ color: 'white' }} flex="1">
            wat
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
