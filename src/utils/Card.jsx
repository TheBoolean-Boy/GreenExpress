

import React from 'react'

const Card = (props) => {
  return (
    <div className=' rounded-2xl max-w-[320px] mx-auto flex flex-col items-center shadow shadow-[0px_4px_6px_0px_rgba(#0000001a, #0000001a)'>
      <div className='w-full flex justify-center overflow-hidden'>
        <img src={props.image} alt="" className='w-full hover:scale-110 transition-transform duration-300'/>
      </div>
      <div className=' flex flex-col bg-gradient-to-br from-white to-gray-100'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default Card
