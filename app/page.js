'use client'

import Navbar from '../Components/LandingPage/Navbar';
import Quote from '../Components/LandingPage/Quote';
import ReactIcon from '../Components/LandingPage/ReactIcon';
import MongoIcon from '../Components/LandingPage/MongoIcon';
import IntroBox from '../Components/LandingPage/IntroBox';
import CoverSpace from '../Components/LandingPage/CoverSpace';
import Footer from '../Components/LandingPage/Footer';
import Projects from '../Components/LandingPage/Projects';

export default function Home() {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-x-hidden transition ease-in-out delay-150">
      <Navbar />
      <div className="relative">
        <Quote />
        <ReactIcon />
        <MongoIcon />
        <div className="absolute w-96 h-96 rotate-45 bg-red-500 translate-x-32 blur-[300px]"></div>
      </div>
      <CoverSpace />
      <IntroBox />
      <div className="absolute w-96 h-96 rotate-45 bg-red-500 right-0 blur-[300px]"></div>
      <Projects />
      <Footer />
    </div>
  );
}
