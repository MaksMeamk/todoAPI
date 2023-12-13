import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
    },
});

const handlingError = (error) => {
    if (error.response) {
        if (Array.isArray(error.response.data.errors)) {
            error.response.data.errors.forEach((item) => {
                alert(`${item.param} - ${item.msg}`);
            });
        } else if (error.response.data.message) {
            alert(error.response.data.message);
        }
    }
    console.log(error);



};
export const fetchAddTodo = async (title) => {
    try {
        const response = await instance.post(`/api/todos`, { title });
        return response
    } catch (error) {
        handlingError(error);
    }
};

export const fetchEditStatusTodo = async (id, isCompleted) => {
    try {
        const response = await instance.patch(`/api/todos/${id}/isCompleted`, {
            isCompleted: !isCompleted,
        });
        return response;
    } catch (error) {
        handlingError(error);
    }
};

export const fetchEditTodo = async (id, title) => {
    try {
        const response = await instance.patch(`/api/todos/${id}`, { title });
        return response;
    } catch (error) {
        handlingError(error);
    }
};

export const fetchDeleteTodo = async (id) => {
    try {
        const response = await instance.delete(`/api/todos/${id}`);
        return response;
    } catch (error) {
        handlingError(error);
    }
};

export const fetchLoadTasks = async () => {
    try {
        const response = await instance.get(`/api/todos`);
        return response;
    } catch (error) {
        handlingError(error);
    }
};

export const fetchAuthorization = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}/api/auth/login`,
            data,
        );
        localStorage.setItem("token", response.data.token);
        return response;
    } catch (error) {
        handlingError(error);
    }
};
export const fetchRegistration = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}/api/users/register`,
            data,
        );
        alert("Our congratulations, you are registered!");
        return response;
    } catch (error) {
        handlingError(error);
    }
};