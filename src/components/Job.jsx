import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import logo from '../assets/logoCompany.jpg'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate();

  return (
    <div className='w-full max-w-xs p-5 rounded-xl shadow-md bg-white border border-gray-100 text-left'>
      <div className='flex items-center justify-between text-sm text-gray-500'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant='outline' className='rounded-full' size='icon'>
          <Bookmark className='w-4 h-4' />
        </Button>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Avatar className='w-12 h-12'>
          <AvatarImage src={logo} alt='Company Logo' />
        </Avatar>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className=' text-sm text-gray-500'>{job?.location}</p>
        </div>
      </div>

      <div>
          <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
          <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
     <div className="flex flex-wrap items-center gap-3">
             <Badge className="text-blue-700 font-semibold" variant="ghost">{job?.position}</Badge>
             <Badge className="text-[#F83002] font-semibold" variant="ghost">{job?.jobType}</Badge>
             <Badge className="text-[#7209b7] font-semibold" variant="ghost">{job?.salary}</Badge>
      </div>
           <div className='flex items-center gap-4 mt-4'>
            <Button onClick={() => navigate(`/jobs/${job?._id}`)} variant='outline'>Details</Button>
            <Button className='bg-[#7209b7]'>Save For Later</Button>
           </div>
    </div>
  )
}

export default Job
