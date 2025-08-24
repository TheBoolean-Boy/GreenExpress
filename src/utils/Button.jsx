

import React from 'react'

const Button = ({buttonText}) => {
  return (
    <button className= 'border-none cursor-pointer bg-white/80 backdrop-blur-[8px] shadow shadow-[0px_6px_8px_0px_rgba(#0000001a, #0000001a)] hover:shadow-[0px_10px_12pxpx_0px_rgba(#0000001a,0000001a )] text-xl px-10 py-2 rounded-full text-[#272727] font-500 text-center hover:-translate-y-0.5 transition duration-300'>
    {buttonText}
    </button>
  )
}

export default Button
