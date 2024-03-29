import axios from "axios";
import {setUser} from "../reducer/userReducer";

export const registration = async (email, password) =>{
    try{
        const response = await axios.post("http://localhost:5000/api/auth/registration", {
            email,
            password
        })
        alert(response.data.massage)

    } catch (e) {
        alert(e.response.data.massage)
    }
}

export const login = (email, password) => {
    return async dispatch =>{
        try{
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token);
            console.log(response.data);

        } catch (e) {
            alert(e.response.data.massage)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            if(!localStorage.getItem('token')) return "No token"
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}