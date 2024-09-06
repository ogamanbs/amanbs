'use client'
import ConnectContainer from '@/Components/ConnectPage/ConnectContainer';
import Heading from '@/Components/ConnectPage/Heading';
import Footer from '@/Components/LandingPage/Footer';
import Navbar from '@/Components/LandingPage/Navbar';
import React,{useEffect} from 'react';
import {useSession} from 'next-auth/react';
import {redirect} from 'next/navigation';

export default function Connect() {
    const {data: session, status} = useSession();
    useEffect(()=>{
        document.title="Connect";
        if(status === 'authenticated' && session) {
            localStorage.setItem('user', JSON.stringify(session.user));
            redirect('/connect/messenger');
        }
    },[status, session]);
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
