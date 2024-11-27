import { RiAttachment2, RiSendPlane2Fill } from '@remixicon/react';
import React from 'react';


export default function MessageInputArea({user}) {
    return (
        <div className="bottom-0 max-h-[20vh] h-auto w-full flex flex-col items-center justify-around py-2 px-3 gap-2">
            <div className="h-[52px] w-full md:w-[65%] lg:w-[60%] rounded-[30px] flex px-2 items-center gap-2 bg-[#2F2F2F]">
                <div className="w-10 rounded-[30px] h-auto bg-transparent flex items-center justify-center">
                    <RiAttachment2 />
                </div>
                <div className="w-full h-auto">
                    <textarea
                        type="text"
                        placeholder="Message AmanBS"
                        rows="1"
                        className="w-full mt-2 h-auto bg-transparent outline-none resize-none font-light text-base placeholder:text-[#D5D5D5] placeholder:font-lighter"
                    />
                </div>
                <div className="w-12 rounded-full h-10 flex items-center justify-center bg-transparent cursor-pointer">
                    <button className=""><RiSendPlane2Fill /></button>
                </div>
            </div>
            <h1 className="text-xs text-zinc-400">You are chatting with Aman Bindiya Sharma.</h1>
        </div>
    );
}
