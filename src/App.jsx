
import { useState } from 'react'
import Button from './utils/Button'
import LoadingScreen from './components/LoadingScreen';

import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Order from './pages/Order';
import Home from './pages/Home';
import MobileMenu from './components/MobileMenu';


const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {
        !isLoading ?
          <LoadingScreen onComplete={() => setIsLoading(true)} />
          : <></>
      }
      <div className=' max-w-[1400px] mx-auto relative'>
        {
          mobileMenu ? <MobileMenu mobileMenu={mobileMenu} setMobileMenu ={setMobileMenu} /> : <></>
        }
        <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/order"} element={<Order />} />
        </Routes>
        {/* <Footer /> */}
      </div>

    </>
  )
}

export default App
