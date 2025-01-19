'use client'
import React from 'react';
import Navbar from '../Components/LandingPage/Navbar';
import Quote from '../Components/LandingPage/Quote';
import IntroBox from '../Components/LandingPage/IntroBox';
import Footer from '../Components/LandingPage/Footer';
import ProjectsDisplay from '../Components/LandingPage/projects/ProjectsDisplay';

export default function Home() {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-x-hidden transition ease-in-out delay-150 select-none">
      <Navbar />
      <div className="">
        <Quote />
      </div>
      <IntroBox />
      <ProjectsDisplay />
      <div className="absolute w-[60vh] h-[50vh] rotate-45 bg-red-500 right-0 blur-[250px] -translate-y-20"></div>
      <Footer />
    </div>
  );
}
