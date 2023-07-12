import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd/lib";
import React, { useState } from "react";
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
export default function TableGroup() {
  const expandedRowRender = () => {
    const columns = [
      {
        title: "متن قالب ",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "عنوان قالب",
        dataIndex: "address",
        key: "address",
      },

      {
        title: " گروه قالب",
        dataIndex: "description",
        key: "description",
      },

      // {
      //   title: "Action",
      //   dataIndex: "operation",
      //   key: "operation",
      //   render: () => (
      //     <Space size="middle">
      //       <a>Pause</a>
      //       <a>Stop</a>
      //       <Dropdown
      //         menu={{
      //           items,
      //         }}
      //       >
      //         <a>
      //           More <DownOutlined />
      //         </a>
      //       </Dropdown>
      //     </Space>
      //   ),
      // },
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
      title: "دامنه url ",
      dataIndex: "name",
      key: "name",
    },

    {
      title: " نام گروه بندی",
      dataIndex: "upgradeNum",
      key: "upgradeNum",
    },

    {
      title: "توضیحات ",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Action",
      key: "operation",
      render: () => (
        <>
          <div>
            <Link to={"/editgroup"}>
              <Button
                style={{ marginRight: 10 }}
                type="primary"
                shape="round"
                icon={<EditFilled />}
                size={size}
              ></Button>
            </Link>
            <Button
              style={{ marginRight: 10 }}
              type="primary"
              shape="round"
              icon={<DeleteFilled />}
              size={size}
            ></Button>
          </div>
        </>
      ),
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
        <Link to={"/creategroup"}>
          <Button
            style={{ marginRight: 10 }}
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size={size}
          >
            ایجاد
          </Button>
        </Link>
      </div>
      <div>
        <Table
          style={{ marginTop: 50 }}
          columns={columns}
          expandable={{
            expandedRowRender,
            defaultExpandedRowKeys: ["0"],
          }}
          dataSource={data}
        />
      </div>
    </>
  );
}
