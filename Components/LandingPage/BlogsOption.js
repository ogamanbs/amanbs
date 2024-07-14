import React from 'react';
import Link from 'next/link';

const BlogsOption = () => {
  return (
    <Link href="/blogs"><div className="px-5 py-2 hover:bg-zinc-700 rounded-full cursor-pointer">blogs</div></Link>
  )
}

export default BlogsOption;