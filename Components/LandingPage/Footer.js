import React from 'react';
import Logo from './Footer/Logo';
import ProjectLinks from './Footer/ProjectLinks';
import SocialLinks from './Footer/SocialLinks';
import Skills from './Footer/Skills';
import { RiCopyrightLine } from '@remixicon/react';

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
                <h1 className="">AMAN SHARMA | portfolio.amanbs.com</h1>
                <RiCopyrightLine size={15} className=""/>
                <h1 className="">2024</h1>
            </div>
        </div>
    );
}

export default Footer;