import React from 'react'

const Explore = () => {
  return (
    <div className='p-2 '>
      <div className=' bg-gradient-to-r from-[#0A664A] to-primaryColor  max-w-[100%]  pl-3 pr-0 py-3 mx-1 sm:flex sm:justify-between md:max-w-[90%] md:mx-auto  md:px-4 md:py-6'>
        <div className=''>
          <p className='text-customWhite md:text-xl'>
            We’re here to help to grow your business.
          </p>
          <h3 className='text-customWhite pt-1 text-[16px] md:text-2xl font-bold'>
            Looking for the Best IT Business Solutions?
          </h3>
        </div>
        <div className=' mt-3 sm:flex sm:pr-2  sm:justify-between'>
          <button className=' px-4 py-2 md:px-4 bg-customWhite  rounded-md'>
            <span className=' text-[15px] text-customBlack'>Explore Us</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Explore