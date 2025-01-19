'use client'
import React,{useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MenuMessenger from '@/Components/Messenger/MenuMessenger';

export const meta = {
    title: 'Messenger',
    description: 'Here you can talk to me directly and i will reply to all of your queries, here itself.'
}

export default function MessengerLayout({children}) {
    const {status} = useSession();
    const [user, setUser] = useState(null);
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
        if (status !== 'loading' && status !== 'authenticated') {
            router.replace('/connect');
        }
    },[status, router]);

    const handleLogOut = () => {
        localStorage.setItem('user', null);
        signOut({callbackUrl: '/connect'});
    }


    return (
        <>
        {user && (
            <div className="relative">
                <div className="absolute w-full h-[94vh] md:h-screen bg-black/60 bg-blur-[250px] z-10 flex items-center justify-center text-white">
                    <div className="md:w-[30%] flex flex-col gap-3 border border-zinc-700 rounded-[20px] py-2">
                        <div className="py-2 px-5">
                            <h1 className="text-2xl font-bold">Coming Soon...</h1>
                        </div>
                        <div className="py-2 px-5 text-sm">
                            <h1 className="">Still working on this feature please stay tuned.</h1>
                            <h1 className="mb-3">Once this feature is ready then you can directly message me here itself without any problem or issue</h1>
                        </div>
                        <div className="flex items-center justify-center pb-2">
                            <button onClick={handleLogOut} className="text-sm px-5 py-2 bg-red-600/70 rounded-[10px] text-white font-semibold">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full h-[94vh] md:h-screen flex">
                    <div className="hidden md:block w-[18%] h-full bg-[#655c5c]">
                        <MenuMessenger user={user} />
                    </div>
                    <div className="w-full md:w-[82%] h-full bg-[#212121]">
                        {children}
                    </div>
                </div>
            </div>
        )}
        </>
    );
}