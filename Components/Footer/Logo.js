import React from 'react';
import Image from 'next/image';

export default function Logo() {
    return (
        <div className="h-auto w-auto flex flex-col items-center">
            <div className="h-20 w-20 overflow-hidden select-none">
                <Image
                    priority
                    className="w-full h-full object-cover pointer-events-none"
                    src="logo.svg"
                    alt="logo"
                    width={10}
                    height={10}
                />
            </div>
            <h1 className="text-3xl">Aman Sharma</h1>
        </div>
    )
}
