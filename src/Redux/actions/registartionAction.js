export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_PASSWORD = 'ADD_PASSWORD';
export const ADD_USER_NAME = 'ADD_USER_NAME';
export const ADD_AGE = 'ADD_AGE';
export const ADD_GENDER = 'ADD_GENDER';

export const addEmail = (email) => {
    return {
        type: ADD_EMAIL,
        payload: email
    }

}
export const addPassword = (password) => {
    return {
        type: ADD_PASSWORD,
        payload: password
    }

}
export const addUserName = (userName) => {
    return {
        type: ADD_USER_NAME,
        payload: userName
    }

}
export const addAge = (age) => {
    return {
        type: ADD_AGE,
        payload: age
    }

}
export const addGender = (gender) => {
    return {
        type: ADD_GENDER,
        payload: gender
    }

}