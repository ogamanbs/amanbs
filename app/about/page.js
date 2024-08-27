'use client'
import React,{useEffect} from 'react';
import Image from 'next/image';
import Navbar from '@/Components/LandingPage/Navbar';

export default function AboutPage() {
    useEffect(()=>{
        document.title = "About"
    }, []);

    return (
        <div className="w-full min-h-screen bg-black text-white">
            <Navbar />
            <div className="px-3 md:px-5 mb-10">
                <div className="relative w-full h-[20vh] md:h-[60vh] overflow-hidden rounded-[20px]">
                    <div className="absolute w-full h-full">
                        <Image className="h-auto w-full object-cover" src={"https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" width={1440} height={1440} />
                    </div>
                    <div className="absolute w-full h-full md:h-full bg-black/50 flex items-center justify-center">
                        <div className="px-10">
                            <h1 className="bg-gradient-to-r from-red-500 text-[10vw] to-white/60 select-none bg-clip-text text-transparent font-extrabold">Welcome...</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-zinc-400">
                <div className="px-3 md:px-5 w-full md:w-1/2">
                    <p>Hi, I am <span className="text-white">Aman Bindiya Sharma</span></p><p className="mb-3">I am final year student, pusuing <span className="text-white">BTech in Computer Scinece and Engineering with specialization in Artificial Intelligence</span>.</p><p>
                    Although, I am having my minor as <span className="text-zinc-100">Artificial Intelligence</span> but I am more inclined towards <span className="text-white">web development</span>. I use <span className="text-white">MERN (MongoDB, Express,js, React.js and Node.js)</span> as my tech stack for <span className="">full stack web development</span>.
                    I am learning <span className="text-zinc-100">System Design</span>, and it astonishes me that how the BIG companies operate on such a great scale, their software cater to such a great variety and great number of users.
                    I want to help organizations to build softwares that can cater a large userbase and learn the same to hone my skills and to be able to impact the whole world.
                    </p>
                </div>
            </div>
            <div className="mt-10 md:mt-20 flex flex-col">
                <h1 className="text-red-400/50 md:text-red-400/40 text-center text-[10vw] font-extrabold leading-[50px] sm:leading-[90px] md:leading-[140px]"> What I can help you with. </h1>
                <div className="mt-10 md:mt-20 flex flex-col items-center">
                    <div className="w-full md:w-1/2 h-auto flex gap-10 flex-wrap mb-32 justify-center">
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden">
                            <Image className="w-full h-full object-contain" src="/java.png" alt="java" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <Image src="/javascript.png" alt="javascript" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <Image src="react.svg" alt="react.js" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <Image className="bg-zinc-200" src="/express.png" alt="express.js" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <Image src="node-js.svg" alt="node.js" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <Image src="https://pointgorsel.com/en/wp-content/uploads/sites/2/2023/08/oop-1170x700.png" alt="OOPS" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <Image src={"https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Azure-SQL-Server-Monitoring.component.complex-narrative-xl-retina.ts=1689345623470.png/content/adobe-cms/us/en/products/instana/supported-technologies/microsoft-sql-server-monitoring/jcr:content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage"} alt="SQL" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <Image src="mongodb.svg" alt="mongoDB" width={1440} height={1440} />
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">Low level System Design</h1>
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">High level System Design</h1>
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">UI/UX Design</h1>
                        </div>
                        <div className="w-36 h-36 md:w-48 md:h-48 bg-zinc-950 hover:bg-zinc-900 rounded-[20px] overflow-hidden flex items-center">
                            <h1 className="w-full text-wrap font-bold bg-blue-950 text-center text-xl px-3 py-3 select-none">RESTful APIs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
