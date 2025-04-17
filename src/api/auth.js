const API_URL = `${import.meta.env.VITE_API_END_POINT}/api/v1/user`;
import axios from "axios";

export const register = async (userData) => {
    try{ 
        const res = await axios.post(`${API_URL}/register`, userData,  {
            headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials: true
    })
        if (res.data.success) {
            return res; 
        } else {
            throw new Error("Registration failed"); 
        }

    } catch (error) {
        console.log("Error during registration:", error);
        throw error;     
    }
}

export const login = async (userData) => {
    try{ 
        const res = await axios.post(`${API_URL}/login`, userData,  {
            headers:{
            "Content-Type":"application/json"
        },
        withCredentials: true
    })
        if (res.status === 200) {
            return res; 
        } else {
            throw new Error("Login failed"); 
        }

    } catch (error) {
        console.log("Error: ", error);
        throw error;     
    }
}