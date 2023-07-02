import React from "react";
import { Layout } from "antd";

export default function HeaderApp() {
  const { Header } = Layout;

  return (
    <Header
      style={{
        padding: 0,
        background: "dark",
      }}
    ></Header>
  );
}
