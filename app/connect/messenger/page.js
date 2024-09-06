'use client'
import React,{useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { RiAttachment2, RiSendPlane2Fill } from '@remixicon/react';

export default function Messenger() {
    const {status} = useSession();
    const [user] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser !== null ? JSON.parse(savedUser) : null;
    });
    const [show, setShow] = useState(false);
    const router = useRouter();

    if(user === null) {
        router.replace('/connect');
    }

    useEffect(()=>{
        if (status === 'unauthenticated') {
            router.replace('/connect');
        }
        if (status !== 'authenticated' && status !== 'loading') {
            router.replace('/connect');
        }
    },[status, router]);

    const handleClick = () => {
        setShow(!show);
    }

    const handleLogOut = () => {
        localStorage.setItem('user', null);
        signOut({callbackUrl: '/connect'});
    }

    return (
        <>
        {user && (<div className="relative h-screen w-full text-[#D5D5D5] flex flex-col">
            <div className="w-full px-5 py-3 flex justify-between">
                <div className="px-1">
                    <h1 className="text-lg cursor-pointer text-[#B4B4B4] font-medium">AmanBS</h1>
                </div>
                <div className="relative">
                    <button onClick={handleClick} className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
                        <Image
                            priority
                            src={user?.image || '/profile.png'}
                            alt={user?.name || 'user image'}
                            width={1440}
                            height={1440}
                            className="w-full h-full object-cover"
                        />
                    </button>
                    {show && <div className="absolute right-0 top-12 bg-zinc-700/30 rounded-[20px] w-[15vw] border border-zinc-700 text-sm flex items-center px-10 py-3">
                        <div className="w-full">
                            <button onClick={handleLogOut} className="w-full">Logout</button>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="w-full h-full">
                {/* This is the area where we will display the messages */}
            </div>
            <div className="bottom-0 h-auto w-full flex flex-col items-center justify-around py-2 px-3 gap-2">
                <div className="h-[52px] w-full md:w-[65%] rounded-full flex p-2 items-center gap-2" style={{'backgroundColor':'#2F2F2F'}}>
                    <div className="w-10 rounded-full h-10 bg-transparent flex items-center justify-center">
                        <RiAttachment2 />
                    </div>
                    <div className="w-full">
                        <textarea
                            type="text"
                            placeholder="Message AmanBS"
                            rows="1"
                            className="w-full mt-2 bg-transparent outline-none resize-none font-light text-base placeholder:text-[#D5D5D5] placeholder:font-lighter"
                        />
                    </div>
                    <div className="w-12 rounded-full h-10 flex items-center justify-center bg-transparent cursor-pointer">
                        <button className=""><RiSendPlane2Fill /></button>
                    </div>
                </div>
                <h1 className="text-xs text-zinc-400">You are chatting with Aman Bindiya Sharma.</h1>
            </div>
        </div>)
        }
        </>
    )
}
