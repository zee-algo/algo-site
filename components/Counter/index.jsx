import React from 'react'

const Counter = () => {
  return (
    <div className='bg-primaryColor p-4 md:flex justify-center gap-[15%]'>
      <div className='p-3 text-center'>
        <h1 className='text-customWhite text-5xl font-bold'>400+</h1>
        <p className='pt-3 text-customWhite text-xl font-bold text-nowrap'>Projects Complete</p>
      </div>
      <div className='p-3 text-center'>
        <h1 className='text-customWhite text-5xl font-bold'>100+</h1>
        <p className='pt-3 text-customWhite text-xl font-bold text-nowrap'>Clients Served</p>
      </div>
      <div className='p-3 text-center'>
        <h1 className='text-customWhite text-5xl font-bold'>80%</h1>
        <p className='pt-3 text-customWhite text-xl font-bold text-nowrap'>Loyal Clients</p>
      </div>
    </div>
  )
}

export default Counter