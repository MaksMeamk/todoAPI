import React from "react";
import { Button, Form, Input, Radio, Row, Col } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [dataRegistration, setDataRegistration] = useState({username: '', email: '', password: '', age: '', gender: ''})
  const navigate = useNavigate();

  const onFinish = async (e) => {
    try {
      const request = await fetch(
        process.env.REACT_APP_REGISRATION_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataRegistration),
        }
      );
      const response = await request.json();
      console.log(response);
      if (!response) {
        throw new Error("request error");
      }
      if (response.message) {
        alert(response.message);
      } else {
        alert("Our congratulations, you are registered!");
        navigate("*");
      }
    } catch (error) {
      alert(error.message);
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
              onChange={(e) => setDataRegistration((dataRegistration)=>({...dataRegistration,username: e.target.value}))}
              value={dataRegistration.username}
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
              onChange={(e) => setDataRegistration((dataRegistration)=>({...dataRegistration,email: e.target.value}))}
              value={dataRegistration.email}
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
              onChange={(e) => setDataRegistration((dataRegistration)=>({...dataRegistration,password: e.target.value}))}
              value={dataRegistration.password}
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
              onChange={(e) => setDataRegistration((dataRegistration)=>({...dataRegistration,gender: e.target.value}))}
              value={dataRegistration.gender}
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
              onChange={(e) => setDataRegistration((dataRegistration)=>({...dataRegistration,age: e.target.value}))}
              value={dataRegistration.age}
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
