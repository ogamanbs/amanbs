import React from 'react';
import Link from 'next/link';

const ConnectOption = () => {
  return (
    <Link href="/connect"><div className="px-5 py-2 hover:bg-zinc-700 rounded-full cursor-pointer">connect</div></Link>
  )
}

export default ConnectOption;