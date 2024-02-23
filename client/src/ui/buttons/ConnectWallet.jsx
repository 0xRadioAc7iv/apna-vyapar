import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const ConnectWallet = () => {
  return (
    <div className='flex text-sm items-center pb-2.5 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-2 space-x-4 hover:text-white hover:shadow-md'>
      <div>Connect Wallet</div>
      <div><MdArrowOutward className=''/></div>
    </div>
  )
}

export default ConnectWallet
