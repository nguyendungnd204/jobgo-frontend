import { getAllAppliedJobs } from '@/api/application';
import { getCompanyById } from '@/api/company';
import { setSingleCompany } from '@/redux/companySlice';
import { setallAppliedJobs } from '@/redux/jobSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAppliedJobs = (companyId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await getAllAppliedJobs();
                console.log(res.data.data)
                if(res.data.success){
                    dispatch(setallAppliedJobs(res.data.data))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    },[dispatch])
}

export default useGetAppliedJobs