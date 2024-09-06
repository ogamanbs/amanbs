import React from 'react';
import { motion } from 'framer-motion';
import ConnectForm from './ConnectForm';
import GoogleSignInButton from './GoogleSignInButton';

export default function ConnectContainer() {
    return (
        <div className="md:absolute h-auto w-full px-3">
            <div className="relative w-full h-full flex justify-center">
                <div className="absolute w-96 h-96 bg-red-500 -right-10 top-72 md:right-48 md:top-96 blur-[150px] md:blur-[200px]"></div>
                <motion.div
                    initial={{opacity:0, y:"20vh"}}
                    animate={{opacity:1, y:"0vh"}}
                    transition={{duration: 0.6, delay: 0.5}}
                    className={`absolute w-full h-auto md:w-1/2 md:h-auto rounded-[20px] mt-5 bg-black/30 backdrop-blur-md md:backdrop-blur-xl px-5 py-10 md:p-10 border border-zinc-700 md:border-zinc-800 flex flex-col gap-10 items-center`}
                >
                    <ConnectForm />
                    <div className="w-full h-[0.5px] bg-zinc-400"></div>
                    <div className="bg-zinc-700 px-3 py-2 rounded-full font-bold">Or</div>
                    <GoogleSignInButton />
                </motion.div>
            </div>
        </div>
    )
}
