import React, { useEffect, useState } from 'react'
import { register } from '@/api/auth'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import Navbar from '@/components/shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { RadioGroup } from '@radix-ui/react-radio-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        role: "",
        file: ""
    });
    const [formError, setFormError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const navigate = useNavigate();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const errorHandler = () => {
        let InputError = {
            email: "",
            password: "",
            confirmPassword: "",
        };

        let hasError = false;

        if (!input.email) {
            InputError.email = "Email is required";
            hasError = true;
        }

        if (!input.password) {
            InputError.password = "Password is required";
            hasError = true;
        }

        if (input.password !== input.confirmPassword) {
            InputError.confirmPassword = "Passwords do not match";
            hasError = true;
        }

        if (hasError) {
            setFormError(InputError);
            return;
        }

        setFormError(InputError); // Clear errors
    }

    const { loading, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        errorHandler();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await register(formData);
            if (res.data.success) {
                navigate("/login");
                toast.success("Registration successful");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }

    }

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    })
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10 text-left'>
                    <h1 className='font-bold text-xl mb-5 text-center'>Sign Up</h1>
                    <div className='my-2'>
                        <Label className='mb-2'>Full Name</Label>
                        <Input value={input.fullname} name='fullname' onChange={changeEventHandler} type="text" placeholder='Name'></Input>
                    </div>
                    <div className='my-5'>
                        <Label className='mb-2'>Email</Label>
                        <Input value={input.email} name='email' onChange={changeEventHandler} type="email" placeholder='dung@gmail.com'></Input>
                        <Label className='text-red-500'>{formError.email}</Label>
                    </div>
                    <div className='my-2'>
                        <Label className='mb-2'>Phone Number</Label>
                        <Input value={input.phoneNumber} name='phoneNumber' onChange={changeEventHandler} type="text" placeholder='01234567890'></Input>
                    </div>
                    <div className='my-5'>
                        <Label className='mb-2'>Password</Label>
                        <Input value={input.password} name='password' onChange={changeEventHandler} type="password" placeholder='Enter Password'></Input>
                        <Label className='text-red-500'>{formError.password}</Label>
                    </div>
                    <div className='my-5'>
                        <Label className='mb-2'>Confirm Password</Label>
                        <Input value={input.confirmPassword} name='confirmPassword' onChange={changeEventHandler} type="password" placeholder='Enter Confirm Password'></Input>
                        <Label className='text-red-500'>{formError.confirmPassword}</Label>
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
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type='file'
                                onChange={changeFileHandler}
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className='w-full my-4'> <Loader2 className='mr-2 w-4 animate-spin' /> Please wait </Button> : <Button type='submit' className='w-full my-4 cursor-pointer'>Signup</Button>
                    }
                    <span>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></span>
                </form>
            </div>

        </div>
    )
}

export default Signup