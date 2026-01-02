import React from 'react'
import Link from 'next/link';
import leetcode from "../../public/leetcode.png";
import {
    RiInstagramLine,
    RiGithubFill,
    RiLinkedinFill,
    RiGlobalLine,
    RiMailLine,
} from '@remixicon/react';
import Image from 'next/image';

const SideMenuBar = ({setShowMenu}) => {

  const handleClick = () => {
    setShowMenu(false);
  }

  return (
    <div className="absolute w-[100%] h-[92vh] bg-black/60 backdrop-blur-lg left-0 top-[8vh] rounded-[30px] z-20 py-20 px-10 flex flex-col items-center">
      <div className="flex flex-col space-y-4 text-xl">
        <Link href="/"><div className="">Home</div></Link>
        <Link href="/about"><div className="">About</div></Link>
        {/* <Link href="https://blogs.amanbs.com/"><div className="">Blogs</div></Link> */}
        <Link href="/#projects"><div onClick={handleClick} className="">Projects</div></Link>
        <Link href="/connect"><div className="">Connect</div></Link>
      </div>
      <div className="mt-20">
      <div className="w-auto h-auto flex flex-wrap items-center justify-center gap-3">
            <Link href="https://www.instagram.com/itsogaman/" passHref legacyBehavior><a target="_blank"><RiInstagramLine size={30} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://github.com/ogamanbs" passHref legacyBehavior><a target="_blank"><RiGithubFill size={30} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://www.linkedin.com/in/aman-sharma-233450226" passHref legacyBehavior><a target="_blank"><RiLinkedinFill size={30} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://leetcode.com/u/amansharma_se/">
              <div className="h-[30px] w-[30px] overflow-hidden">
                <Image className="h-full w-full object-contain" src={leetcode} alt={"leetcode"} width={1440} height={1440} />
              </div>
            </Link>
            <Link href="mailto:amansharmase100@gmail.com"><RiMailLine size={30} color="white" className="cursor-pointer hover:scale-125" /></Link>
        </div>
      </div>
    </div>
  )
}

export default SideMenuBar;
