import React from 'react';
import Link from 'next/link';

const AboutOption = () => {
  return (
    <Link href="#intro"><div className="px-5 py-2 hover:bg-zinc-700 rounded-full cursor-pointer">about</div></Link>
  );
}

export default AboutOption;