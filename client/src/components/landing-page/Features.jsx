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
          <div className='w-[600px] h-[250px] p-4 bg-[#0F0F0F] rounded-xl flex items-end' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div className='flex flex-col'>
              <div className="text-white text-[32px] font-extrabold">Product Sustainability </div>
              <div className="w-[551px] text-white text-md font-normal">Environmentally and socially responsible product design and production.</div>
            </div>
          </div>
          <div className='w-[300px] h-[250px] bg-[#0F0F0F] rounded-xl p-4'>
            <div className="text-white text-[32px] font-extrabold">Precise Statistics</div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-[300px] h-[250px] bg-[#0F0F0F] rounded-xl p-4'>
            <div className="text-white text-[32px] font-extrabold">Marketing</div>
          </div>
          <div className='w-[600px] h-[250px] p-4 bg-[#0F0F0F] rounded-xl flex justify-end items-end' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div className='flex flex-col items-start'>
              <div className="text-white text-[32px] font-extrabold">Decentralised Finance</div>
              <div className="w-[551px] text-white text-md font-normal">Empowering the power of Quadratic Funding for creating a more secured way of funding.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
