import React from 'react'
import Image from 'next/image';

export default function MongoIcon() {
  return (
    <div className="h-32 w-32 md:h-[20rem] md:w-[20rem] overflow-hidden absolute z-[1] right-0  md:-translate-x-32  translate-y-[150px] md:translate-y-10 select-none">
      <Image
        className="w-full h-full object-cover pointer-events-none"
        src={"mongodb.svg"}
        alt="react-image"
        width={10}
        height={10}
      />
    </div>
  );
}
