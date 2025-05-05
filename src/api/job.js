import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_END_POINT}/api/v1/job`;

export const getAllJobs = async (searchedQuery) => {
    try {
        const res = await axios.get(`${API_URL}/get?keyword=${searchedQuery}`, {withCredentials: true})
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getJobById = async (jobId) => {
    try {
        const res = await axios.get(`${API_URL}/get/${jobId}`, {withCredentials: true})
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getAllAdminJobs = async () => {
    try {
        const res = await axios.get(`${API_URL}/getadminjobs`, {withCredentials: true})
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const postJob = async (data) => {
    try {
        const res = await axios.post(`${API_URL}/create`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })

        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}