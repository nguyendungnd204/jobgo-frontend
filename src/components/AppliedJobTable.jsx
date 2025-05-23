import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store => store.job);
  return (
    <div>
        <Table>
            <TableCaption>A List of Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet</span> : allAppliedJobs.map((appliedJob) => (
                        <TableRow key={appliedJob?._id} className='hover:bg-gray-100 cursor-pointer'>
                            <TableCell className='text-left'>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                            <TableCell className='text-left'>{appliedJob.job?.title}</TableCell>
                            <TableCell className='text-left'>{appliedJob.job?.company?.name}</TableCell>
                            <TableCell className='text-right'><Badge className={`${appliedJob?.status === 'rejected' ? 'bg-red-400' : appliedJob === 'pending' ?'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable