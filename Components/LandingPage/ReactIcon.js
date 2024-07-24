import React from 'react'
import Image from 'next/image';
const ReactIcon = () => {
  return (
    <div 
    id="intro" 
    className="md:visible h-52 w-52 md:h-[60vw] md:w-[60vw] overflow-hidden md:rotate-12 absolute translate-x-20 translate-y-[60vh] md:translate-y-[48vh] md:-translate-x-72 select-none">
      <Image
        className="w-full h-full object-cover pointer-events-none"
        src={"react.svg"}
        alt="react-image"
        width={10}
        height={10}
      />
    </div>
  );
}

export default ReactIcon;