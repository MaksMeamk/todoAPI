import React from "react";
import { Button, Form, Input, Radio, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addEmail, addGender, addPassword, addUserName, addAge } from "../../Redux/actions/registartionAction";

const Registration = () => {
  const navigate = useNavigate();
  const { userName, email, password, age, gender } = useSelector(state => state.registaration)
  const dispatch = useDispatch();

  const onFinish = async () => {
    try {
      const request = await fetch(
        process.env.REACT_APP_REGISRATION_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userName, email, password, age, gender }),
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
              onChange={(e) => dispatch(addUserName(e.target.value))}
              value={userName}
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
              onChange={(e) => dispatch(addEmail(e.target.value))}
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
              onChange={(e) => dispatch(addPassword(e.target.value))}
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
              onChange={(e) => dispatch(addGender(e.target.value))}
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
              onChange={(e) => dispatch(addAge(e.target.value))}
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
