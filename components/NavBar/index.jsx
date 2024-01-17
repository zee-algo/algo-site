'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <nav>
        <div className='flex items-center justify-between mx-auto max-w-screen-xl px-10 py-4 shadow bg-white rounded'>
          <a
            href='#'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <Image src='/AlgoLogo.png' alt='' width={100} height={100} />
          </a>

          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className='text-2xl text-black md:hidden block'
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className='text-2xl text-black md:hidden block'
            />
          )}

          <div className='hidden w-full md:block md:w-auto'>
            <ul className='flex flex-col items-center space-x-4 md:space-x-6 rtl:space-x-reverse md:flex-row'>
              <li>
                <a href='#' className='block py-2 px-3' aria-current='page'>
                  Home
                </a>
              </li>
              <li>
                <button className='flex items-center justify-between w-full py-2 px-3 text-gray-900'>
                  Services
                  <svg
                    className='w-2.5 h-2.5 ms-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
                </button>
                <div className='z-10 hidden font-normal bg-white divide-y divide-gray-100 '>
                  <ul className='py-2 '>
                    <li>
                      <a href='#' className='block px-4 py-2'>
                        Websites
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-4 py-2'>
                        Mobile App
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href='#' className='block py-2 px-3 text-gray-900'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='block py-2 px-3 text-gray-900'>
                  About Uss
                </a>
              </li>
              <li>
                <a href='#' className='block py-2 px-3 text-gray-900'>
                  Contact Us
                </a>
              </li>
              <li>
                <span className='py-2 px-3 '>Have Any Question ?</span>
                <br />
                <span className='py-2 px-3 '>+92 42 35817113</span>
              </li>
            </ul>

            

      

          </div>




{/* Responsive */}
<div className={`md:hidden duration-500 top-[83px]  bg-customWhite p-2 fixed w-full 

${
  toggle ? 'left-0' : 'left-[-100%]'
}
`}>
            <ul className=''>
              <li>
                <a href='#' className='block py-2 px-3' aria-current='page'>
                  Home
                </a>
              </li>
              <li>
                <button className='flex items-center justify-between w-full py-2 px-3 text-gray-900'>
                  Services
                  <svg
                    className='w-2.5 h-2.5 ms-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
                </button>
                <div className='z-10 hidden font-normal bg-white divide-y divide-gray-100 '>
                  <ul className='py-2 '>
                    <li>
                      <a href='#' className='block px-4 py-2'>
                        Websites
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-4 py-2'>
                        Mobile App
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href='#' className='block py-2 px-3 text-gray-900'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='block py-2 px-3 text-gray-900'>
                  About Uss
                </a>
              </li>
              <li>
                <a href='#' className='block py-2 px-3 text-gray-900'>
                  Contact Us
                </a>
              </li>
             
            </ul>

            

      

          </div>


        </div>



      </nav>
    </>
  )
}

export default NavBar
