import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CustomInput = () => {
  const [title, setTitle] = useState('');
  const token = localStorage.getItem('token');

  const onFinish = async (e) => {
    console.log(token);
    try {
      const request = await fetch(
        "https://todo-redev.herokuapp.com/api/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
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
      else {
        setTitle("")
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
    >
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
    </Form>
  );
};

export default CustomInput;
