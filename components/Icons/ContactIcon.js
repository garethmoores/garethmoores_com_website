import React from 'react';

export function ContactIcon({ href, styling, children }) {
  return (
    <a href={href} className="text-white no-underline" rel="nopener noreferrer" target="_blank">
      <li className={`${styling} m-1 bg-white rounded-full flex items-center justify-center border-2 border-gray-400`}>
        {children}
      </li>
    </a>
  );
}

