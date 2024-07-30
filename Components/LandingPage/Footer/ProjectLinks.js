import React from 'react'

const ProjectLinks = () => {
    return (
        <div className="w-auto flex flex-col gap-4 items-center">
            <h1 className="text-xl font-bold">Projects</h1>
                <div className="flex flex-col gap-1 text-sm items-center ">
                    <div className="rounded-full hover:scale-110 hover:text-center hover:font-bold hover:cursor-pointer">B I T E M</div>
                    <div className="rounded-full hover:scale-110 hover:text-center hover:font-bold hover:cursor-pointer">S T O C K S</div>
                </div>
        </div>
    );
}

export default ProjectLinks;