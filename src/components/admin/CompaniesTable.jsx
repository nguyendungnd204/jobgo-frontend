import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import logo from '../../assets/logoCompany.jpg'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>List of your recent registered companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead  className='text-right'>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>
                    <Avatar>
                        <AvatarImage src={logo}/>
                    </Avatar>
                </TableCell>
                <TableCell className='text-left'>Company Name</TableCell>
                <TableCell className='text-left'>30-4-1975</TableCell>
                <TableCell className='text-right '>
                    <Popover>
                        <PopoverTrigger className='cursor-pointer'><MoreHorizontal/></PopoverTrigger>
                        <PopoverContent className='w-32px'>
                            <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                <Edit2 className='w-4'/>
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable