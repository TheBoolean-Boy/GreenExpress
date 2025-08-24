

import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const Card = (props) => {
  return (
    <div className=' bg-white/40 rounded-2xl max-w-[320px] mx-auto flex flex-col items-center shadow shadow-[0px_8px_10px_0px_rgba(#0000001a, #0000001a) overflow-hidden hover:scale-90 cursor-pointer transition-all duration-300'>
      <div className='w-full flex justify-center overflow-hidden relative'>
        <img src={props.image} alt="" className='w-full hover:scale-110 transition-transform duration-300'/>
        <div>
        <IoMdAdd />
        </div>
      </div>
      <div className=' flex flex-col bg-gradient-to-br from-white to-gray-100 py-4'>
        <h1 className=' text-[#272727] text-3xl font-semibold text-start mb-3 px-3'>{props.name}</h1>
        <p className='px-3 text-xl text-[#292929] mb-5'>{props.description}</p>
        <p className='px-3 text-2xl font-semibold text-[#272727]'>${props.price}</p>
      </div>
    </div>
  )
} 

export default Card
