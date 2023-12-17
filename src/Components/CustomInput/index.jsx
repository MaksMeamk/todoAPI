import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, sort } from "../../Redux/slices/tasksSlice";
import { fetchAddTodo } from "../../Requests/index";


const CustomInput = () => {
  const [title, setTitle] = useState()
  const dispatch = useDispatch()
  const onFinish = () => {
    dispatch(fetchAddTodo(title))
    setTitle('')
  }

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
