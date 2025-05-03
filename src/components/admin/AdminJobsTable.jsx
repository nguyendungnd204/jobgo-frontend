import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import logo from '../../assets/logoCompany.jpg'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobsTable = () => {
    const companyState = useSelector(store => store.company);
    const {searchCompanyByText} = useSelector(store => store.company);
    const companies = companyState?.companies || [];

    const {allAdminJobs, searchJobByText} = useSelector(store => store.job)
    const [filterJobs, setFilterJobs] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) =>{
            if(!searchJobByText){
                return true;
            }
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText);
        });
        setFilterJobs(filteredJobs);
    }, [companies, searchJobByText])


    return (
        <div>
            <Table>
                <TableCaption>List of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {
                        filterJobs.length <= 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">You haven't any jobs</TableCell>
                            </TableRow>
                        ) : (
                            filterJobs.map((job) => (
                                <TableRow key={job._id}>
                                    <TableCell className='text-left'>{job?.company?.name}</TableCell>
                                    <TableCell className='text-left'>{job?.title}</TableCell>
                                    <TableCell className='text-left'>
                                        {job?.createdAt ? job.createdAt.split("T")[0] : ""}
                                    </TableCell>
                                    <TableCell className='text-right'>
                                    <Popover>
                                            <PopoverTrigger className='cursor-pointer'><MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className='w-24'>
                                                <div 
                                                    onClick={() => navigate(`/admin/companies/${job._id}`)} 
                                                    className='flex items-center gap-2 cursor-pointer'
                                                >
                                                    <Edit2 className='w-4' />
                                                    <span>Edit</span>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))
                        )
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable