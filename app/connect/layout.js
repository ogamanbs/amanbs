'use client'
import SessionWrapper from '@/Components/SessionWrapper';
import React from 'react';

export const meta = {
    title: 'Connect',
    description: 'Hello, i would love to connect with you guys'
}

export default function ConnectLayout({children}) {
    return (
        <SessionWrapper>
            {children}
        </SessionWrapper>
    )
}
