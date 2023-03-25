import { Layout, Space, Typography, Row, Col } from "antd";
import React from "react";
import SearchForm from "./SearchForm";
import CardContainer from "./CardContainer";
const { Content } = Layout;
const { Text, Title } = Typography;

// Project content component
const ProjectContainer = () => {
  return (
    <Content className="content">
      <Space
        direction="vertical"
        size={10}
      >
        {/* Show greeting words in mobile devices */}
        <Row>
          <Col sm={0}>
            <Title style={{ color: "#000080", marginBottom: "0" }}>
              Hi Sarah!
            </Title>
          </Col>
        </Row>
        <Row>
          <Col sm={0}>
            <Text className="ant-typography ">
              Here you can find your projects and dashboards.
            </Text>
          </Col>
        </Row>
        {/* Search bar component*/}
        <SearchForm />
        {/* Cards component */}
        <CardContainer />
      </Space>
    </Content>
  );
};

export default ProjectContainer;
