import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'

const Jobs = () => {
  const {allJobs} = useSelector(store => store.job);

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
            {allJobs.length <= 0 ? (
              <span>Job not found</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {allJobs.map((job) => (
                  <div key={job?._id}>
                      <Job  job={job} />
                  </div>
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
