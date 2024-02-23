import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#0F0F0F] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-10 pl-9 py-2  items-center justify-center space-x-4'>
          <Link
            to="/"
            className={"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"}
          >
            <span className="sm:block text-sm">Home</span>
          </Link>
          <Link
            to="/explore"
            className={"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"}
          >
            <span className="sm:block text-sm">Explore</span>
          </Link>
          <Link
            to="/"
            className={"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"}
          >
            <span className="sm:block text-sm">Sustainables</span>
          </Link>
          <Link
            to="/marketing"
            className={"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"}
          >
            <span className="sm:block text-sm">Marketing</span>
          </Link>
    </div>
  )
}

export default Header
