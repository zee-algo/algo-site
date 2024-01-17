import React from 'react'

const NameInput = ({placeholder}) => {
  return (
    <input type="text" placeholder={placeholder} required className='text-[14px] rounded-md w-[100%] p-4 bg-transparent border border-[#bdb5b5]' />
  )
}

export default NameInput