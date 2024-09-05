'use client'
import React from 'react'
import { Krona_One } from 'next/font/google';
import { motion } from 'framer-motion';

const krona_one = Krona_One({
    weight: '400',
    subsets: ['latin']
});

export default function Heading() {
    return (
        <motion.div
        initial={{x:"-100vw"}}
        animate={{x:"0vw"}}
        transition={{duration: 0.5}}
        >
            <h1 className={`hidden md:block absolute ${krona_one.className} text-[17vw] text-red-600 font-bold text-center md:-translate-y-10 w-full`}>Connect</h1>
        </motion.div>
    );
}
