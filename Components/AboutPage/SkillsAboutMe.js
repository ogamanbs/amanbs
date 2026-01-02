import React from 'react';
import Image from 'next/image';

const SkillsAboutMe = () => {
    return (
        <div className="h-auto w-[100vw] flex items-center justify-center py-10 px-5 mt-5">
            <div className="h-auto w-[100vw] bg-zinc-900 rounded-[30px] flex flex-wrap gap-8 px-10 py-20 justify-center">
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden">
                        <Image className="w-full h-full object-contain" src="/java.png" alt="java" width={1440} height={1440} />
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">Java</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full  rounded-[20px] overflow-hidden">
                        <Image src="/javascript.png" alt="javascript" width={1440} height={1440} />
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">JavaScript</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full  rounded-[20px] overflow-hidden">
                    <Image src="react.svg" alt="react.js" width={1440} height={1440} />
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">React JS</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden flex items-center">
                        <Image className="bg-zinc-300 rounded-[5px]" src="/express.png" alt="express.js" width={1440} height={1440} />
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">Express JS</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden">
                        <Image src="node-js.svg" alt="node.js" width={1440} height={1440} />
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">Node JS</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden flex items-center">
                        <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">Object Oriented Programming</h1>
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">Object Oriented Programming</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden flex items-center">
                        <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">SQL</h1>
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">SQL</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full  rounded-[20px] overflow-hidden">
                        <Image src="mongodb.svg" alt="mongoDB" width={1440} height={1440} />
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">MongoDB</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden flex items-center">
                        <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">Low Level System Design</h1>
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">Low Level Design</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden flex items-center">
                        <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">High level System Design</h1>
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">High Level Design</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden flex items-center">
                        <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">UI/UX Design</h1>
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">UI/UX Design</h2>
                </div>
                <div className="h-auto w-48 flex flex-col">
                    <div className="h-48 w-full rounded-[20px] overflow-hidden flex items-center">
                        <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">RESTful APIs</h1>
                    </div>
                    <h2 className="text-center p-1 text-zinc-200 text-sm">RESTful APIs</h2>
                </div>
            </div>
        </div>
    )
}

export default SkillsAboutMe;