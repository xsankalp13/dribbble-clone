import React, { useState } from 'react'
import ProfilePicture from './ProfilePicture'
import { GrView } from 'react-icons/gr'
import { AiFillHeart,AiFillFolderAdd } from 'react-icons/ai';

const Card = ({ name,image,likes,views,text }) => {
    const [isHoverd, setHoverd] = useState(false);
    const handleHover = () => {
        setHoverd(true);
      };
    
      const handleLeave = () => {

        setHoverd(false);
   
      };
      if(text.length > 17){
        text = text.slice(0,17) + '...';
      }
  return (
    <div className='max-w-[300px] my-2 mx-auto'>
        <div className={` relative `}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
        
        >
            <img src={image} className={` z-10 max-w-[300px] rounded-md hover:cursor-pointer`}
            />
            <div className={`${isHoverd ? '':'hidden'} duration-300`}>
                <div className={`absolute flex bottom-0 text-white gap-2 z-30 p-2 items-center w-full mx-auto`}>
                    <p className='w-[60%]'>{text}</p>
                    <div className='p-2 bg-white text-gray-500 rounded-md'>
                        <AiFillFolderAdd className=' hover:text-pink-500 scale-125 duration-300 '/>
                    </div>
                    <div className='p-2 text-gray-500 bg-white rounded-md'>
                        <AiFillHeart className=' hover:text-pink-500 scale-125 duration-300 '/>
                    </div>
                </div>
                <div className={`absolute top-0 bottom-0 right-0 left-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-black z-20`}/>
            </div>
        </div>
        <div className='mt-2 flex items-center justify-between'>
            <div className='flex align-baseline gap-2 '>
                <ProfilePicture height="20px"/>
                {name}
            </div>
            <div className='flex items-center gap-1 text-gray-600'>
                <AiFillHeart className=' hover:text-pink-600'/>
                {`${likes/1000}k`}
            </div>
            <div className='flex items-center gap-1 text-gray-600' >
                <GrView/>
                {`${views/1000}k`}
            </div>
        </div>
    </div>
  )
}

export default Card