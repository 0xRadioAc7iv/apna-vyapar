import React from 'react'
import { LuLeaf } from "react-icons/lu";

const Services = () => {
  return (
    <div>
      <div className="mt-8 mb-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Services
      </div>
      <div className='border-t border-b border-zinc-800 p-10'>
        <div className='flex items-center gap-28'>
        <div className='flex flex-col gap-20'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                    <div>
                        <LuLeaf className='text-2xl font-bold'/>
                    </div>
                    <div className='font-bold text-2xl'>
                        Sustainability
                    </div>
                </div>
                <div className="text-white text-xs font-normal">A simple way for you and your clients to <br/>buy and sell products</div>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                    <div>
                        <LuLeaf className='text-2xl font-bold'/>
                    </div>
                    <div className='font-bold text-2xl'>
                        Growth
                    </div>
                </div>
                <div className="text-white text-xs font-normal">Community-driven growth thrives on shared goals,<br /> collective effort, and continuous collaboration.</div>
            </div>
        </div>
        <div className='flex flex-col gap-20'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                    <div>
                        <LuLeaf className='text-2xl font-bold'/>
                    </div>
                    <div className='font-bold text-2xl'>
                        Community Driven
                    </div>
                </div>
                <div className="text-white text-xs font-normal">Community-driven efforts unite individuals,<br /> fostering collaboration and inclusivity for a shared future.</div>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                    <div>
                        <LuLeaf className='text-2xl font-bold'/>
                    </div>
                    <div className='font-bold text-2xl'>
                        Inclusive
                    </div>
                </div>
                <div className="text-white text-xs font-normal">Inclusive communities embrace diversity</div>
            </div>
        </div>
        <div className='flex flex-col gap-20'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                    <div>
                        <LuLeaf className='text-2xl font-bold'/>
                    </div>
                    <div className='font-bold text-2xl'>
                        Accessibility
                    </div>
                </div>
                <div className="text-white text-xs font-normal">Prioritizing accessibility ensures that everyone can fully participate <br /> and benefit from community-driven efforts</div>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                    <div>
                        <LuLeaf className='text-2xl font-bold'/>
                    </div>
                    <div className='font-bold text-2xl'>
                        Transparency
                    </div>
                </div>
                <div className="text-white text-xs font-normal">Transparency in community initiatives builds trust, accountability, and fosters open<br /> communication for informed decision-making.</div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
