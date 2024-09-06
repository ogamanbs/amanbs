'use client'
import React,{useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

export default function Messenger() {
    const {data: session} = useSession();
    const [user, setUser] = useState({});
    const router = useRouter();

    useEffect(()=>{
        if (session) {
            setUser(session.user);
        }
    },[session]);

    return (
        <>
        { session ? (<div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mt-5">
                <Image src={user.image} alt={user.name} width={1440} height={1440} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col items-center mt-5">
                <h1 className="">{user.name}</h1>
                <h1 className="">{user.email}</h1>
            </div>
            <div className="">
                <button onClick={()=> signOut({ callbackUrl: '/connect'})} className="mt-5 px-5 py-2 bg-red-500 text-white rounded-lg">sign out</button>
            </div>
        </div>) : router.back()
        }
        </>
    )
}
