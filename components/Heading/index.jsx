import React from 'react'

const Heading = ( {heading, title}) => {
  return (
    <>
    <div className="mb-8">
      <h4 className=" text-center capitalize text-secondryColor text-28px font-normal">{heading}</h4>
      <h4 className="text-center capitalize text-secondryColor text-38px font-bold">{title}</h4>
    </div>
  </>
  )
}

export default Heading