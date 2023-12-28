import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const token = localStorage.getItem("token")
const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
});

export const handlingError = (error) => {
    if (error.response) {

        if (Array.isArray(error.response.data.errors)) {
            error.response.data.errors.forEach((item) => {
                alert(`${item.param} - ${item.msg}`);
            });
            throw new Error('response have a lot mistackes')
        } else if (error.response.data.message) {
            alert(error.response.data.message);
            throw new Error(error.response.data.message)
        }
    }
};

const postTodo = async (title) => {
    try {
        const response = await instance.post(`/api/todos`, { title });
        return response.data
    }
    catch (error) {
        return error
    }

};
export const fetchAddTodo = createAsyncThunk('tasks/fetchAddTodo', async (title) => {
    const response = await postTodo(title)
    handlingError(response)
    return response
})

const patchStatusTodo = async (id, isCompleted) => {
    try {
        const response = await instance.patch(`/api/todos/${id}/isCompleted`, {
            isCompleted: !isCompleted,
        });
        return response.data[0];
    }
    catch (error) {
        return error
    }
};

export const fetchEditStatusTodo = createAsyncThunk('tasks/fetchEditStatusTodo', async ({ id, isCompleted }) => {
    const response = await patchStatusTodo(id, isCompleted)
    handlingError(response)
    return response
})

const patchTodo = async (id, title) => {
    try {
        const response = await instance.patch(`/api/todos/${id}`, { title });
        return response.data;
    }
    catch (error) {
        return error
    }
};
export const fetchEditTodo = createAsyncThunk('tasks/fetchEditTodo', async ({ id, title }) => {
    const response = await patchTodo(id, title)
    handlingError(response)
    return response
})

const deleteTodo = async (id) => {
    try {
        const response = await instance.delete(`/api/todos/${id}`);
        return response.data;
    }
    catch (error) {
        return error
    }
};
export const fetchDeleteTodo = createAsyncThunk('tasks/fetchDeleteTodo', async (id) => {
    const response = await deleteTodo(id)
    handlingError(response)
    return response
})


const getTasks = async () => {
    try {
        const response = await instance.get(`/api/todos`);
        return response.data;
    }
    catch (error) {
        return error
    }
};
export const fetchLoadTasks = createAsyncThunk('tasks/fetchLoadTasks', async () => {
    const response = await getTasks()
    handlingError(response)
    return response
})

export const fetchAuthorization = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}/api/auth/login`,
            data,
        );
        const token = response.data.token
        localStorage.setItem("token", token);
        return response;
    }
    catch (error) {
        handlingError(error)
    }
};

export const fetchRegistration = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}/api/users/register`,
            data,
        );
        alert("Our congratulations, you are registered!");
    }
    catch (error) {
        handlingError(error)
    }
};


