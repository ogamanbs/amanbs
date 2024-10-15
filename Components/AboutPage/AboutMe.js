import React from 'react';
import { Updock } from 'next/font/google';
import './AboutMe.css';

const updock = Updock({
    weight: '400',
    subsets: ['latin']
})

const AboutMe = () => {
    return(
        <h1 className={`heading ${updock.className} text-red-500`}>About Me</h1>
    );
}

export default AboutMe;