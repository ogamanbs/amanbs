'use client'
import React,{useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MenuMessenger from '@/Components/Messenger/MenuMessenger';

export const meta = {
    title: 'Messenger',
    description: 'Here you can talk to me directly and i will reply to all of your queries, here itself.'
}

export default function MessengerLayout({children}) {
    const {status} = useSession();
    const [user] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser !== null ? JSON.parse(savedUser) : null;
    });
    const router = useRouter();

    if(user === null) {
        router.replace('/connect');
    }

    useEffect(()=>{
        if (status !== 'loading' && status !== 'authenticated') {
            router.replace('/connect');
        }
    },[status, router]);


    return (
        <>
        {user && (<div className="w-full h-screen flex">
            <div className="hidden md:block w-[18%] h-full" style={{'backgroundColor': '#171717'}}>
                <MenuMessenger user={user} />
            </div>
            <div className="w-full md:w-[82%] h-full" style={{'backgroundColor' : '#212121'}}>
                {children}
            </div>
            </div>
        )}
        </>
    );
}
