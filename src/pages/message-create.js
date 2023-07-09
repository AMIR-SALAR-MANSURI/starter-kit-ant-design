// import {, Input, } from "antd";
import { useState } from "react";
import { Input, Tooltip, Table } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const onChange = (e) => {
  console.log("Change:", e.target.value);
};
const MessageCreate = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextArea
          style={{
            width: 500,
            height: 120,
            marginBottom: 10,
          }}
          showCount
          maxLength={100}
          placeholder="textarea with clear icon"
          allowClear
          onChange={onChange}
        />
        <Input
          style={{ direction: "ltr", flexDirection: "row-reverse" }}
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          // suffix={
          //   <Tooltip title="Extra information">
          //     <InfoCircleOutlined
          //       style={{
          //         color: "rgba(0,0,0,.45)",
          //       }}
          //     />
          //   </Tooltip>
          // }
        />
      </div>

      <Table
        style={{ marginTop: 70 }}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};
export default MessageCreate;
