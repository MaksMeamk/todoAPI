import React from "react";
import { Button, Form, Input } from "antd";
import { useState } from "react";

const Regisration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState()
    let handleSubmit;
    try {
        handleSubmit = async (e) => {
            e.preventDefault();
            const request = await fetch("https://todo-redev.herokuapp.com/api/users/register", {
                method: "POST",
                headers: "application/json",
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    gender,
                    age,
                }),
            });
            if (request) {
                const response = request.json();
                console.log(response)
            }
            else {
                new Error('request error')
            }

        }
    }
    catch (error) {
        console.log(error);
    }

    return (
        <form onSubmit={() => handleSubmit()}>
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
export default Regisration;


