import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = false 
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-7xl h-16'>

        <div>
          <h1 className='text-3xl font-bold'>Job<span className='text-[#F83002]'>Go</span></h1>
        </div>

        <div className='flex  items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to='/login'><Button variant='outline'>Login</Button></Link>
                <Link to='/signup'><Button className='bg-[#6A38C2] hover: [#5b30a6]'>Signup</Button></Link>
              </div>
            ) : (
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className='cursor-pointer'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
              <div className='flex gap-4 space-y-2'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
                <div>
                  <h4 className='font-medium'>Nguyen Dung</h4>
                  <p className='text-sm text-muted-foreground'>Dung is the best haaaaaaaaaaa</p>
                </div>
              </div>
              <div className='flex flex-col my-2  text-gray-600'>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <User2/>
                  <Button variant='link'>View Profile</Button>
                </div>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut/>
                  <Button variant='link'>Logout</Button>
                </div>
                
              </div>
            </PopoverContent>
          </Popover>
            )
          }

          
        </div>

      </div>

    </div>
  )
}

export default Navbar