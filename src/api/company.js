const API_URL = `${import.meta.env.VITE_API_END_POINT}/api/v1/company`;
import axios from "axios";

export const registerCompany = async ({companyName}) =>{
    try {
        const res = await axios.post(`${API_URL}/register`, {companyName}, {headers:{
            'Content-Type':'application/json'}, withCredentials:true
        } )

        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}