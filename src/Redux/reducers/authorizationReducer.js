import { ADD_AUTHORIZATION_DATA } from "../actions/authorizationAction"

const initialState = { email: '', password: '' }

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTHORIZATION_DATA: return { ...state, ...action.payload }
        default: return { ...state }
    }

}