import { actionType } from "../actions/actionType"

const initState = {
    articles : []
}



export const articleReducer = (state = initState, action) => {  
    
    
    switch(action.type){

        case actionType.fetch_article: 
            return {...state, articles :action.payLoad}
        case actionType.search_article : 
            return {...state, articles : action.payLoad}
        case actionType.delete_article : 
            return {...state, articles : state.articles.filter(article => article.ID !== action.payLoad)}
        default : return state
    }
    
}