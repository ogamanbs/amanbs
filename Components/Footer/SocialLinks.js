import React from 'react';
import Link from 'next/link';
import {
    RiInstagramLine,
    RiGithubFill,
    RiLinkedinFill,
    RiGlobalLine,
    RiMailLine,
} from '@remixicon/react';

export default function SocialLinks() {
    return (
        <div className="w-auto h-auto flex flex-wrap items-center justify-center gap-3">
            <Link href="https://www.instagram.com/itsogaman/" passHref legacyBehavior><a target="_blank"><RiInstagramLine size={35} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://github.com/ogamanbs" passHref legacyBehavior><a target="_blank"><RiGithubFill size={35} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://www.linkedin.com/in/aman-sharma-233450226" passHref legacyBehavior><a target="_blank"><RiLinkedinFill size={35} color="white" className="cursor-pointer hover:scale-125" /></a></Link>
            <Link href="https://portfolio.amanbs.com/"><RiGlobalLine size={35} color="white" className="cursor-pointer hover:scale-125" /></Link>
            <Link href="mailto:amansharmase100@gmail.com"><RiMailLine size={35} color="white" className="cursor-pointer hover:scale-125" /></Link>
        </div>
    )
}
