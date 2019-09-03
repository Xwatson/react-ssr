import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'

import homeReducer from './home'


const reducer = combineReducers({
    home: homeReducer
})

export default (initialState = {}) => {
    return createStore(reducer, initialState, applyMiddleware(thunk))
}