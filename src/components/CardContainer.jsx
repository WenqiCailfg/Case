import { useGlobalContext } from "../context";
import SingleCard from "./SingleCard";
import { Space, Typography, Row, Col } from "antd";

const { Title, Text } = Typography;

// Project cards component, exclude search bar
const CardContainer = () => {
  // color array
  const colors = ["#52c41a", "#1677ff", "#722ed1"];
  const { showProjects, allCategory } = useGlobalContext();

  // show message if no matching project
  if (showProjects.length === 0) {
    return (
      <Row justify="end">
        <Col span={24}>
          <Title
            style={{ width: "80vw", textAlign: "right", marginTop: "2rem" }}
          >
            No projects to display.
          </Title>
        </Col>
      </Row>
    );
  }
  return (
    // Cards component
    <Space
      direction="vertical"
      span={16}
      className="card-container"
    >
      <Row>
        <Col sm={0}>
          <Text
            strong="true"
            className="main-font"
          >
            My Projects:
          </Text>
        </Col>
      </Row>
      {/* Pass parameter to single card component */}
      {showProjects.map((item) => {
        let colorIndex = allCategory.indexOf(item.category); // Fetch color
        if (colorIndex !== -1) {
          return (
            <SingleCard
              key={item.name}
              color={colors[colorIndex]}
              {...item}
            />
          );
        }
      })}
    </Space>
  );
};

export default CardContainer;
