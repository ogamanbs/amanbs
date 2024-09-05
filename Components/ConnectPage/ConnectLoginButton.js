'use client'
import React from 'react';
import Image from 'next/image';

export default function ConnectLoginButton() {
    return (
        <div className="text-xs flex flex-col items-center gap-3">
            <button className="height-8 w-8 overflow-hidden">
                <Image src={"/google-logo.png"} alt="google-logo" width={1440} height={1440} className="h-full w-full object-cover"/>
            </button>
            <h1 className="">Login to direct message me</h1>
        </div>
    )
}
