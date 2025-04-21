import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Pen } from 'lucide-react'

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto bg-white border boder-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between items-start'>
                    {/* Phần Avatar + Thông tin */}
                    <div className='flex items-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src='https://github.com/shadcn.png' />
                        </Avatar>
                        <div className='text-left'>
                            <h1 className='font-medium text-bold text-xl'>Full Name</h1>
                            <p>Dũng đẹp trai nhất vũ truh hahaa</p>
                        </div>
                    </div>

                    {/* Nút Edit nằm bên phải */}
                    <Button variant='outline'>
                        <Pen className='w-4 h-4' />
                    </Button>
                </div>



            </div>
        </div>

    )
}

export default Profile