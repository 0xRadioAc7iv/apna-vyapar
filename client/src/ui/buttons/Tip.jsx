import React from 'react'
import { FiDollarSign } from "react-icons/fi";

const Tip = () => {
  return (
    <button className='items-center px-6 py-4 bg-neutral-800 rounded-[10px] border border-stone-950 justify-center gap-1.5 inline-flex c-400 text-base text-white/50 uppercase font-bold'>
      <div><FiDollarSign /></div>
      <div>Tip Project</div>
    </button>
  )
}

export default Tip
