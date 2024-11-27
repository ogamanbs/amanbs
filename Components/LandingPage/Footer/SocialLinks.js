import React from 'react';
import Link from 'next/link';
import leetcode from '../../../public/leetcode.png';
import {
    RiInstagramLine,
    RiGithubFill,
    RiLinkedinFill,
    RiGlobalLine,
    RiMailLine,
} from '@remixicon/react';
import Image from 'next/image';

const SocialLinks = () => {
    return (
        <div className="w-auto h-auto flex flex-wrap items-center justify-center gap-3">
            <Link href="https://www.instagram.com/itsogaman/" passHref legacyBehavior><a target="_blank"><RiInstagramLine size={35} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://github.com/ogamanbs" passHref legacyBehavior><a target="_blank"><RiGithubFill size={35} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://www.linkedin.com/in/aman-sharma-233450226" passHref legacyBehavior><a target="_blank"><RiLinkedinFill size={35} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://leetcode.com/u/amansharma_se/">
                <div className="h-[30px] w-[30px] overflow-hidden">
                    <Image className="h-full w-full object-contain" src={leetcode} alt={"leetcode"} width={1440} height={1440} />
                </div>
            </Link>
            <Link href="mailto:amansharmase100@gmail.com"><RiMailLine size={35} color="white" className="cursor-pointer hover:scale-125" /></Link>
        </div>
    )
}

export default SocialLinks;