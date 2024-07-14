import React from 'react';
import Link from 'next/link';

const ProjectsOption = () => {
  return (
    <Link href="#foot"><div className="px-5 py-2 hover:bg-zinc-700 rounded-full cursor-pointer">projects</div></Link>
  );
}

export default ProjectsOption;