import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function GoogleSignInButton() {
    const handleSignIn = () => {
        signIn('google');
    };

    return (
        <div className="w-full flex flex-col gap-3 items-center">
            <button
                className="w-10 h-10 overflow-hidden p-0 border-none bg-transparent cursor-pointer"
                onClick={handleSignIn}
            >
                <Image
                    className="h-full w-full"
                    src={'/google-logo.png'}
                    alt="Google logo"
                    width={1440}
                    height={1440}
                />
            </button>
            <h1 className="text-sm">Login to direct message me here itself</h1>
        </div>
    );
}