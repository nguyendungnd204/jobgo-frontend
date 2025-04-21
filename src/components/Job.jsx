import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import logo from '../assets/logoCompany.jpg'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='w-full max-w-xs p-5 rounded-xl shadow-md bg-white border border-gray-100'>
      <div className='flex items-center justify-between text-sm text-gray-500'>
        <p>2 days ago</p>
        <Button variant='outline' className='rounded-full' size='icon'>
          <Bookmark className='w-4 h-4' />
        </Button>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Avatar className='w-12 h-12'>
          <AvatarImage src={logo} alt='Company Logo' />
        </Avatar>
        <div>
          <h2 className='text-lg font-semibold text-black'>Company Name</h2>
          <p className='text-gray-500'>Viet Nam</p>
        </div>
      </div>

      <div>
          <h1 className='font-bold text-lg my-2'>Title</h1>
          <p className='text-sm text-gray-600'>aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
     <div className="flex flex-wrap items-center gap-3">
             <Badge className="text-blue-700 font-semibold" variant="ghost">12 Positions</Badge>
             <Badge className="text-[#F83002] font-semibold" variant="ghost">Part Time</Badge>
             <Badge className="text-[#7209b7] font-semibold" variant="ghost">24LPA</Badge>
           </div>
           <div className='flex items-center gap-4 mt-4'>
            <Button variant='outline'>Details</Button>
            <Button className='bg-[#7209b7]'>Save For Later</Button>
           </div>
    </div>
  )
}

export default Job
