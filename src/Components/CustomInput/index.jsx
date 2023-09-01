import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CustomInput = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onFinish = async (e) => {
    try {
      const request = await fetch(
        "https://todo-redev.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const response = await request.json();
      if (!response) {
        throw new Error("request error");
      }
      if (!response.token) {
        throw new Error(response.message);
      } else {
        console.log(response);
        localStorage.setItem("token", response.token);
        navigate("/tasks");
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
      /*name="basic"
      labelCol={{
        span: 5,
        offset: 0,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}*/
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
          <Col>
            <Input onChange={(e) => setEmail(e.target.value)} value={email} />
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
