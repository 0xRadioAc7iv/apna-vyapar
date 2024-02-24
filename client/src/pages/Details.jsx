import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg';
import Tip from '../ui/buttons/Tip';
import { CiBookmark } from 'react-icons/ci';
import about from '../assets/static-about-icon.svg';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import UserIdContext from '../context/UserIdContext';
import axios from "axios";

const Details = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { userId } = useContext(UserIdContext);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/api/company/getall/${userId}`)
    .then(response => {
      console.log(response);
    })
  }, [userId]);

  return (
    <div className="p-20 px-10">
      <div className="flex gap-4">
        <div>
          <img src={logo} alt="Company Logo" className="w-20 h-20 rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white text-3xl font-bold">Veg Inc.</div>
          <div className="text-white text-md font-normal">
            Grows Healthy Food
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <Tip />
        <div
          className="w-[51px] h-[51px] bg-stone-950 border-zinc-600 rounded-[10px] flex justify-center items-center border"
        >
          <CiBookmark className="text-3xl" />
        </div>
      </div>
      <div className="w-full h-[0px] border border-neutral-300 border-opacity-30 mt-4"></div>
      <div className='flex items-center gap-8 mt-4'>
        <div
          className={`cursor-pointer border-b-2 text-lg font-semibold ${
            activeTab === 'about' ? 'border-green-500' : 'border-zinc-600'
          }`}
          onClick={() => handleTabClick('about')}
        >
          About
        </div>
        <div
          className={`cursor-pointer border-b-2 text-lg font-semibold ${
            activeTab === 'team' ? 'border-green-500' : 'border-zinc-600'
          }`}
          onClick={() => handleTabClick('team')}
        >
          Team
        </div>
      </div>
        <div className='mt-4'>
        {activeTab === 'about' && (
          <div>
            <div>
              <img src={about} alt="About" className="w-18 h-18" />
            </div>
            <div className="text-white text-2xl font-semibold">About Veg Inc.</div>
            <div className='mt-4 w-1/2'>
            Veg. Inc. is a pioneering force in the plant-based revolution, dedicated to providing sustainable and delicious alternatives to traditional food products. Our mission is to inspire a world where every plate is a conscious choice for both personal well-being and the health of our planet.
            </div>
            <div className="w-full h-[0px] border border-neutral-300 border-opacity-30 mt-8"></div>
            <div className='mt-4'>
            <div className="text-white text-2xl font-semibold">Socials</div>
            <div className='flex items-center gap-3'>
              <button className="w-11 mt-2 flex justify-center items-center h-11 bg-stone-950 rounded-[10px] border border-neutral-600 border-opacity-40">
                <FaGithub className='text-2xl text-green-500' />
              </button>
              <button className="w-11 mt-2 flex justify-center items-center h-11 bg-stone-950 rounded-[10px] border border-neutral-600 border-opacity-40">
                <FaTwitter className='text-2xl text-green-500' />
              </button>
              <button className="w-11 mt-2 flex justify-center items-center h-11 bg-stone-950 rounded-[10px] border border-neutral-600 border-opacity-40">
                <BsInstagram className='text-2xl text-green-500' />
              </button>
            </div>
            </div>
            <div className="w-full h-[0px] border border-neutral-300 border-opacity-30 mt-8"></div>
            <div className="text-white text-2xl font-semibold mt-4">Tags</div>
            <div className='bg-[#252525] flex w-[200px] justify-center rounded-xl mt-2 py-1'>Food and Beverages</div>
          </div>
        )}
        {activeTab === 'team' && (
          <div>
            <div>
              <img src={about} alt="About" className="w-18 h-18" />
            </div>
            <div className="text-white text-2xl font-semibold">Veg Inc. Team</div>
            <div className='flex items-end gap-3 mt-4'>
              <div>
                <img src="https://randomuser.me/api/portraits" className='rounded-full bg-white w-10 h-10 mt-2' />
              </div>
              <div className='flex flex-col'>
                <div className="text-white text-[10px] font-normal">Founder</div>
                <div className="w-[95px] text-white text-sm font-semibold">@vai._shhh27</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
