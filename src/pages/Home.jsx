import React, { useEffect } from 'react'

import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/shared/Navbar'
import HeroSection from '@/components/HeroSection'
import CategoryCarousel from '@/components/CategoryCarousel'
import LastestJobs from '@/components/LastestJobs'
import Footer from '@/components/shared/Footer'

const Home = () => {
  useGetAllJobs();
  const navigate = useNavigate();
  const {user} = useSelector(store => store.auth);

  useEffect(
    () => {
      if(user?.role == 'recruiter') {
        navigate("/admin/companies");
      }
    }, []
  )
  
  return (
    <div>
        <Navbar />
        <HeroSection/>
         <CategoryCarousel/>
        <LastestJobs/>
        <Footer/>
    </div>
  )
}

export default Home