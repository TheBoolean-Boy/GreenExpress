


import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='absolute top-120 max-w-[1400px] flex flex-col md:flex-row mt-10 bg-gray-200 h-60 px-15 pt-5'>
    <div className='flex-2'>
      <div className='text-2xl font-bold mr-12 flex items-center cursor-pointer'>Plant<span className=' text-green-800'>Express</span></div>
      <p className=' text-[#626160]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt harum quos cum beatae mollitia officia libero veniam incidunt voluptatum vel, iure nesciunt explicabo numquam quibusdam, ratione delectus recusandae ea voluptates iste tempore. Quibusdam corrupti modi, quia dignissimos iusto vitae, minima quidem dicta delectus expedita, aperiam suscipit ullam corporis molestias!</p>
      <div className=' flex text-3xl gap-5 mt-3'>
        <FaSquareXTwitter className=' cursor-pointer hover:scale-115 transition-transform duration-300' /> 
        <FaInstagram className=' cursor-pointer hover:scale-115 transition-transform duration-300' />
        <FaFacebook className=' cursor-pointer hover:scale-115 transition-transform duration-300' />
      </div>
    </div>
    <div className='flex-1 mt-10 md:mt-0 md:ml-10 '>
      <ul className=' flex flex-col gap-2 w-fit text-[#272727]'>
        <li className=' font-semibold mb-3'>Services</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>Species Identification</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>Harmonic Elimination</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>Gulf Provisioning</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>PickUp</li>
      </ul>
    </div>
    <div className='flex-1 mt-10 md:mt-0'>
      <ul className=' flex flex-col gap-2 w-fit text-[#272727]'>
        <li className=' font-semibold mb-3'>Corportate</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>Partnership</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>Sponsership</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>Research</li>
        <li className=' cursor-pointer hover:scale-105 transition-trasnform duration-300 hover:underline hover:text-black'>Careers</li>
      </ul>
    </div>      
    </div>
  )
}

export default Footer
