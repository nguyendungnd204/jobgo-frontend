const API_URL = `${import.meta.env.VITE_API_END_POINT}/api/v1/company`;
import axios from "axios";

export const registerCompany = async ({companyName}) =>{
    try {
        const res = await axios.post(`${API_URL}/create`, {companyName}, {headers:{
            'Content-Type':'application/json'}, withCredentials:true
        } )

        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const updateCompany = async (companyId, formData) => {
    try {
        const res = await axios.put(`${API_URL}/update/${companyId}`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            },
            withCredentials:true
        })
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getCompanyById = async (companyId) => {
    try {
        const res = await axios.get(`${API_URL}/get/${companyId}`, {
            withCredentials: true
        })

        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}