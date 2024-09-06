import React from 'react';
import Image from 'next/image';

export default function MenuMessenger({user}) {
    return (
        <div className="w-full h-full text-white text-sm py-5">
            <div className="w-full h-auto flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                        priority
                        src={user?.image || '/profile.png'}
                        alt={user?.name || 'user image'}
                        width={1440}
                        height={1440}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-zinc-300">{user?.name}</h1>
                    <h1 className="text-wrap text-xs font-extralight text-zinc-400">{user?.email}</h1>
                </div>
            </div>
        </div>
    )
}
