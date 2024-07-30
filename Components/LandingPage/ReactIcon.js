import React from 'react'
import Image from 'next/image';
const ReactIcon = () => {
  return (
    <div
    id="intro"
    className="h-full w-full object-cover select-none">
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