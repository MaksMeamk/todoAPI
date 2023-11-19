export const ADD_USER_DATA = 'ADD_USER_DATA';

export const addUserData = (userData) => {
    return {
        type: ADD_USER_DATA,
        payload: userData
    }

}