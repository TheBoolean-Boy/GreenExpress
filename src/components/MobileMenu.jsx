


const MobileMenu = ({mobileMenu, setMobileMenu}) => {
  return (
    <div  className={`absolute flex items-center justify-center bg-white mt-[130px] rounded-3xl 
      w-[300px] h-[500px] mx-auto shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]
      transition-all duration-700  ${mobileMenu ? 'left-5': 'left-10/10'}`}>
      <ul className=" flex flex-col gap-10">
        <li className=" font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer">Home</li>
        <li className=" font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer ">About</li>
        <li className=" font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer ">Products</li>
        <li className=" font-semibold hover:underline transition duration-200 hover:scale-105 cursor-pointer">Contact Us</li>
      </ul>
    </div>
  )
}

export default MobileMenu
