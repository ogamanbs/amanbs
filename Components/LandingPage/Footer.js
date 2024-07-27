import React from 'react';
import Logo from './Footer/Logo';
import ProjectLinks from './Footer/ProjectLinks';
import SocialLinks from './Footer/SocialLinks';
import Skills from './Footer/Skills';
import { RiCopyrightLine } from '@remixicon/react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="p-5">
            <div id="foot" className="mt-32 h-full w-full flex flex-col md:flex-row justify-around items-center gap-10 md:gap-32 p-10 border border-zinc-700 rounded-[30px] mb-3">
                <Logo />
                <ProjectLinks />
                <Skills />
                <SocialLinks />
            </div>
            <div className="flex text-sm items-center justify-center gap-2">
                <div className="flex gap-2 items-center">
                    <div className="h-5 w-5 ">
                        <Image className="h-full w-full object-cover" src="logo.svg" alt="www.amanbs.com" width={1440} height={1440} />
                    </div>
                    <h1 className=""><Link href="">www.amanbs.com</Link></h1>
                </div>
                <RiCopyrightLine size={15} className=""/>
                <h1 className="">2024</h1>
            </div>
        </div>
    );
}

export default Footer;