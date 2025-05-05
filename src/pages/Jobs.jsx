import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Navbar from '@/components/shared/Navbar'
import FilterCard from '@/components/FilterCard'
import Job from '@/components/Job'

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job)
  const [filteredJobs, setFilteredJobs] = useState(allJobs)

  // Log để kiểm tra khi có thay đổi
  useEffect(() => {
    console.log("Current search query:", searchedQuery);
  }, [searchedQuery]);

  useEffect(() => {
    if (searchedQuery) {
      console.log("Filtering with query:", searchedQuery);
      
      const filtered = allJobs.filter((job) => {
        // Lọc theo location
        if (job.location && job.location.toLowerCase() === searchedQuery.toLowerCase()) {
          return true;
        }
        
        // Lọc theo title (chứa industry)
        if (job.title && job.title.toLowerCase().includes(searchedQuery.toLowerCase())) {
          return true;
        }
        
        // Lọc theo description (có thể chứa industry)
        if (job.description && job.description.toLowerCase().includes(searchedQuery.toLowerCase())) {
          return true;
        }
        
        return false;
      });
      
      console.log("Filtered jobs:", filtered);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="flex gap-6">
          {/* Filter Card Section */}
          <div className="w-1/5">
            <FilterCard />
          </div>

          {/* Job List Section */}
          <div className="w-4/5">
            {filteredJobs.length <= 0 ? (
              <span>Job not found</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <motion.div key={job?._id}
                  initial={{opacity:0, x:100}}
                  animate={{opacity:1, x:0}}
                  exit={{opacity:0, x:-100}}
                  transition={{duration:0.3}}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs