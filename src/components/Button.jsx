import React from 'react'

const Button = ({ title, color, hoverColor }) => {
  return (
    <div>
        <button className={`text-white rounded-md bg-${color} hover:bg-${hoverColor} p-3 hover:cursor-pointer `}>
            {title}
        </button>
    </div>
  )
}

export default Button