import React from 'react';
import ReactIcon from './ReactIcon';

const IntroBox = () => {
    return (
        <div className="h-auto md:h-[110vh] w-full md:w-[120vw] md:-translate-x-[30vw] flex flex-col md:flex-row gap-20 md:gap-32 justify-center items-center md:items-start py-10 md:py-0 md:-mt-5 mb-10">
            <div className="w-76 h-96 md:w-[90vw] md:h-full overflow-hidden">
                <ReactIcon />
            </div>
            <div className="h-full md:flex md:items-center md:w-[40vw]">
                <div className="h-auto w-full text-xl md:text-2xl text-center">
                    Hi! this is
                    &nbsp;<span className="hover:bg-red-500 hover:text-xl hover:rounded-full text-red-500 hover:text-white hover:py-2 hover:px-5">
                        Aman Sharma
                    </span>&nbsp;
                    this side<br/>
                    I am a
                    &nbsp;<span className="hover:bg-red-500 hover:text-xl hover:rounded-full text-red-500 hover:text-white hover:py-2 hover:px-5">
                        Computer Science
                    </span>&nbsp;
                    undergrad
                    <br/>
                    Doing a Specialization in
                    &nbsp;<spam className="hover:bg-red-500 hover:text-xl hover:rounded-full text-red-500 hover:text-white hover:py-2 hover:px-5">
                        Artificial Intelligence
                    </spam>&nbsp;
                    <br />I am currently in my
                    &nbsp;<spam className="hover:bg-red-500 hover:text-xl hover:rounded-full text-red-500 hover:text-white hover:py-2 hover:px-5">
                        final
                    </spam>&nbsp;
                    year
                </div>
            </div>
        </div>
    )
}

export default IntroBox;