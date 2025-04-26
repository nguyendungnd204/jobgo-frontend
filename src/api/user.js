const API_URL = `${import.meta.env.VITE_API_END_POINT}/api/v1/user`;
import axios from "axios";

export const updateProfile = async (userData) => {
    try{ 
        const res = await axios.post(`${API_URL}/profile/update`, userData,  {
            headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials: true
    })
        if (res.data.success) {
            return res; 
        } else {
            console.log("Error: ", res.data.message); 
        }

    } catch (error) {
        console.log("Error during update:", error);
        throw error;     
    }
}