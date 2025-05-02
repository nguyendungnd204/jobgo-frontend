import { getCompanies, getCompanyById } from '@/api/company';
import { getAllJobs } from '@/api/job';
import { setCompanies, setSingleCompany } from '@/redux/companySlice';
import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await getCompanies();
                console.log(res.data.data)
                if(res.data.success){
                    dispatch(setCompanies(res.data.data))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    },[])
}

export default useGetAllCompanies