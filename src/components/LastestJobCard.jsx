import React from 'react'
import { Badge } from './ui/badge'

const LastestJobCard = ({job}) => {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 cursor-pointer transition hover:shadow-2xl text-left">
      <div className="mb-2">
        <h1 className="font-semibold text-lg text-gray-800">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-base text-gray-700">{job?.title}</h2>
        <p className="font-bold text-lg text-gray-900">{job?.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Badge className="text-blue-700 font-semibold" variant="ghost">{job?.position}</Badge>
        <Badge className="text-[#F83002] font-semibold" variant="ghost">{job?.jobType}</Badge>
        <Badge className="text-[#7209b7] font-semibold" variant="ghost">{job?.salary}$</Badge>
      </div>
    </div>
  )
}

export default LastestJobCard
