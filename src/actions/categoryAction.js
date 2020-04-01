import Axios from "axios"
import { baseURL } from "../App"
import { actionType } from "./actionType"


export const fetchCategory = () => {
    return (dp)=>{
        Axios.get(`${baseURL}v1/api/categories`).then(res=>{
            dp({
                type: actionType.fetch_category,
                payLoad: res.data.DATA
            }) 
        })
    }
}
