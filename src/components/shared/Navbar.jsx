import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-7xl h-16'>

        <div>
            <h1 className='text-3xl font-bold'>Job<span className='text-[#F83002]'>Go</span></h1>
        </div>

        <div>
            <ul className='flex font-medium items-center gap-5'>
                <li>Home</li>
                <li>Jobs</li>
                <li>Browse</li>
            </ul>
        </div>

        </div>
        
    </div>
  )
}

export default Navbar