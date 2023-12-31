import React, { useEffect, useRef } from 'react'
import { FaBars } from "react-icons/fa";

const Sidebar = ({handleToggleBar, barIsOpen}) => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const closeSidebarOnOutsideClick = (e) => {
          if (sidebarRef.current.contains(e.target)) {
            handleToggleBar(false);
          }
        };
    
        document.addEventListener('click', closeSidebarOnOutsideClick);
    
        return () => {
          document.removeEventListener('click', closeSidebarOnOutsideClick);
        };
      }, [handleToggleBar]);

  return (
    <div ref={sidebarRef} className={`absolute top-0 ${barIsOpen ? 'left-0' : '-left-full'} bg-gray-200 bg-opacity-60 h-screen w-screen`}>
        <div className={`fixed ${barIsOpen ? 'right-0' : '-right-full'} transition-all duration-500 top-0 flex flex-col items-end h-screen w-[50vw] border-l-2 border-black bg-white px-4 py-6`}>
            <FaBars onClick={()=>handleToggleBar(false)} />
            <div className='flex flex-col justify-start gap-10 pt-10 text-text1 font-bold'>
                <a href='#about' className='hover:border-text1 border-transparent border-b-2 w-fit'>Tentang Kami</a>
                <a href='#outlet' className='hover:border-text1 border-transparent border-b-2 w-fit'>Semua Outlet</a>
                <a href='#promo' className='hover:border-text1 border-transparent border-b-2 w-fit'>Promo</a>
                <a href='' className='hover:border-text1 border-transparent border-b-2 w-fit'>Karier</a>
                <a href='#download' className='text-text4 hover:border-text4 border-transparent border-b-2 w-fit'>Download App</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar