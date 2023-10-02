import { Form, Input, Button, Select } from "antd";
import { useState } from "react";

function App() {
  const [pass, setPass] = useState("");
  const gender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  return (
    <div className="App">
      <Form
        name="basic"
        labelCol={{
          span: 8,
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
        onFinish={console.log("Good finish")}
        onFinishFailed={console.log("Error")}
      >
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Enter a valid email address",
            },
          ]}
        >
          <Input type={"email"} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 6, message: "Min length - 6 symbols" },
            {
              validator: (rule, value, callback) => {
                if (!/[A-ZА-Я]/.test(value)) {
                  callback(
                    "The field must contain at least one capital letter",
                  );
                } else {
                  callback();
                }
              },
            },
          ]}
        >
          <Input.Password onChange={(e) => setPass(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Сonfirm password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your confirm password!",
            },
            {
              validator: (rule, value, callback) => {
                if (!(pass === value)) {
                  callback("Password fields must be identical");
                } else {
                  callback();
                }
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: "Please select your date of birth!",
            },
          ]}
        >
          <Input type={"date"} />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please select your gender",
            },
          ]}
        >
          <Select options={gender} />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number",
            },
          ]}
        >
          <Input type={"number"} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Registration
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
