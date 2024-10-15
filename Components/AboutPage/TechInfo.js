import React from 'react';

const TechInfo = () => {
    return(
        <div className="h-full w-full mt-20 mb-10 md:mt-5 md:mb-0">
            <div className="flex justify-between">
                <h1 className="text-2xl text-red-300">BTech CSE with AI</h1>
                <h1 className="text-2xl text-red-300">76.7 %</h1>
            </div>
            <h1 className="text-xl mt-2 font-light">GL Bajaj Institute of Technology and Management</h1>
            <h1 className="text-md font-light">Greater Noida, Knowledge Park-III, India</h1>
            <h2 className="text-base text-red-400">2021-2025</h2>
            <div className="h-[0.5px] w-full bg-red-800 mt-3"></div>
            <div className="flex justify-between mt-3">
                <h1 className="text-2xl text-red-300">12th</h1>
                <h1 className="text-2xl text-red-300">89.33 %</h1>
            </div>
            <h1 className="text-xl mt-2 font-light">Central Board of Secondary Education</h1>
            <h1 className="text-md font-light">Delhi, India</h1>
            <h2 className="text-base text-red-400">2019-2020</h2>
            <div className="h-[0.5px] w-full bg-red-800 mt-3"></div>
            <div className="flex justify-between mt-3 text-red-300">
                <h1 className="text-2xl">10th</h1>
                <h1 className="text-2xl">90.2 %</h1>
            </div>
            <h1 className="text-xl mt-2 font-light">Central Board of Secondary Education</h1>
            <h1 className="text-md font-light">Delhi, India</h1>
            <h2 className="text-base text-red-400">2017-2018</h2>
        </div>
    );
}

export default TechInfo;