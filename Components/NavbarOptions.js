import React from 'react'
import ProjectsOption from '@/Components/ProjectsOption';
import ConnectOption from '@/Components/ConnectOption';
import AboutOption from '@/Components/AboutOption';

const NavbarOptions = () => {
  return (
    <div className="hidden text-white md:flex items-center gap-2 text-sm capitalize">
      <AboutOption />
      <ProjectsOption />
      <ConnectOption />
    </div>
  )
}

export default NavbarOptions;