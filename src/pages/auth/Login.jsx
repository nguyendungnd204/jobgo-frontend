import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import { setUser } from '@/redux/authSlice'
import Navbar from '@/components/shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { RadioGroup } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login } from '@/api/auth'

const Login = () => {
    const [input, setInput] = useState({
      email:"",
      password:"",
      role:"",
    });

    const {loading, user} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
      setInput({...input, [e.target.name]: e.target.value});
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await login(input);
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Failed to login");

        } finally {
            dispatch(setLoading(false));
        }

    }

    useEffect(() => {
        if(user){
            navigate("/");
        }
    })

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
                    <div className='my-5 text-left'>
                        <Label className='mb-2 '>Email</Label>
                        <Input value={input.email} name='email' onChange={changeEventHandler} type="email"  placeholder='dung@gmail.com' required ></Input>
                    </div>
                    <div className='my-5 text-left'>
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
                    {
                        loading? <Button className='w-full my-4'> <Loader2 className='mr-2 w-4 animate-spin' /> Please wait </Button>: <Button type='submit' className='w-full my-4 cursor-pointer'>Login</Button>

                    }
                    <span>Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
            
        </div>
    )
}

export default Login