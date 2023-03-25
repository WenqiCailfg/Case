import React from "react";
import { Layout, Badge, Avatar, Typography, Row, Col } from "antd";
import { BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Text } = Typography;

const style = {
  verticalAlign: "middle",
};

// Responsive header component
const AppHeader = () => {
  return (
    <Header className="header">
      <Row
        align="middle"
        justify="end"
      >
        {/* Menu icon, appear in mobile */}
        <Col
          xs={2}
          sm={0}
          pull={18}
        >
          <MenuOutlined
            className="header-icon"
            style={style}
          />
        </Col>
        {/* Bell icon */}
        <Col
          xs={2}
          sm={1}
        >
          <Badge
            size="small"
            dot={true}
            className="badge"
            offset={[-5, 5]}
          >
            <BellOutlined
              className="header-icon"
              style={style}
            />
          </Badge>
        </Col>
        {/* username */}
        <Col
          xs={0}
          sm={3}
          md={2}
        >
          <Text
            strong="true"
            className="main-font"
            style={{
              verticalAlign: "middle",
              width: "100%",
              display: "inline-block",
            }}
          >
            Sarah Green
          </Text>
        </Col>
        {/* user avatar  */}
        <Col
          xs={2}
          sm={1}
        >
          <Avatar
            icon={<UserOutlined />}
            className="avatar"
            size={24}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
