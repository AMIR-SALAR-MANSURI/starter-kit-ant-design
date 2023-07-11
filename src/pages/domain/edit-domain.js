import React from "react";
import { Button, Form, Input } from "antd";
import { DatePicker, Space } from "antd";
import { Group } from "antd/lib/avatar";
import GroupList from "../group/group-list";
export default function EditDomain() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: "100%",
          height: "80%",
        }}
        onFinish={handleSubmit} // Use the handleSubmit function as the value for onFinish prop
      >
        <div style={{ backgroundColor: "white", borderRadius: 5, padding: 15 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Form.Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="اسم دامنه"
              style={{ width: "49%" }}
              name="username"
              rules={[
                {
                  required: true,
                  message: "لطفا اسم دامنه را وارد کنید",
                },
                { whitespace: true, message: "اسم دامنه نمی تواند خالی باشد" },
              ]}
              hasFeedback
            >
              <Input style={{ height: 50 }} />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="url"
              style={{ width: "49%" }}
              name="password"
              rules={[
                {
                  required: true,
                  message: "لطفا url را وارد کنید",
                },
                { type: "url", message: "آدرس وارد شده صحیح نیست  " },
                { whitespace: true, message: "url نمی تواند خالی باشد" },
              ]}
              hasFeedback
            >
              <Input style={{ height: 50 }} />
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 23,
            }}
          >
            <Form.Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="توضیحات"
              style={{ width: "49%" }}
              name="description"
              rules={[
                {
                  required: true,
                  message: "لطفا توضیحات را وارد کنید ",
                },
                { whitespace: true, message: "توضیحات  نمی تواند خالی باشد" },
              ]}
              hasFeedback
            >
              <Input style={{ height: 50 }} />
            </Form.Item>
            <Form.Item style={{ direction: "ltr", marginTop: 40 }} label=" ">
              <Button type="primary" htmlType="submit">
                ویرایش
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
      <div>
        <GroupList />
      </div>
    </>
  );
}
