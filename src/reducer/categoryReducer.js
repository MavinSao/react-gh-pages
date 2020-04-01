import { actionType } from "../actions/actionType"

const initState = {
    categories : []
}

export const categoryReducer = (state = initState, action) => {
    switch(action.type){
        case actionType.fetch_category : 
             return {...state,categories: action.payLoad}
        default : return state     
    }
}