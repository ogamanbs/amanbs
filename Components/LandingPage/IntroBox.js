import React from 'react';
import ReactIcon from './ReactIcon';

const IntroBox = () => {
    return (
        <div className="h-auto md:h-[110vh] w-full md:w-[120vw] md:-translate-x-[30vw] flex flex-col md:flex-row gap-20 md:gap-32 justify-center items-center md:items-start py-10 md:py-0 md:-mt-5 mb-10">
            <div className="w-full h-auto md:w-[90vw] md:h-auto md:-translate-y-32 overflow-hidden p-2">
                <ReactIcon />
            </div>
            <div className="h-full md:flex md:items-center md:w-[45vw] px-2 ">
            <div className="absolute w-[60vh] h-[60vh] rotate-45 bg-red-500 right-0 blur-[600px] -z-2 -translate-x-96 translate-y-72"></div>
                <div className="h-auto w-full text-xl md:text-2xl text-center py-10 px-10 rounded-[25px] bg-black/10 backdrop-blur-lg border border-zinc-700 text-zinc-300 z-10">
                    Hi! its
                    &nbsp;<span className="text-red-600">
                        Aman Sharma
                    </span>&nbsp;
                    this side<br/>
                    I am a
                    &nbsp;<span className="text-red-600">
                        Computer Science
                    </span>&nbsp;
                    Engineer
                    <br/>
                    With a Specialization in
                    <div className="">
                        <div className="text-red-600">
                            Artificial Intelligence
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroBox;