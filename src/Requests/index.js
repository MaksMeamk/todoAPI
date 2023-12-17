import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
    },
});

export const handlingError = (error) => {
    if (error.response) {
        if (Array.isArray(error.response.data.errors)) {
            error.response.data.errors.forEach((item) => {
                alert(`${item.param} - ${item.msg}`);
            });
        } else if (error.response.data.message) {
            alert(error.response.data.message);
        }
    }
};

const postTodo = async (title) => {
    const response = await instance.post(`/api/todos`, { title });
    return response

};
export const fetchAddTodo = createAsyncThunk('tasks/fetchAddTodo', async (title) => {
    const response = await postTodo(title)
    return response
})

const patchStatusTodo = async (id, isCompleted) => {
    const response = await instance.patch(`/api/todos/${id}/isCompleted`, {
        isCompleted: !isCompleted,
    });
    return response;
};

export const fetchEditStatusTodo = createAsyncThunk('tasks/fetchEditStatusTodo', async (id, isCompleted) => {
    const response = await patchStatusTodo(id, isCompleted)
    return response
})

const patchTodo = async (id, title) => {
    const response = await instance.patch(`/api/todos/${id}`, { title });
    return response;
};
export const fetchEditTodo = createAsyncThunk('tasks/fetchEditTodo', async (id, title) => {
    const response = await patchTodo(id, title)
    return response
})

const deleteTodo = async (id) => {
    const response = await instance.delete(`/api/todos/${id}`);
    return response;
};
export const fetchDeleteTodo = createAsyncThunk('tasks/fetchDeleteTodo', async (id) => {
    const response = await deleteTodo(id)
    return response
})


const getTasks = async () => {
    const response = await instance.get(`/api/todos`);
    return response;
};
export const fetchLoadTasks = createAsyncThunk('tasks/fetchLoadTasks', async () => {
    const response = await getTasks()
    return response
})

const postAuthorization = async (data) => {
    const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/auth/login`,
        data,
    );
    localStorage.setItem("token", response.data.token);
    return response;
};

export const fetchAuthorization = createAsyncThunk('tasks/fetchAuthorization', async (data) => {
    const response = await postAuthorization(data)
    return response
})

const postRegistration = async (data) => {
    const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/users/register`,
        data,
    );
    alert("Our congratulations, you are registered!");
    return response;
};
export const fetchRegistration = createAsyncThunk('tasks/fetchRegistration', async (data) => {
    const response = await postRegistration(data)
    return response
})
