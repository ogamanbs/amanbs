'use client'
import React, { useState } from 'react';
import LoadImage from './LogoImage';
import NavbarOptions from './NavbarOptions';
import {
  RiMenu2Line,
  RiCloseLine
} from '@remixicon/react';
import SideMenuBar from './SideMenuBar';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowClick = () => {
    setShowMenu(true);
  }
  const handleDontShowClick = () => {
    setShowMenu(false);
  }
  return (
    <div className="relative flex items-center justify-center md:justify-between pl-5 pr-20 py-5 z-[100]">
      <div className="absolute text-white left-2 block md:hidden">
        {showMenu ? (<button onClick={handleDontShowClick} className=""><RiCloseLine size={20}/></button>
        ) : (
        <button onClick={handleShowClick} className=""><RiMenu2Line size={20}/></button>
        )}
      </div>
      {showMenu && <SideMenuBar />}
      <Link href="/"><LoadImage /></Link>
      <NavbarOptions />
    </div>
  )
}

export default Navbar;
