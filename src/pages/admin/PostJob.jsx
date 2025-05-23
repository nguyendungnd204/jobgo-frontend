import React, { useState } from 'react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useSelector } from 'react-redux'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { postJob } from '@/api/job'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import Navbar from '@/components/shared/Navbar'



const PostJob = () => {
    const [input, setInput] = useState({
        title: '',
        description: '',
        requirements: '',
        salary: '',
        location: '',
        jobType: '',
        experience: '',
        position: 0,
        companyId: ''
    });

    const { companies } = useSelector(store => store.company);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find(
            (company) => company.name.toLowerCase() === value
        );
        if (selectedCompany) {
            setInput({ ...input, companyId: selectedCompany._id });
        }
    };
    

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await postJob(input);

            if(res.data.success){
                toast.success(res.data.message);
                navigate('/admin/jobs')
            }
        } catch (error) {
            toast.error("Failed to post new job");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center min-h-screen'>
                <form onSubmit={submitHandler} className='p-8 w-full max-w-4xl border border-gray-200 shadow-lg rounded-md'>
                    <div> <h1 className='text-xl text-center font-bold my-5'>New Job</h1></div>

                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Label>Title</Label>
                            <Input
                                type='text'
                                name='title'
                                value={input.title}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type='text'
                                name='description'
                                value={input.description}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type='text'
                                name='requirements'
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input
                                type='number'
                                name='salary'
                                value={input.salary}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type='text'
                                name='location'
                                value={input.location}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type='text'
                                name='jobType'
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        <div>
                            <Label>Experience Level</Label>
                            <Input
                                type='number'
                                name='experience'
                                value={input.experience}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        <div>
                            <Label>No of Position</Label>
                            <Input
                                type='number'
                                name='position'
                                value={input.position}
                                onChange={changeEventHandler}
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                            >
                            </Input>
                        </div>
                        {
                            companies.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                companies.map((company) => {
                                                    return (
                                                        <SelectItem value={company?.name?.toLowerCase()}  key={company._id} >{company.name}</SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectGroup>

                                    </SelectContent>
                                </Select>

                            )
                        }
                    </div>
                    {
                        loading ? <Button className='w-full my-4'> <Loader2 className='mr-2 w-4 animate-spin' /> Please wait </Button> : <Button type='submit' className='w-full my-4 cursor-pointer'>Post New Job</Button>

                    }
                    {
                        companies.length == 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>Please register a company first, before posting a jobs</p>
                    }
                </form>
            </div>
        </div>
    )
}

export default PostJob