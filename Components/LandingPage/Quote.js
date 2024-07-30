import React from 'react'

import {Bebas_Neue  } from 'next/font/google';
import MongoIcon from './MongoIcon';

const bebas_Neue = Bebas_Neue({
    weight: '400',
    subsets:['latin']});

const Quote = () => {
  return (
    <div className={bebas_Neue.className}>
        <div className="relative flex flex-col h-auto w-full mt-10 md:mt-10 md:h-[75vh] justify-center md:gap-0 font-medium leading-[10vh] md:leading-[20vh] px-2 md:px-5">
          <div className="absolute flex items-center justify-center -right-10 md:right-48 top-0 w-72 md:w-96 h-72 md:h-96">
            <MongoIcon />
          </div>
          <div className="absolute w-96 h-96 bg-red-500 -top-48 md:top-0 -left-64 md:left-0 blur-[200px] md:blur-[300px] "></div>
          <div className="hidden md:block absolute w-96 h-96 bg-red-500 right-0 -bottom-48 blur-[300px] "></div>
          <div className="flex flex-col md:items-center md:flex-row md:gap-10 z-3">
            <div className="text-[18vw] md:text-[12vw]">Great</div>
            <div className="text-[18vw] md:text-[12vw] text-red-600">POWERS</div>
          </div>
          <div className="text-[18vw] md:text-[12vw]">bring</div>
          <div className='flex flex-col md:items-center md:flex-row md:gap-10'>
            <div className="text-[18vw] md:text-[12vw]"><span className="">Great</span></div>
            <div className="text-[18vw] md:text-[12vw] text-red-600">RESPONSIBILITIES</div>
          </div>
        </div>
    </div>
  )
}

export default Quote;
