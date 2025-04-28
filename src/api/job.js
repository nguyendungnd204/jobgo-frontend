import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_END_POINT}/api/v1/job`;

export const getAllJobs = async () => {
    try {
        const res = await axios.get(`${API_URL}/get`, {withCredentials: true})
        return res;
    } catch (error) {
        console.log(error);
    }
}