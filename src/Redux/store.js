import { legacy_createStore as createStore, combineReducers } from 'redux';
import { autorizationReducer } from './reducers/autorizationReducer'
import { registrationReducer } from './reducers/registrationReducer'

const rootReducer = combineReducers({
    autorization: autorizationReducer,
    registration: registrationReducer
})

const store = createStore(rootReducer)

export default store;