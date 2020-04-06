import axios from "axios"
import { baseURL } from "../App"
import { actionType } from "./actionType"

export const fetchArticle = ()=>{
    return (dp) => {
        axios.get(`${baseURL}v1/api/articles?page=1&limit=15`).then(res => {        
            dp({
                type: actionType.fetch_article,
                payLoad: res.data.DATA,
            })
        })
    }
}

export const searchArticle = (title)=> {
    
    return (dp)=>{
        axios.get(`${baseURL}v1/api/articles?title=${title}`).then(res => {
            dp({
                type: actionType.search_article,
                payLoad: res.data.DATA,
            })
        
        })
    }
}

export const deleteArticle = (id) => {
    return (dp) => {
        axios.delete(`${baseURL}v1/api/articles/${id}`).then(res => {
            dp({
                type: actionType.delete_article,
                payLoad: id
            })
        })
    }
}

