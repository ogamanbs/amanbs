'use client'
import React,{useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { RiAttachment2, RiSendPlane2Fill } from '@remixicon/react';
import MessageDisplayArea from '@/Components/ConnectPage/MessengerPage/MessageDisplayArea';
import MessageInputArea from '@/Components/ConnectPage/MessengerPage/MessageInputArea';
import HeadArea from '@/Components/ConnectPage/MessengerPage/HeadArea';

export default function Messenger() {
    const {status} = useSession();
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            } else {
                router.replace('/connect');
            }
        }
    }, [router]);

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
        {user && (
            <div className="relative h-full w-full text-[#D5D5D5] flex flex-col">
                <HeadArea user={user} handleClick={handleClick} handleLogOut={handleLogOut} show={show} />
                <MessageDisplayArea />
                <MessageInputArea user={user} />
            </div>
        )}
        </>
    )
}
