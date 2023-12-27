import React, { useState, useEffect, useRef } from 'react'
import { FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';

const Header = () => {
    const [barIsOpen, setBarIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleToggleBar = (status) =>{
        setBarIsOpen(status);
    }

    

  return (
    <>
        <div className='h-[10vh] fixed z-50 w-screen bg-white bg-opacity-95 flex justify-between 2xl:px-40 xl:px-32 lg:px-28 md:px-20 sm:px-4 px-4 items-center'>
            <a href=''>
                <img className='2xl:w-3/4 xl:w-2/3 lg:w-1/2 w-1/2' src="/img/logo.png" alt="" />
            </a>
            <div className='2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-between gap-10 text-text1 font-bold 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px]'>
                <a href=''>Tentang Kami</a>
                <a href=''>Semua Outlet</a>
                <a href=''>Promo</a>
                <a href=''>Karier</a>
                <a href='' className='text-text4'>Download App</a>
            </div>
            <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block block'>
                <FaBars ref={sidebarRef} onClick={()=>handleToggleBar(true)} />
                <Sidebar handleToggleBar={handleToggleBar} barIsOpen={barIsOpen}/>
            </div>
        </div>
    </>
  )
}

export default Header