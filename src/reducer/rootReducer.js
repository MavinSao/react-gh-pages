
import { articleReducer } from './articleReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    articleR: articleReducer
})