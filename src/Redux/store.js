import { legacy_createStore as createStore, combineReducers } from 'redux';
import { autorizationReducer } from './reducers/autorizationReducer'

const rootReducer = combineReducers({
    autorization: autorizationReducer
})

const store = createStore(rootReducer)

export { store };