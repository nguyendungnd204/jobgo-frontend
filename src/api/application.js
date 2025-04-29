const API_URL = `${import.meta.env.VITE_API_END_POINT}/api/v1/application`;
import axios from "axios";

export const getApplycantJob = async (jobId) => {
    try {
        const res = await axios.get(`${API_URL}/apply/${jobId}`, {withCredentials:true});
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}