'use client'
import React, { useState } from 'react';
import LoadImage from './LogoImage';
import NavbarOptions from './NavbarOptions';
import {
  RiMenu2Line,
  RiCloseLine
} from '@remixicon/react';
import SideMenuBar from './SideMenuBar';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowClick = () => {
    setShowMenu(true);
  }
  const handleDontShowClick = () => {
    setShowMenu(false);
  }
  return (
    <div className="relative flex items-center justify-center md:justify-between px-20 py-5 z-[100]">
      <div className="absolute text-white -translate-x-[160px]">
        {showMenu ? (<button onClick={handleDontShowClick} className=""><RiCloseLine size={20}/></button>
        ) : (
        <button onClick={handleShowClick} className=""><RiMenu2Line size={20}/></button>
        )}
      </div>
      {showMenu && <SideMenuBar />}
      <LoadImage />
      <NavbarOptions />
    </div>
  )
}

export default Navbar;
