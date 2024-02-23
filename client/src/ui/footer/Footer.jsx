import React from 'react'
import { RxDiscordLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='lg:mt-20 lg:m-6'>
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="logo" className='w-10' />
            </div>
            <div className='flex items-center gap-4'>
                <a href="https://discord.gg/hfMdtxvU"><button><RxDiscordLogo className='w-6 h-6 text-slate-400' /></button></a>
                <a href="https://twitter.com/0rbitco"><button><RiTwitterXLine className='w-6 h-6 text-slate-400' /></button></a>
                <a href="https://github.com/0rbit-co"><button><FaGithub className='w-6 h-6 text-slate-400' /></button></a>
            </div>
        </div>
        <div className='flex justify-center mt-8 text-green-500 text-xs'>
            © 2024 Apna Vyapar.
        </div>
    </div>
  )
}

export default Footer