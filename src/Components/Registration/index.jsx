import React from "react";
import { Button, Form, Input, Radio, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUserData } from "../../Redux/slices/registrationSlice";
import { fetchRegistration } from "../../Requests/requests";

const Registration = () => {
  const navigate = useNavigate();
  const { username, email, password, age, gender } = useSelector(
    (state) => state.registration,
  );
  const dispatch = useDispatch();

  const onFinish = () => {
    fetchRegistration({ username, email, password, age, gender }).then(() =>
      navigate("*"),
    );
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
              onChange={(e) =>
                dispatch(addUserData({ username: e.target.value }))
              }
              value={username}
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
              onChange={(e) => dispatch(addUserData({ email: e.target.value }))}
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
              onChange={(e) =>
                dispatch(addUserData({ password: e.target.value }))
              }
              value={password}
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
              onChange={(e) =>
                dispatch(addUserData({ gender: e.target.value }))
              }
              value={gender}
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
              onChange={(e) => dispatch(addUserData({ age: e.target.value }))}
              value={age}
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
