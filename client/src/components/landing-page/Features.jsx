import React from 'react'

const Features = () => {
  return (
    <div>
      <div className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Features
      </div>
      <div className='flex flex-col gap-4 mt-6'>
        <div className='flex items-center gap-4'>
          <div className='w-[600px] h-[250px] bg-[#0F0F0F] rounded-xl'>1</div>
          <div className='w-[300px] h-[250px] bg-[#0F0F0F] rounded-xl'>2</div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-[300px] h-[250px] bg-[#0F0F0F] rounded-xl'>2</div>
          <div className='w-[600px] h-[250px] bg-[#0F0F0F] rounded-xl'>1</div>
        </div>
      </div>
    </div>
  )
}

export default Features
