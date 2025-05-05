import React, { useEffect, useState } from 'react'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'
import Navbar from '@/components/shared/Navbar'
import AdminJobsTable from '@/components/AdminJobsTable'

const JobsAdmin = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input])

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto justiy-between my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className='w-fit'
            placeholder='Filter by name, role'
            onChange={(e) => setInput(e.target.value)}
          >
          </Input>
          <Button onClick={() => navigate("/admin/jobs/create")}>New Job</Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default JobsAdmin