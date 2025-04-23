import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const skills = ["Html", "Css", "Javascript", "React", "NodeJs", "Express", "MongoDB"]

const Profile = () => {
    const isResume = true // Kiểm tra xem có phải là resume hay không
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border boder-gray-200 rounded-2xl my-5 p-8'>
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
                    <Button variant='outline' className='text-right'>
                        <Pen className='w-4 h-4' />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-enter gap3 my-2'>
                        <Mail />
                        <span>ngdung@gmail.com</span>
                    </div>
                    <div className='flex items-enter gap3 my-2'>
                        <Contact />
                        <span>+84 123 456 789</span>
                    </div>
                </div>
                <div className='text-left my-5'>
                    <h1 className='text-md font-bold'>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length != 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>

                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5 text-left'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' href='' className='text-blue-500 w-full hover:underline cursor-pointer'>Dung ne</a> : <span className='text-gray-500'>NA</span>
                    }
                </div>

            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
        </div>

    )
}

export default Profile