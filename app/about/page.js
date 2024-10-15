'use client'
import React,{useEffect} from 'react';
import Navbar from '@/Components/LandingPage/Navbar';
import TextAboutMe from '@/Components/AboutPage/TextAboutMe';
import TechInfo from '@/Components/AboutPage/TechInfo';
import AboutMe from '@/Components/AboutPage/AboutMe';
import Footer from '@/Components/LandingPage/Footer';
import SkillsAboutMe from '@/Components/AboutPage/SkillsAboutMe';

export default function AboutPage() {
    useEffect(()=>{
        document.title = "About"
    }, []);

    return (
        <div className="w-full min-h-screen bg-black text-white">
            <Navbar />
            <div className="flex md:flex-row md:gap-28 flex-col text-zinc-300">
                <div className="px-3 md:px-5 w-full md:w-1/2">
                    <AboutMe />
                    <TextAboutMe />
                </div>
                <div className="w-full px-3 md:flex justify-center md:w-1/3">
                    <TechInfo />
                </div>
            </div>
            <SkillsAboutMe />
            <Footer />
        </div>
    )
}
