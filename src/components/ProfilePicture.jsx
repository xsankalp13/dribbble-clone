import React from 'react'
import { Icon } from '../assets'

const ProfilePicture = ({ size }) => {
  return (
    <img src={Icon} height={size} width={size} className={`rounded-full`}/>
  )
}

export default ProfilePicture