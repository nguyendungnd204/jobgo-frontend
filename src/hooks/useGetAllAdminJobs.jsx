import { getAllAdminJobs, getAllJobs } from '@/api/job';
import { setAllAdminJobs, setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await getAllAdminJobs();
                console.log(res.data.data);
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.data));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs();
    }, [])
}

export default useGetAllAdminJobs