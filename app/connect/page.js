'use client'
import ConnectForm from '@/Components/ConnectPage/ConnectForm';
import Heading from '@/Components/ConnectPage/Heading';
import Navbar from '@/Components/LandingPage/Navbar';
import React,{useEffect} from 'react';

export default function Connect() {
    useEffect(()=>{
        document.title="Connect";
    },[])
    return (
        <div className="w-full min-h-screen bg-black text-zinc-200">
            <Navbar />
            <div className="relative min-h-[80vh] w-full">
                <Heading />
                <ConnectForm />
            </div>
            <div className="h-32"></div>
        </div>
    );
}
