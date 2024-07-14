import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    RiExternalLinkLine,
} from '@remixicon/react';

const BlogRPHSCard = () => {
    return (
        <div className="w-full md:w-auto flex flex-col p-3 rounded-[30px] border border-zinc-700 transition ease-in-out">
            <Link href="/blogs/react-password-show-hide">
                <div className="relative w-full md:w-auto h-48 bg-zinc-800 rounded-[20px] overflow-hidden cursor-pointer">
                    <div className="absolute text-white right-3 top-2 z-10"><RiExternalLinkLine size={22} /></div>
                    <Image className="transition ease-in-out delay-100 hover:scale-105 w-full h-full object-cover" src={"/password-hide-show.png"} alt="alt" width={3000} height={3000} />
                </div>
            </Link>
            <div className="w-full md:w-auto mt-5">
                <h1 className="text-center mb-2 font-medium">React Password Hide and Show</h1>
            </div>
        </div>
    )
}

export default BlogRPHSCard;