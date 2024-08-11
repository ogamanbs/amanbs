import React from 'react'
import SocialLinks from './Footer/SocialLinks';
import Link from 'next/link';
import {
    RiInstagramLine,
    RiGithubFill,
    RiLinkedinFill,
    RiGlobalLine,
    RiMailLine,
} from '@remixicon/react';


const SideMenuBar = () => {
  return (
    <div className="absolute w-[80%] h-auto bg-black  top-20 -translate-y-3 left-5 rounded-[30px] z-50 p-10 flex flex-col items-center">
      <div className="flex flex-col space-y-4">
      <Link href="/about"><div className="">About</div></Link>
        <Link href="https://blogs.amanbs.com/"><div className="">Blogs</div></Link>
        <div className="">Projects</div>
        <div className="">Connect</div>
      </div>
      <div className="mt-10">
      <div className="w-auto h-auto flex flex-wrap items-center justify-center gap-3">
            <Link href="https://www.instagram.com/itsogaman/" passHref legacyBehavior><a target="_blank"><RiInstagramLine size={25} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://github.com/ogamanbs" passHref legacyBehavior><a target="_blank"><RiGithubFill size={25} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://www.linkedin.com/in/aman-sharma-233450226" passHref legacyBehavior><a target="_blank"><RiLinkedinFill size={25} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://www.amanbs.com/"><RiGlobalLine size={25} color="white" className="cursor-pointer hover:scale-125" /></Link>
            <Link href="mailto:amansharmase100@gmail.com"><RiMailLine size={25} color="white" className="cursor-pointer hover:scale-125" /></Link>
        </div>
      </div>
    </div>
  )
}

export default SideMenuBar;
