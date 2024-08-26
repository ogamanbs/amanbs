'use client'
import React from 'react'
import { Krona_One } from 'next/font/google';
import {motion, AnimatePresence} from 'framer-motion';

const krona_one = Krona_One({
    weight: '400',
    subsets: ['latin']
});

export default function ConnectForm() {
    return (
        <div className="absolute h-auto w-full">
            <div className="relative w-full h-full flex justify-center px-3">
                <div className="absolute w-96 h-96 bg-red-500 -right-10 top-72 md:right-48 md:top-96 blur-[150px] md:blur-[200px]"></div>
                <motion.div
                initial={{opacity:0, y:"20vh"}}
                animate={{opacity:1, y:"0vh"}}
                transition={{duration: 0.6, delay: 0.5}}
                className={`absolute ${krona_one.className} w-full h-auto md:w-1/2 md:h-auto rounded-[20px] bg-black/30 backdrop-blur-md md:backdrop-blur-xl mt-36 p-10 border border-zinc-700 md:border-zinc-800 flex flex-col gap-10 items-center`}>
                    <div className="text-sm flex flex-col items-center w-full">
                        <h1 className="text-xl text-zinc-400">Name :</h1>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name here"
                            autoComplete='off'
                            className="w-full md:w-1/2 border-b border-red-500 p-2 outline-none bg-transparent mt-3 text-center"
                        />
                    </div>
                    <div className="text-sm w-full flex flex-col items-center">
                        <h1 className="text-xl text-zinc-400">Email :</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email here"
                            autoComplete='off'
                            className="w-full md:w-2/3 border-b border-red-500 p-2 outline-none bg-transparent mt-3 text-center"
                        />
                    </div>
                    <div className="text-sm w-full flex flex-col items-center mt-5">
                        <h1 className="text-xl text-zinc-400">Message :</h1>
                        <textarea
                            type="text"
                            name="name"
                            rows="4"
                            placeholder="Enter your message here"
                            autoComplete='off'
                            className="w-full bg-zinc-900 rounded-[20px] outline-none mt-3 text-xs p-5"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
