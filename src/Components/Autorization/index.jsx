import React from "react";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Autorization = () => {
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
      name="basic"
      labelCol={{
        span: 5,
        offset: 0,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1> Autorization</h1>

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
          offset: 1,
          span: 22,
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
  );
};
export default Autorization;
