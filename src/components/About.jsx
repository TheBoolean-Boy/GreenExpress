import { GiBonsaiTree, GiHeavyThornyTriskelion, GiPlantWatering } from 'react-icons/gi'

const About = () => {
  return (
    <div className='px-10  flex justify-between gap-10 mb-10 '>
      <div className=' rounded-2xl shadow hover:shadow-lg hover:scale-75 cursor-pointer shadow-[0px_4px_6px_0px_rgab(#0000001a, #0000001a)] flex-1 flex flex-col gap-5 justify-center items-center  transition-transform duration-300 '>
        <GiHeavyThornyTriskelion className='  size-50 text-[#8b8784] hover:text-[#272727]' />
        <h1 className='   text-3xl text-[#272727] font-bold text-center w-full'>THORNS</h1>
        <p className='p-10 text-xl text-center py-3'>Thorns aren't just nature's defense—they're luxury's edge, embodying strength wrapped in elegance.Our premium-crafted thorns bring beauty with bite, designed to protect while making a bold statement.</p>
      </div>
      <div className='rounded-2xl shadow hover:shadow-lg hover:scale-75 cursor-pointer shadow-[0px_4px_6px_0px_rgab(#0000001a, #0000001a)]  flex-1 flex flex-col gap-2 justify-center items-center transition-transform duration-300 '>
        <GiBonsaiTree  className=' size-50 text-[#8b8784] hover:text-[#272727]' />
        <h1 className='   text-3xl text-[#272727] font-bold text-center w-full flex justify-center'>BONSAI</h1>
        <p className=' p-10 text-xl text-center py-3'>Thorns aren't just nature's defense—they're luxury's edge, embodying strength wrapped in elegance.Our premium-crafted thorns bring beauty with bite, designed to protect while making a bold statement.</p>
      </div>
      <div className='rounded-2xl shadow hover:shadow-lg hover:scale-75 cursor-pointer shadow-[0px_4px_6px_0px_rgab(#0000001a, #0000001a)]  flex-1 flex flex-col gap-5 justify-center items-center transition-transform duration-300 '>
        <GiPlantWatering className=' size-50 text-[#8b8784] hover:text-[#272727]' />
        <h1 className='   text-3xl text-[#272727] font-bold text-center w-full'>TROPICAL</h1>
        <p className=' p-10 text-xl text-center py-3'>Thorns aren't just nature's defense—they're luxury's edge, embodying strength wrapped in elegance.Our premium-crafted thorns bring beauty with bite, designed to protect while making a bold statement.</p>
      </div>
    </div>
  )
}

export default About
