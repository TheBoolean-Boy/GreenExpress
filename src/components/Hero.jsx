import Button from '../utils/Button'
import mud from '../assets/greenmud.png'
import bonsai1 from '../assets/bonsai1.png'
import bonsai2 from '../assets/bonsai2.png'

const Hero = () => {
  return (
    <div className=' min-h-screen flex flex-col md:flex-row gap-40 justify-start py-10 px-9'>
      <div className='flex-1 flex flex-col gap-10 order-2 z-5'>
        <div className='text-[#272727] text-4xl md:text-8xl font-bold'>Largest Online <br /> <span className='text-green-800'>Green</span> Retail <br /> Store</div>
        <div>
        <p className=' -mt-5 text-[#8b8784]'>Plant Express is the only international supplier of hybrid, luxury and decorative plant species. We span across 345 cities and 97 countries.</p>
        </div>
        <div>
        <Button buttonText={"Explore"} />
        </div>
      </div>
      <div className=' flex-1 bg-contain relative'>
      <div className=' absolute top-0 '>
        <img src={`${bonsai1}`} alt="" className=' scale-90 -mt-15' />
      </div>
      </div>

    </div>
  )
}

export default Hero