import React from "react";
import { Button, Form, Input } from "antd";
import { useState } from "react";

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
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
            console.log(response)
            if (!response) {
                throw new Error('request error');
            }



        }
        catch (error) {
            console.log(error.message);

        }


    }



    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                placeholder="Input your name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <input
                type="text"
                placeholder="Input your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                placeholder="Input password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} checked={gender === 'male'} /> Male
            <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} checked={gender === 'female'} /> Female
            <input
                type="number"
                placeholder="Input your age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />
            <button type="submit">Registration</button>
        </form>
    );
};
export default Registration;


