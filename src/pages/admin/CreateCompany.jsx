import React, { useState } from 'react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { registerCompany } from '@/api/company'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import Navbar from '@/components/shared/Navbar'

const CreateCompany = () => {

    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
       try {
        const res = await registerCompany({companyName});
        console.log(companyName)
        if(res.data.success){
            dispatch(setSingleCompany(res.data.data))
            toast.success(res.data.message);
            const companyId = res?.data?.data?._id;
            navigate(`/admin/companies/${companyId}`);
        }
       } catch (error) {
            console.log(error);
       }
    }

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your company? you can change it later</p>
                </div>
                <div className=''>
                <Label className=''>Company Name</Label>
                <Input
                    type="text"
                    className='my-2'
                    placeholder="JobGo, Google etc."
                    onChange={(e) => setCompanyName(e.target.value)}
                >
                </Input>
                </div>
                
                <div className='flex items-center gap-2 my-10'>
                <Button variant='outline' onClick={() => navigate('/admin/companies')}>Cancer</Button>
                <Button onClick={registerNewCompany}>Continue</Button>
                </div>
                
            </div>
        </div>
    )
}

export default CreateCompany