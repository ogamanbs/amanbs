import React from 'react';
import Link from 'next/link';
import {
  RiArrowLeftSLine

} from '@remixicon/react';
import BlogRPHSCard from '@/Components/BlogsPage/BlogCards/BlogRPHSCard';

const Blogs = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
        {/* <div className="flex">
            <a href="/" className=""><h1 className="text-white bg-blue-500 px-5 py-2 rounded-full">Home</h1></a>
        </div>
        <Link href="/blogs/react-password-show-hide"><button className="text-white bg-lime-600 px-5 py-2 rounded-full mt-5">React Password Show and Hide</button></Link> */}
        <Link href="/"><div className="block md:hidden absolute left-8 top-6 z-10"><RiArrowLeftSLine size={25}/></div></Link>
        <div className="relative flex items-center justify-center md:justify-between px-20 py-5 ">
          <h1 className="text-2xl">Blogs</h1>
          <div className="text-sm hidden md:block">
            <Link href="/" className=""><button className="px-5 py-2 hover:bg-zinc-700 rounded-full">Home</button></Link>
          </div>
        </div>
        <div className="flex flex-wrap space-x-5 py-10 px-5 md:px-20">
          <BlogRPHSCard />
        </div>
    </div>
  )
}

export default Blogs;
