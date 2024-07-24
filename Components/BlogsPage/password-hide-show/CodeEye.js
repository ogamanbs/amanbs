'use client'
import React, { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki/index.mjs';

const code = `import React from 'react';
import {
    RiEye2Line,
    RiEyeCloseLine
} from '@remixicon/react';

export default function Eye({show, setShow}) {

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <button onClick={handleClick} className="w-auto h-auto flex items-center justify-center">
            {  show ? <RiEye2Line /> : <RiEyeCloseLine /> }
        </button>
    )
}`;

const CodeEye = () => {
  const [c, setC] = useState('');

  useEffect(() => {
    const helper = async () => {
      const html = await codeToHtml(code, {
        lang: 'javascript',
        theme: 'slack-dark'
      });
      setC(html);
    };
    helper();
  }, []);

  return (
    <div className="h-auto w-full p-3 text-xs overflow-x-auto">
      <div dangerouslySetInnerHTML={{ __html: c }}/>
    </div>
  );
};

export default CodeEye;
