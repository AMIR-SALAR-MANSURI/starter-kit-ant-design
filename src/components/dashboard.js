import { Layout, theme } from "antd";
import Sidebar from "./sidebar";
import HeaderApp from "./header-app";

const { Content } = Layout;

const Dashboard = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "row" }}
    >
      <Sidebar />
      <Layout>
        <HeaderApp />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
