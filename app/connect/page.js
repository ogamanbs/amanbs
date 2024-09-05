'use client'
import ConnectContainer from '@/Components/ConnectPage/ConnectContainer';
import Heading from '@/Components/ConnectPage/Heading';
import Footer from '@/Components/LandingPage/Footer';
import Navbar from '@/Components/LandingPage/Navbar';
import React,{useEffect} from 'react';

export default function Connect() {
    useEffect(()=>{
        document.title="Connect";
    },[])
    return (
        <div className="w-full min-h-screen bg-black text-zinc-200 overflow-hidden">
            <Navbar />
            <div className="relative min-h-[70vh] w-full">
                <Heading />
                <ConnectContainer />
            </div>
            <div className="w-full h-[30vh]"></div>
            <div className="w-full h-full">
                <Footer />
            </div>
        </div>
    );
}
