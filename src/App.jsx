import { Form, Input, Button, Select } from "antd";
import { useState } from "react";

function App() {
  const [registration, setRegistration] = useState({
    userName: "",
    email: "",
    password: "",
    dateBirth: "",
    gender: "",
    phoneNumber: "",
  });

  const gender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  const onFinish = () => {
    alert(JSON.stringify(registration));
  };

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
        onFinish={onFinish}
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
          <Input
            value={registration.userName}
            onChange={(e) =>
              setRegistration((registration) => ({
                ...registration,
                userName: e.target.value,
              }))
            }
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
            {
              type: "email",
              message: "Enter a valid email address",
            },
          ]}
        >
          <Input
            value={registration.email}
            type={"email"}
            onChange={(e) =>
              setRegistration((registration) => ({
                ...registration,
                email: e.target.value,
              }))
            }
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
          <Input.Password
            value={registration.password}
            onChange={(e) =>
              setRegistration((registration) => ({
                ...registration,
                password: e.target.value,
              }))
            }
          />
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
                if (!(registration.password === value)) {
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
          <Input
            value={registration.dateBirth}
            type={"date"}
            onChange={(e) =>
              setRegistration((registration) => ({
                ...registration,
                dateBirth: e.target.value,
              }))
            }
          />
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
          <Select
            value={registration.gender}
            options={gender}
            onChange={(e) =>
              setRegistration((registration) => ({
                ...registration,
                gender: e,
              }))
            }
          />
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
          <Input
            value={registration.phoneNumber}
            type={"number"}
            onChange={(e) =>
              setRegistration((registration) => ({
                ...registration,
                phoneNumber: e.target.value,
              }))
            }
          />
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
