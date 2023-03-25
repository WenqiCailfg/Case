import React from "react";
import { useGlobalContext } from "../context";
import { Card, Avatar, Typography, Row, Col, Button, Collapse } from "antd";
const { Text } = Typography;
const { Panel } = Collapse;

//Single card component
const SingleCard = ({ color, name, users, dashboards, category }) => {
  const { showConfirm } = useGlobalContext();

  return (
    <Row>
      {/* Card component in laptop */}
      <Col
        sm={24}
        xs={0}
      >
        <Card
          className="card"
          style={{ borderLeft: `10px ${color} solid`, width: "80vw" }}
        >
          <Row align="middle">
            {/* Category icons */}
            <Col
              lg={2}
              sm={2}
            >
              <Avatar style={{ backgroundColor: `${color}` }}>
                {category}
              </Avatar>
            </Col>
            {/* Project name */}
            <Col
              lg={10}
              sm={4}
            >
              <Text strong={true}>{name}</Text>
            </Col>
            {/* Project users */}
            <Col
              lg={6}
              sm={6}
            >
              <Text>{users} users</Text>
            </Col>
            {/* Project dashboards */}
            <Col
              lg={4}
              sm={8}
            >
              <Text className="dashboard">{dashboards} dashboards</Text>
            </Col>
            <Col
              lg={2}
              sm={4}
            >
              {/* Delete project button */}
              <Button
                danger
                type="text"
                onClick={() => {
                  showConfirm(name);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>

      {/* Collapse component in mobile */}
      <Col
        sm={0}
        xs={24}
      >
        <Collapse
          bordered={false}
          expandIconPosition="end"
          className="collapse"
        >
          {/* Panel component */}
          <Panel
            header={
              <Row align="middle">
                <Col span={4}>
                  {/* Category icon */}
                  <Avatar style={{ backgroundColor: `${color}` }}>
                    {category}
                  </Avatar>
                </Col>
                {/* Project name */}
                <Col span={8}>
                  <Text strong={true}>{name}</Text>
                </Col>
              </Row>
            }
            key={name}
            className="card"
            style={{
              borderLeft: `10px ${color} solid`,
              width: "80vw",
              borderRadius: "5px",
            }}
          >
            {/* Content in collapse */}
            <Row
              justify="space-around"
              align="middle"
            >
              {/* Project users */}
              <Col>
                <Text>{users} users</Text>
              </Col>
              {/* Project dashboards */}
              <Col>
                <Text className="dashboard">{dashboards} dashboards</Text>
              </Col>
              {/* Delete button */}
              <Col>
                <Button
                  danger
                  type="text"
                  onClick={() => {
                    showConfirm(name);
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default SingleCard;
