import React from 'react';

export default function IntroBox() {
    return (
        <div className=" w-full h-48">
            <div className="z-10 w-full md:w-1/2 h-full p-5 md:p-0 md:float-right md:mr-36 text-xl md:text-2xl text-center mt-5">
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
    )
}
