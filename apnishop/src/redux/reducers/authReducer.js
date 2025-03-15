import { LOGIN_FETCH_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";
import Cookies from 'js-cookie';

const initialState = {
    user: null || JSON.parse(localStorage.getItem("apni_user")),
    loading:false,
    error:null,
    api_token: null || Cookies.get("apni_user")
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_FETCH_START:
            return {
                ...state,
                loading:false
            }
        
        case LOGIN_SUCCESS:
            const {api_token, user} = action.payload
            localStorage.setItem("apni_user",JSON.stringify(user))
            Cookies.set("apni_user", api_token)
            return {
                user,
                api_token,
                loading:false,
                error:null
            }

        case LOGIN_FAILURE:
            localStorage.removeItem('apni_user')
            Cookies.remove('apni_user')
            return {
                user:null,
                api_token:null,
                ...state,
                error:action.payload,   
            }

        case LOGOUT:
            localStorage.removeItem("apni_user")
            Cookies.remove('apni_user')
            return {
                user:null,
                api_token:null,
                loading:false,
                error:null
            }

        default: 
            return state
    }
}

export default authReducer