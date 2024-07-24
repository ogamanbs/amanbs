'use client'
import React, { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki/index.mjs';

const code = `'use client'
import React, {useState} from 'react';
import Eye from './Eye';

const PasswordInput = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="w-full md:w-1/4 h-auto border border-zinc-100 rounded-full flex items-center justify-center px-5 py-2 gap-2 z-10">
            <input
                type={show ? 'text' : 'password'}
                placeholder="password"
                className="w-full outline-none bg-transparent bg-red-500"
            />
            <Eye show={show} setShow={setShow} />
        </div>
    )
}

export default PasswordInput;`;

const CodePasswordInput = () => {
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

export default CodePasswordInput;
