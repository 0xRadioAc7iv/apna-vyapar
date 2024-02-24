import React from 'react'
import background from "../../assets/card-background.svg"

const Features = () => {
  return (
    <div>
      <div className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Features
      </div>
      <div className='flex flex-col gap-4 mt-6'>
        <div className='flex items-center gap-4'>
          <div className='w-[600px] h-[250px] p-4 bg-[#0F0F0F] rounded-xl flex items-end bg-gradient-to-r from-green-500 to-green-700'>
            <div className='flex flex-col'>
              <div className="text-white text-[32px] font-extrabold">Quadratic Funding</div>
              <div className="w-[551px] text-white text-md font-normal">Quadratic Funding amplifies community support, to provide significant aid to local businesses</div>
            </div>
          </div>
          <div className='w-[300px] h-[250px] bg-[#0F0F0F] flex items-end rounded-xl p-4 bg-gradient-to-r from-green-500 to-green-700'>
            <div className='flex flex-col'>
              <div className="text-white text-[32px] font-extrabold">Precise Statistics</div>
              <div className="text-white text-md font-normal">Well researched data to kickstart your local businesses</div>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-[300px] h-[250px] bg-[#0F0F0F] flex items-end rounded-xl p-4 bg-gradient-to-r from-green-500 to-green-700'>
          <div className='flex flex-col'>
              <div className="text-white text-[32px] font-extrabold">Marketing</div>
              <div className="text-white text-md font-normal">A one stop solution for all your Marketing Issues</div>
            </div>
          </div>
          <div className='w-[600px] h-[250px] p-4 bg-[#0F0F0F] rounded-xl flex items-end bg-gradient-to-r from-green-500 to-green-700'>
            <div className='flex flex-col items-start'>
              <div className="text-white text-[32px] font-extrabold">Machine Learning</div>
              <div className="w-[551px] text-white text-md font-normal">Uses ML Algorithms to Calculate Sustainability Scores to provide better understanding about the Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
