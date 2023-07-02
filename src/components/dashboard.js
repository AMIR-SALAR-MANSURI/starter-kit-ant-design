import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
          }}
        ></div>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/">dashboard</Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/create">ProcessCreate</Link>
          </Menu.Item>
          {/* <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/route3">nav 3</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "dark",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
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

{
  /* <SiderBar />
<AppBar />  */
}
