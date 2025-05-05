import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Avatar, AvatarImage } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    const companyState = useSelector(store => store.company);
    const {searchCompanyByText} = useSelector(store => store.company);
    const companies = companyState?.companies || [];
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.length >= 0 && companies.filter((company) =>{
            if(!searchCompanyByText){
                return true;
            }
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
        });
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText])


    return (
        <div>
            <Table>
                <TableCaption>List of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {
                        companies.length <= 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">You haven't registered any company</TableCell>
                            </TableRow>
                        ) : (
                            filterCompany.map((company) => (
                                <TableRow key={company._id}>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={company.logo} />
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className='text-left'>{company.name}</TableCell>
                                    <TableCell className='text-left'>
                                        {company.createdAt ? company.createdAt.split("T")[0] : ""}
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <Popover className='w-32px'>
                                            <PopoverTrigger className='cursor-pointer'><MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className='w-32px'>
                                                <div onClick={() => navigate(`/admin/companies/${company._id}`)} className=' w-fit flex items-center gap-2 w-fit cursor-pointer'>
                                                    <Edit2 className='w-4' />
                                                    <span>Edit</span>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))
                        )
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable