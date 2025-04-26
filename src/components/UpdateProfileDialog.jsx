import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useSelector } from 'react-redux'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const {user} = useSelector((state) => state.auth.user);
    const [input, setInput] = useState({
        fullname: user?.name,
    })
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='sm:max-w-[425px]' >
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='name' className='text-right'>Name</Label>
                                <Input
                                    id='name'
                                    name='name'
                                    className='col-span-3'
                                >
                                </Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='email' className='text-right'>Email</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    className='col-span-3'
                                >
                                </Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='number' className='text-right whitespace-nowrap'>Phone Number</Label>
                                <Input
                                    id='number'
                                    name='number'
                                    className='col-span-3'
                                >
                                </Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='bio' className='text-right'>Bio</Label>
                                <Input
                                    id='bio'
                                    name='bio'
                                    className='col-span-3'
                                >
                                </Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='skills' className='text-right'>Skills</Label>
                                <Input
                                    id='skills'
                                    name='skills'
                                    className='col-span-3'
                                >
                                </Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='file' className='text-right'>Resume</Label>
                                <Input
                                    id='file'
                                    name='file'
                                    className='col-span-3'
                                    type='file'
                                    accept='application/pdf'
                                >
                                </Input>
                            </div>
                        </div>
                        <DialogFooter>
                            {
                                 loading? <Button className='w-full my-4'> <Loader2 className='mr-2 w-4 animate-spin' /> Please wait </Button>: <Button type='submit' className='w-full my-4 cursor-pointer'>Update</Button>
                            }
                        </DialogFooter>

                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog