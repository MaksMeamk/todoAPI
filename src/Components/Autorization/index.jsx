import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Autorization = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onFinish = async () => {
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
      }
      if (response.hasOwnProperty("success")) {
        if (Array.isArray(response.errors))
          response.errors.forEach((item) => {
            alert(`${item.param} - ${item.msg}`);
          });
        else alert(response.message);
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
    <Row justify="center">
      <Col>
        <Form
          name="basic"
          labelCol={{
            span: 7,
            offset: 0,
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
              offset: 7,
            }}
          >
            <h1> Autorization</h1>
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
              offset: 7,
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
