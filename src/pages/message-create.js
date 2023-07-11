import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";
import { Button } from "antd/lib";
import { useState } from "react";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: "Action 1",
  },
  {
    key: "2",
    label: "Action 2",
  },
];
const MessageCreate = () => {
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "address",
        dataIndex: "address",
        key: "address",
      },

      {
        title: "description",
        dataIndex: "description",
        key: "description",
      },

      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];
    const data = [
      {
        key: toString(),
        name: " گروه1",
        address: " googel.com",
        description: "توضیحات اولیه",
      },
    ];
    for (let i = 0; i < 3; ++i) {
      data.push();
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Upgraded",
      dataIndex: "upgradeNum",
      key: "upgradeNum",
    },

    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>Publish</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push({
      key: i.toString(),
      name: "Screen",
      platform: "iOS",
      version: "10.3.4.5654",
      upgradeNum: 500,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00",
    });
  }
  const [size, setSize] = useState("large");
  return (
    <>
      <div style={{ display: "flex", direction: "ltr" }}>
        <Link to={"/edit"}>
          <Button
            style={{ display: "flex", justifyContent: "right" }}
            type="primary"
            size={size}
          >
            Create
          </Button>
        </Link>
      </div>
      <Table
        style={{ marginTop: 80 }}
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
      />
    </>
  );
};
export default MessageCreate;
