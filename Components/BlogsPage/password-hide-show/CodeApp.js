'use client'
import React, { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki/index.mjs';

const code = `import './App.css';
import React from 'raect';
import PasswordInput from './components/PasswordInput';

export default function App() {
    return(
        <div className="min-h-screen w-full bg-zinc-900 flex items-center justify-center">
            <PasswordInput />
        </div>
    )
}
`;

const CodeApp = () => {
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

export default CodeApp;
