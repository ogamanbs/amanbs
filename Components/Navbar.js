import React from 'react';
import LoadImage from './LogoImage';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center md:justify-between px-20 py-5 z-[100]">
      <LoadImage />
      <NavbarOptions />
    </div>
  )
}

export default Navbar;
