import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState()



    const onFinish = async (e) => {
        try {
            const request = await fetch("https://todo-redev.herokuapp.com/api/users/register",
                {
                    method: "POST",
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        gender,
                        age,
                    }),
                });
            const response = await request.json();
            if (!response) {
                throw new Error('request error');
            }
            if (!response.success) {
                response.errors.forEach(item => {
                    alert(item.msg)
                });
            }

        }
        catch (error) {
            alert(error.message);
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <Form
            name="basic"
            labelCol={{
                span: 5,
                offset: 0
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
            <h1> Registration</h1>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input onChange={(e) => setUsername(e.target.value)}
                    value={username} />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input type='email' onChange={(e) => setEmail(e.target.value)}
                    value={email} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password onChange={(e) => setPassword(e.target.value)}
                    value={password} />
            </Form.Item>
            <Form.Item
                label="Gender"
                name="gender"
                rules={[
                    {
                        required: true,
                        message: 'Please select your gender!',
                    },
                ]}
            >
                <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                    <Radio value={'male'}>Male</Radio>
                    <Radio value={'female'}>Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="Age"
                name="age"
                rules={[
                    {

                        required: true,
                        message: 'Please input your age!',
                    },
                ]}
            >
                <Input type="number" onChange={(e) => setAge(e.target.value)}
                    value={age} />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 1,
                    span: 22,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Registration
                </Button>
            </Form.Item>
        </Form>


    );
};
export default Registration;


