import { combineReducers } from 'redux'
import {list} from './list'
import {options} from './options'

export default combineReducers({
    List: list,
    Spam: options
})