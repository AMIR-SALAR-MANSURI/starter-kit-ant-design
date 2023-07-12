import { DownOutlined, FileAddOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";
import { Button } from "antd/lib";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DownloadOutlined, DeleteFilled, EditFilled } from "@ant-design/icons";
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
export default function TableDomain() {
  const expandedRowRender = () => {
    const columns = [
      {
        title: "دامنه url",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "نام گروه بندی",
        dataIndex: "address",
        key: "address",
      },

      {
        title: " توضیحات",
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
      title: "اسم دامنه  ",
      dataIndex: "name",
      key: "name",
    },

    {
      title: " url",
      dataIndex: "upgradeNum",
      key: "upgradeNum",
    },

    {
      title: "توضیحات ",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "تاریخ ساخت ",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <>
          <div>
            <Button
              style={{ marginRight: 10 }}
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size={size}
            ></Button>
            <Button
              style={{ marginRight: 10 }}
              type="primary"
              shape="round"
              icon={<DeleteFilled />}
              size={size}
            ></Button>
            <Link to={"/edit"}>
              <Button
                style={{ marginRight: 10 }}
                type="primary"
                shape="round"
                icon={<EditFilled />}
                size={size}
              ></Button>
            </Link>
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
}
