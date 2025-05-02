import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Navbar from '../shared/Navbar'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllComapnies'

const Companies = () => {

  const navigate = useNavigate();
  useGetAllCompanies();

  
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto justiy-between my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className='w-fit'
            placeholder='Filter by name'
          >
          </Input>
          <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable/>
      </div>
    </div>
  )
}

export default Companies