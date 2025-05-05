import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { updateStatus } from '@/api/application'
import { toast } from 'sonner'

const shortListingStatus = ["Accepted", "Rejected"]
const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);

    const statusHandler = async (id, statusUpdate) => {
        console.log("Updating status for", id, "to", statusUpdate);
        try {
            const res = await updateStatus(id, statusUpdate);
            
            console.log(res.data);
            if(res.data.status){
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to update status");
        }
    }

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied user</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell className='text-left'>{item?.applicant?.fullname}</TableCell>
                                <TableCell className='text-left'>{item?.applicant?.email}</TableCell>
                                <TableCell className='text-left'>{item?.applicant?.phoneNumber}</TableCell>
                                <TableCell className='text-left text-blue-600 cursor-pointer'>
                                    {item.applicant?.profile?.resume ? <a href={item?.applicant?.profile?.resume}>{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>}
                                </TableCell>
                                <TableCell className='text-left'>{item?.applicant?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className='text-right curor-pointer'>
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            {
                                                shortListingStatus.map((status, index) => {
                                                    return (
                                                        <div key={index} onClick={() => statusHandler(item?._id, status.toLowerCase())} className='flex w-fit items-center my-2 cursor-pointer'>
                                                            <span>{status}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>

                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicantsTable