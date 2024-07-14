import React from 'react';
import Image from 'next/image';

const LogoImage = () => {
    return (
        <div className="flex gap-3 items-center">
            <div className="h-8 w-8 overflow-hidden select-none">
                <Image
                    priority
                    className="w-full h-full object-cover pointer-events-none"
                    src={"logo.svg"}
                    alt="logo"
                    width={10}
                    height={10}
                />
            </div>
            <h1 className="text-xl">Aman Sharma</h1>
        </div>
    );
}

export default LogoImage;