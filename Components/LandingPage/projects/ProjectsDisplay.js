import React from 'react'
import { Bebas_Neue } from 'next/font/google';
import Bitem from './Bitem';
import Strokeml from './Strokeml';

const bebas_Neue = Bebas_Neue({
    weight: '400',
    subsets:['latin']
});

const ProjectsDisplay = () => {
    return (
        <div id="projects" className="relative z-20 h-full w-full md:p-5 mt-20 md:-translate-y-48 select-none">
            <div className="h-full w-full text-sm">
                <div className="mb-32">
                    <h1 className={`text-center text-8xl font-bold ${bebas_Neue.className}`}>
                        <span className="text-red-600">Pro</span>
                        <span className="text-white/70">jects</span>
                    </h1>
                </div>
                <div className="">
                    <Bitem />
                    <Strokeml />
                </div>
            </div>
        </div>
    )
}

export default ProjectsDisplay;