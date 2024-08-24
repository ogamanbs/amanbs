'use client'
import React from 'react';
import Navbar from '../Components/LandingPage/Navbar';
import Quote from '../Components/LandingPage/Quote';
import IntroBox from '../Components/LandingPage/IntroBox';
import Footer from '../Components/LandingPage/Footer';
import Projects from '../Components/LandingPage/Projects';

export default function Home() {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-x-hidden transition ease-in-out delay-150">
      <Navbar />
      <div className="">
        <Quote />
      </div>
      <IntroBox />
      <div className="absolute w-[60vh] h-[60vh] rotate-45 bg-red-500 right-0 blur-[250px] -z-2 -translate-y-20"></div>
      <Projects />
      <Footer />
    </div>
  );
}
