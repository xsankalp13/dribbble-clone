import React from 'react'
import { Dribbble } from '../assets';

const Footer = () => {
  return (
    <div className='bg-gray-50 pb-20'>
      <footer className='mt-10 w-[90%] mx-auto'>
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'>
          <div className='flex flex-col items-center py-6'>
            <img src={Dribbble} className='h-[25px] w-[100px]'/>
            <p className='w-[50%] mt-5'>
            Dribbble is the world's leading community for creatives to share, grow, and get hired.
            </p>
          </div>
          <div className='flex flex-col items-center py-6'>
            <ul>
            <li className='font-bold'>For designers</li>
            <li>Go Pro!</li>
            <li>Overtime podcast</li>
            <li>Design blog</li>
            </ul>
          </div>
          <div className='flex flex-col items-center py-6'>
            <ul>
            <li className='font-bold'>Hire designers</li>
            <li>Post a job opening</li>
            <li>Search for designers</li>
            <li>Brands</li>
            <li>Advertise with us</li>
            </ul>
          </div>
          <div className='flex flex-col items-center py-6'>
            <ul>
            <li className='font-bold'>Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
            <li>API</li>
            <li>Testomonials</li>
            <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='w-[90%] bg-slate-700 h-[1px] mx-auto'></div>
      <div className='flex justify-center w-[100%] mt-10'>
        Created With ❤️ by ' <span className='text-pink-500'><a href='https://sankalpsalve.me' target='_blank'> Sankalp'</a></span>
      </div>
    </div>
  )
}

export default Footer;