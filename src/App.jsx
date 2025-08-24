

import React, { useState } from 'react'
import Button from './utils/Button'
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className=' h-screen bg-[#ededed]'>
    {
      !isLoading?
      <LoadingScreen onComplete={ () => setIsLoading(true)}/>
      :<></>
    }
    <Button buttonText={"See All"}/>
    <br />
      <h1 className=' mt-10 text-[#272727] font-bold text-8xl'>This is an H1 Tag</h1>
    </div>
  )
}

export default App
