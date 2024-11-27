import React from 'react';
import Image from 'next/image';

export default function HeadArea({user, show, handleLogOut, handleClick}) {
    return (
        <div className="w-full h-[10vh] px-5 py-3 flex justify-between">
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
                {show && <div className="absolute right-0 top-12 bg-zinc-700/30 rounded-[20px] w-auto border border-zinc-700 text-sm flex items-center px-10 py-3">
                    <div className="w-full">
                        <button onClick={handleLogOut} className="w-full">Logout</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}
