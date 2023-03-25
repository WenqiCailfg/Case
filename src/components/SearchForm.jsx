import React from "react";
import { useGlobalContext } from "../context";
import { Form, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// Search bar
const SearchForm = () => {
  const { input, setInput } = useGlobalContext();
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      {/* Search bar in laptop */}
      <Row justify="end">
        <Col
          xs={0}
          sm={10}
        >
          <Input
            className="Search-bar-laptop"
            placeholder="Search for a keyword"
            value={input}
            prefix={<SearchOutlined />}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </Col>
      </Row>
      {/* Search bar in mobile */}
      <Row>
        <Col
          sm={0}
          xs={24}
        >
          <Input
            bordered={false}
            suffix={<SearchOutlined />}
            placeholder="Search"
            value={input}
            className="Search-bar-mobile"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></Input>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
