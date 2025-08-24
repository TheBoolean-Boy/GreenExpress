

import React, { useContext, } from 'react'
import { TiMinus, TiPlus, } from 'react-icons/ti'
import { StoreContext } from '../context/StoreContext';

const Card = (props) => {
  const { addToCart, cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div className=' bg-white/40 rounded-2xl max-w-[320px] mx-auto flex flex-col items-center shadow-sm hover:shadow-[0px_8px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer transition-all duration-300'>
      <div className='w-full flex justify-center overflow-hidden relative'>
        <img src={props.image} alt={props.name} className='w-full transition-transform duration-300' />

        {
          !cartItems[props.id]
            ? 
            <div className=' bg-white w-[30px] h-[30px] absolute bottom-2 right-2 rounded-full flex items-center justify-center gap-3'>
            <TiPlus className=' text-lg font-bold'
              onClick={() => addToCart(props.id)} />
              </div>
            :
            <div className=' bg-white w-[80px] h-[30px] absolute bottom-2 right-2 rounded-full flex items-center justify-center gap-3'>
              <TiMinus className=' text-lg'
                onClick={() => removeFromCart(props.id)} />
              <p className='rounded-full'>{cartItems[props.id] || 0}</p>
              <TiPlus className=' text-lg font-bold'
                onClick={() => addToCart(props.id)} />
            </div>
        }
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
