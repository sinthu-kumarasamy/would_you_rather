import {combineReducers} from 'redux'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    users,
    loadingBar: loadingBarReducer
})