import React from 'react';
import Link from 'next/link';

const ProjectLinks = () => {
    return (
        <div className="w-auto flex flex-col gap-4 items-center">
            <h1 className="text-xl font-bold">Projects</h1>
                <div className="flex flex-col gap-1 text-sm items-center ">
                    <Link href="https://bitem.in"><div className="rounded-full hover:scale-110 hover:text-center hover:font-bold hover:cursor-pointer">B I T E M</div></Link>
                    <Link href="https://strokeml.vercel.app"><div className="rounded-full hover:scale-110 hover:text-center hover:font-bold hover:cursor-pointer">H E A R T &nbsp; S T R O K E &nbsp; A P P</div></Link>
                </div>
        </div>
    );
}

export default ProjectLinks;