import React from "react";
import { Button, Form, Input, Radio, Row, Col } from "antd";
import { useState } from "react";
import { fetchRegistration } from "../../Requests/index";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({})
  const onFinish = async () => {
    try {
      await fetchRegistration(data)
      navigate("*");
    }
    catch (error) {
      onFinishFailed(error.message)
    }

  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row justify="center">
      <Col>
        <Form
          name="basic"
          labelCol={{
            span: 5,
            offset: 0,
          }}
          style={{
            minWidth: 400,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 24,
            }}
          >
            <h1> Registration</h1>
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              onChange={(e) => setData((data) => ({ ...data, username: e.target.value }))}
              value={data.username}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              type="email"
              onChange={(e) => setData((data) => ({ ...data, email: e.target.value }))}
              value={data.email}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              onChange={(e) => setData((data) => ({ ...data, password: e.target.value }))}
              value={data.password}
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please select your gender!",
              },
            ]}
          >
            <Radio.Group
              onChange={(e) => setData((data) => ({ ...data, gender: e.target.value }))}
              value={data.gender}
            >
              <Radio value={"male"}>Male</Radio>
              <Radio value={"female"}>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <Input
              type="number"
              onChange={(e) => setData((data) => ({ ...data, age: e.target.value }))}
              value={data.age}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 24,
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default Registration;
