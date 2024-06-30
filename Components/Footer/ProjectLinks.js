import React from 'react'

export default function ProjectLinks() {
    return (
        <div className="w-auto flex flex-col gap-4 items-center">
            <h1 className="text-xl font-bold">Projects</h1>
                <div className="flex flex-col gap-1 text-md">
                    <div className="px-3 rounded-full hover:bg-zinc-700 hover:scale-110 hover:text-center hover:cursor-pointer">stock prediction webapp</div>
                    <div className="px-3 rounded-full hover:bg-zinc-700 hover:scale-110 hover:text-center hover:cursor-pointer">mongo C R U D</div>
                </div>
        </div>
    );
}
