import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { login } from '@/api/auth'
import { Toaster } from '../ui/sonner'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({
      email:"",
      password:"",
      role:"",
    });

    const navigate = useNavigate();
    const changeEventHandler = (e) => {
      setInput({...input, [e.target.name]: e.target.value});
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login(input);
            if (res.data.success) {
                navigate("/");
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
                    <div className='my-5'>
                        <Label className='mb-2'>Email</Label>
                        <Input value={input.email} name='email' onChange={changeEventHandler} type="email"  placeholder='dung@gmail.com' required ></Input>
                    </div>
                    <div className='my-5'>
                        <Label className='mb-2'>Password</Label>
                        <Input value={input.password} name='password' onChange={changeEventHandler} type="password" placeholder='' required></Input>
                    </div>
                    <div className='flex items-center justify-between my-5'>
                        <RadioGroup className='flex items-center gap-6'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="r1"
                                    type='radio'
                                    name='role'
                                    value='jobseeker'
                                    checked={input.role === 'jobseeker'}
                                    onChange={changeEventHandler}
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
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                       
                    </div>
                    <Button type='submit' className='w-full my-4 cursor-pointer'>Login</Button>
                    <span>Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
            
        </div>
    )
}

export default Login