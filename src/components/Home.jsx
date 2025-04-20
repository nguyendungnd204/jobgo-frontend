import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection/>
         <CategoryCarousel/>
        {/*<LastestJobs/>
        <Footer/> */}
    </div>
  )
}

export default Home