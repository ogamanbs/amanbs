import React from 'react';
import Link from 'next/link';

const HomeOption = () => {
  return (
    <Link href="/"><div className="px-5 py-2 hover:bg-zinc-700 rounded-full cursor-pointer">home</div></Link>
  );
}

export default HomeOption;