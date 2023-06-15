import React from 'react'
import { HeroNavLink,Card } from './'
import { post } from '../constants'
const HeroSection = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <HeroNavLink/>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mx-auto '>
        {post.map((p) => (
          <Card name={p.name} image={p.imgUrl} likes={p.likes} views={p.views} text={p.lineAboutImg}/>
        ))}
      </div>
    </div>
  )
}

export default HeroSection