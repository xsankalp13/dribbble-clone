import React from 'react'
import { Icon } from '../assets'

const ProfilePicture = ({ height }) => {
  return (
    <img src={Icon} className={`h-[${height}] rounded-full`}/>
  )
}

export default ProfilePicture