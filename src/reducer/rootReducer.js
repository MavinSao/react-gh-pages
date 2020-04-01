
import { articleReducer } from './articleReducer'
import { categoryReducer} from './categoryReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    articleR: articleReducer,
    categoryR: categoryReducer
})