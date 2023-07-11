import { DeleteFilled, DownloadOutlined, EditFilled } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { Button } from "antd/lib";
import { Link } from "react-router-dom";
const { Column } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];
const GroupList = () => (
  <Table dataSource={data} style={{ marginTop: 100 }}>
    <Column title="دامنه url" dataIndex="firstName " key="firstName" />
    <Column title="توضیحات" dataIndex="lastName" key="lastName" />
    <Column title="نام گروه بندی" dataIndex="address " key="address " />

    <Column
      title="عملیات"
      key="عملیات"
      render={() => (
        <>
          <div>
            <Button
              style={{ marginRight: 5 }}
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
            ></Button>
            <Button
              style={{ marginRight: 10 }}
              type="primary"
              shape="round"
              icon={<DeleteFilled />}
            ></Button>
            {/* <Link to={"/edit"}> */}
            <Button
              style={{ marginRight: 10 }}
              type="primary"
              shape="round"
              icon={<EditFilled />}
            ></Button>
            {/* </Link> */}
          </div>
        </>
      )}
    />
  </Table>
);
export default GroupList;
