import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LastestJobs from './LastestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
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