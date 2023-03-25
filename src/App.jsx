import AppHeader from "./components/AppHeader";
import ProjectContainer from "./components/ProjectContainer";
import "antd/dist/reset.css";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader />
        <ProjectContainer />
      </Layout>
    </div>
  );
}

export default App;
