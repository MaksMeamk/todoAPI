import axios from 'axios'
import { useDispatch } from 'react-redux';
import { changeStatusLoad } from '../Redux/slices/taskLoadSlice';
import { sort, editReadyStatus, del, load } from '../Redux/slices/tasksSlice';




const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});

const handlingError = (error) => {
    if (error.response) {
        if (Array.isArray(error.response.data.errors)) {
            error.response.data.errors.forEach((item) => {
                alert(`${item.param} - ${item.msg}`);
            });
        }
        else if (error.response.data.message) {
            alert(error.response.data.message);
        }
    }

}

export const fetchLoadTasks = async (dispatch) => {
    dispatch(changeStatusLoad());
    try {
        const response = await instance.get(`/api/todos`);
        dispatch(load(response));
        dispatch(sort());
        dispatch(changeStatusLoad());
    }
    catch (error) {
        handlingError(error)
    }
}


export const fetchAuthorization = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/api/auth/login`, data);
        console.log(response.token);
        localStorage.setItem("token", response.token);
    }
    catch (error) {
        handlingError(error)
    }
}
export const fetchRegistration = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/api/users/register`, data);
        alert("Our congratulations, you are registered!");
    }
    catch (error) {
        handlingError(error)
    }
}


