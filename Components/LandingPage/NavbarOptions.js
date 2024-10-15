import React from 'react'
import ProjectsOption from './ProjectsOption';
import ConnectOption from './ConnectOption';
import AboutOption from './AboutOption';
import BlogsOption from './BlogsOption';
import HomeOption from './HomeOption';

const NavbarOptions = () => {
  return (
    <div className="hidden text-white md:flex items-center gap-2 text-sm capitalize">
      <HomeOption />
      <AboutOption />
      <BlogsOption />
      <ProjectsOption />
      <ConnectOption />
    </div>
  )
}

export default NavbarOptions;