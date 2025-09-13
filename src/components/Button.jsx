import React from 'react'

const Button = ({children}) => {
  return (
    <button className='w-fit bg text-white py-1.5 px-7 rounded-2xl font-semibold'>{children}</button>
  )
}

export default Button