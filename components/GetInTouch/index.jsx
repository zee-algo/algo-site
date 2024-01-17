import Image from 'next/image'
import React from 'react'

import NameInput from '../TextField/NameInput'
import EmailInput from '../TextField/EmailInput'
import PhoneInput from '../TextField/PhoneInput'
import MessageTextArea from '../TextField/MessageTextArea'
import FullWidthButton from '../Button/FullWidthButton'
import Info from './data'

const GetInTouch = () => {
 
  return (
    <div className='px-16 bg-[#F8F8F8]'>
      <div className='bg-[#F8F8F8] py-6 md:grid lg:grid-cols-2 gap-10'>
        <div className=' col-span-1'>
          <div className='text-center lg:text-left'>
            <h1 className='text-secondryColor text-2xl font-light'>
              Get in Touch
            </h1>
            <h1 className='text-customBlack text-2xl font-bold'>
              Are you ready for a better, more productive business?
            </h1>
            <h1 className='text-[15px] text-secondryColor font-light leading-7'>
              We craft beautiful and unique digital experiences. With more than
              8 years of knowledge and expertise, we design and code clean
              websites and apps!
            </h1>
          </div>

          <div className='sm:grid grid-cols-2'>
            {Info.map((item) => {
              return (
                <>
                  <div className=' flex items-center  py-5 mt-1 lg:flex   lg:text-left sm:block sm:text-center lg:py-0 lg:mt-0  ' key={item.title}>
                    <div className=''>
                      <Image src={item.icon?.src} alt='' width={40} height={50} className='mx-auto' />
                    </div>
                    <div className='pl-8 pr-4 lg:pl-8 lg:pr-4 sm:p-4 '>
                      <h1 className=' text-[16px] sm:text-2xl    lg:text-[16px] lg:mt-0 text-secondryColor font-medium'>
                        {item?.title}
                      </h1>
                      <h2 className=' text-[12px] sm:text-xl lg:text-[12px] text-secondryColor lg:mt-0 mt-1'>
                        {item.text1}
                      </h2>
                      <h2 className=' text-[12px] sm:text-xl lg:text-[12px] text-secondryColor lg:mt-0 mt-1 '>
                        {item.text2}
                      </h2>
                    </div>
                  </div>
                </>
              )
            })}

           
          </div>
        </div>

        {/* Form */}
        <div className='col-span-1 '>
          <div className=' md:flex   justify-between flex-wrap gap-[4%]   p-4 '>
            <div className=' md:w-[45%]  mt-2'>
              <NameInput placeholder={'Name'} />
            </div>
            <div className='md:w-[45%] mt-2 '>
              <EmailInput />
            </div>
            <div className='md:w-[45%] mt-2'>
              <PhoneInput />
            </div>
            <div className='md:w-[45%] mt-2'>
              <NameInput placeholder={'Subject'} />
            </div>
          </div>
          <div className='pl-4 pr-4'>
            <MessageTextArea />
          </div>
          <div className='p-4'>
            <FullWidthButton />
          </div>
        </div>
      </div>
    </div>
  )
}


export default GetInTouch