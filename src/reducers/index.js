import {combineReducers} from 'redux'
import users from './users'
import authUser from './authUser'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    users,
    questions,
    authUser,
    loadingBar: loadingBarReducer
})