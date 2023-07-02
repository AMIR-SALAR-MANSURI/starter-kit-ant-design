import { Menu } from "antd/lib";
import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";

export default function Sidebar() {
  return (
    <Sider>
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
  );
}
