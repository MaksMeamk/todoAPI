export const ADD_AUTHORIZATION_DATA = 'ADD_AUTHORIZATION_DATA';

export const addDataAthorization = (authorizationData) => {
    return {
        type: ADD_AUTHORIZATION_DATA,
        payload: authorizationData
    }

}