import React from "react";
import { Button, Form, Input, Row, Col} from "antd";
import { useState } from "react";


const CustomInput = ({ fetchData }) => {
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  const onFinish = async (e) => {
    try {
      const request = await fetch(
        process.env.REACT_APP_TODO_POST_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
          }),
        }
      );
      const response = await request.json();

      if (!response) {
        throw new Error("request error");
      }

      if (response.hasOwnProperty("success")) {
        if (Array.isArray(response.errors)) {
          response.errors.forEach((item) => {
            alert(`${item.param} - ${item.msg}`);
          });
        }
      } else if (response.message) {
        alert(response.message);
      } else {
        setTitle("");
        fetchData();
      }
    } catch (error) {
      alert(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="CustomInput"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={{
        remember: true,
      }}
    >
      <Row justify="center">
        <Form.Item
          name="InputTask"
          rules={[
            {
              required: true,
              message: "Please input your task!",
            },
          ]}
        >
          <Row justify="center">
            <Col span={15}>
              <Input onChange={(e) => setTitle(e.target.value)} value={title} />
            </Col>
            <Col>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default CustomInput;
