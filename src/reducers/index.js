import {combineReducers} from 'redux'
import users from './users'
import authUser from './authUser'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    users,
    authUser,
    loadingBar: loadingBarReducer
})