import React from 'react'

const Testimonial = () => {
  return (
   
    <div class="testimonials-card mt-5">
    <div className="w-full p-6 shadow bg-white rounded">
      <div class="mb-5">
        <p className="text-secondryColor text-11px font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="flex items-center">
      <div class="rounded-full">
        <img
          class="w-20 h-20 rounded-full"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt=""
          width="100%"
          height="100%"
        />
        </div>
        <div className="p-5">
          <h2 className="text-secondryColor text-16px font-semibold leading-5 text-nowrap">Fawad Ahmad</h2>
          <p className="text-secondryColor text-12px font-normal">Product Designer</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial