import React from 'react'
import { heroNavLinks } from '../constants'
const HeroNavLink = () => {
  return (
    <ul className='p-4 mt-4 flex justify-center items-center gap-8 hover:cursor-pointer'>
        <li className='p-2 bg-gray-200 rounded-md font-bold' >
          Discover
        </li>
        {heroNavLinks.map((nav)=> (
            <li>{nav}</li>
        ))}
    </ul>
  )
}

export default HeroNavLink