


import React from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='absolute top-2 px-10 py-2 bg-white rounded-full w-[100%] flex items-center justify-between shadow shadow-[0px_4px_6px_0px_rgab(#0000001a, #0000001a)]'>

      <div className='flex items-baseline'>
        <div className='text-2xl font-bold mr-12 flex items-center cursor-pointer'>Plant<span className=' text-green-800'>Express</span></div>

        <ul className=' hidden md:flex gap-8 items-center'>
          <li className='font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer'>Home</li>
          <li className='font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer'>About</li>
          <li className='font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer'>Products</li>
          <li className='font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer'>Contact Us</li>
        </ul>
      </div>


      <div className=' flex gap-3 items-center justify-between'>
        <div className=' hidden md:flex text-2xl font-semibold gap-4 items-center'>
          <FaSearch className=' cursor-pointer hover:scale-115 transition duration-200' />
          <FaUserCircle className=' cursor-pointer hover:scale-115 transition duration-200' />
        </div>
        <div className='text-2xl font-bold '>
          <HiMenu className=' cursor-pointer hover:scale-115 transition duration-200' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
