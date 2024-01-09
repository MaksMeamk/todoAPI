import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { fetchAuthorization } from "../../Requests/index";
import { useState } from "react";

const Autorization = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' })
  const onFinish = async () => {
    try {
      await fetchAuthorization(data)
      navigate("/tasks");
    }
    catch (error) {
      onFinishFailed(error.message)
    }

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row justify="center">
      <Col>
        <Form
          name="basic"
          labelCol={{
            span: 6,
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
              span: 24,
              offset: 9,
            }}
          >
            <h1> Authorization</h1>
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
              onChange={(e) => setData((data) => ({ ...data, email: e.target.value }))
              }
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
              onChange={(e) => setData((data) => ({ ...data, password: e.target.value }))
              }
              value={data.password}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
              offset: 10,
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
            <Button type="link">
              <Link to="/registration">Sign Up</Link>
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default Autorization;