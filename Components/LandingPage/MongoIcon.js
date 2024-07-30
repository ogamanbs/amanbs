import React from 'react'
import Image from 'next/image';

const MongoIcon = () => {
  return (
    <div className="h-full w-full overflow-hidden select-none">
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

export default MongoIcon;