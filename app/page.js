'use client'

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
      <div className="absolute w-96 h-96 rotate-45 bg-red-500 right-0 blur-[300px]"></div>
      <Projects />
      <Footer />
    </div>
  );
}
