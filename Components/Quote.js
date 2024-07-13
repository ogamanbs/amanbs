import React from 'react'

import { Permanent_Marker } from 'next/font/google';

const permanent_Marker = Permanent_Marker({
    weight: '400',
    subsets:['latin']});

const Quote = () => {
  return (
    <div className={permanent_Marker.className}>
        <div className="flex flex-col h-auto mt-20 md:mt-0 md:h-[75vh] justify-center items-center absolute w-full z-30 gap-5 md:gap-0">
          <div className="flex gap-10">
            <div className="text-[5vh] md:text-[10vh]">Great</div>
            <div className="text-[5vh] md:text-[10vh] text-red-600">POWERS</div>
          </div>
          <div className="text-[5vh] md:text-[10vh]">bring</div>
          <div className='flex flex-col text-center md:flex-row md: gap-10'>
            <div className="text-[5vh] md:text-[10vh]"><span className="">Great</span></div>
            <div className="text-[5vh] md:text-[10vh] text-red-600">RESPONSIBILITIES</div>
          </div>
        </div>
    </div>
  )
}

export default Quote;
