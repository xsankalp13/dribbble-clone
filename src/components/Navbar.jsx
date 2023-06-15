import React from 'react'
import { Dribbble } from '../assets'
import { BsSearch } from 'react-icons/bs';
import { ProfilePicture } from './';
const Navbar = () => {
  return (
    <div className='w-[96%] mx-auto py-6 flex justify-between items-center'>
        <nav className='flex gap-4'>
          <div className='font-bold hover:cursor-pointer'>Find Talante</div>
          <div className='font-bold hover:cursor-pointer'>For designers</div>
          <div className='font-bold hover:cursor-pointer'>Inspiration</div>
          <div className='font-bold hover:cursor-pointer'>Learn design</div>
          <div className='font-bold text-pink-500 hover:cursor-pointer'>Go Pro</div>
        </nav>
        <img src={Dribbble} className='h-[25px]'/>
        <div className='flex gap-6 items-center'>
          <div className='flex gap-3 items-center rounded-full bg-gray-100 py-3 px-5 w-[280px]'>
            <BsSearch className=' hover:cursor-pointer'/>
            <input type='text' placeholder='Search' className=' outline-none bg-gray-100'/>
          </div>
          <button className={`text-white rounded-md bg-[#0d0c22] hover:bg-[#565564] p-3 hover:cursor-pointer duration-300 md:hidden sm:hidden lg:hidden`}>
            Share Work
           </button>
           <ProfilePicture height="30px"/>
        </div>
    </div>
  )
}

export default Navbar