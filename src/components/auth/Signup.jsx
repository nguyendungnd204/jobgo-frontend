import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label className='mb-2'>Full Name</Label>
                        <Input type="text" placeholder='Name'></Input>
                    </div>
                    <div className='my-5'>
                        <Label className='mb-2'>Email</Label>
                        <Input type="email" placeholder='dung@gmail.com'></Input>
                    </div>
                    <div className='my-2'>
                        <Label className='mb-2'>Phone Number</Label>
                        <Input type="text" placeholder='01234567890'></Input>
                    </div>
                    <div className='my-5'>
                        <Label className='mb-2'>Password</Label>
                        <Input type="password" placeholder=''></Input>
                    </div>
                    <div className='flex items-center justify-between my-5'>
                        <RadioGroup className='flex items-center gap-6'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="r1"
                                    type='radio'
                                    name='role'
                                    value='jobseeker'
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r1" className="whitespace-nowrap">Job Seeker</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="r2"
                                    type='radio'
                                    name='role'
                                    value='recruiter'
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup