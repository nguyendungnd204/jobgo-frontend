import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import { getApplicants } from '@/api/application'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants} = useSelector(store => store.application)

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await getApplicants(params.id);
                console.log(res.data)
                if(res.data.success){
                    dispatch(setAllApplicants(res.data.data));
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllApplicants();
    }, [])
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-bold text-lg'>Applicants {applicants?.applications?.length}</h1>
            <ApplicantsTable/>
        </div>
    </div>
  )
}

export default Applicants