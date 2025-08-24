import { useEffect, useState } from "react"


const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const loadingText = "Loading Your Fav Plants"

  useEffect(() => {
    let index = 0;
    const loadingInterval = setInterval(() => {
      setText(loadingText.substring(0, index));
      index++;

      if (index > loadingText.length) {
        clearInterval(loadingInterval);
        setTimeout(() => {
          onComplete();
        }, 2000)
      }


    }, 200)

    return () => clearInterval(loadingInterval);
  }, [onComplete])

  return (
    <div className='fixed inset-0 z-10 bg-white flex flex-col items-center justify-center'>
      <div className='text-4xl font-mono font-bold mb-4 text-center'>
        {text}<span className=" animate-blink text-teal-800 -ml-1">|</span>
      </div>
      <div className=" bg-[#ededed] w-[300px] h-[3px] rounded relative overflow-hidden">
        <div className=" bg-green-800 h-full width-[40%] animate-loading"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
